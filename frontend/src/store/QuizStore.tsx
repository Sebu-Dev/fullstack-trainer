import { create } from "zustand";
import { apiService } from "../api/apiService";
import type { Question, QuizSet } from "../Question/type/QuestionType";
import { FilterService } from "../services/FilterService";
import { LocalStorageService } from "../services/LocalStorageService";
import { QuizService } from "../services/QuizService";
import { ScoringService } from "../services/ScoringService";

interface QuestionStats {
  attempts: number;
  correctCount: number;
  incorrectCount: number;
  partialPoints: number[];
}

interface QuizStore {
  questionList: Question[];
  selectedCategories: string[];
  questionStats: Record<string, QuestionStats>;
  answeredQuestionIds: string[]; // Neues Feld für beantwortete Fragen
  quizSet: QuizSet;
  loadQuestions: () => Promise<void>;
  setSelectedCategories: (categories: string[]) => void;
  filterQuestions: (categories: string[]) => Question[];
  updateQuestionStats: (questionId: string, points: number) => void;
  resetAllQuizStates: () => void;

  generateQuizSet: () => void;
  updateUserAnswer: (questionId: string, optionId: number) => void;
  getQuestionPoints: (questionId: string) => number;
  getTotalPoints: () => number;

  progressQuizSet: QuizSet;
  progressModeState: Record<string, { status: "unanswered" | "correct" | "incorrect"; attempts: number }>;
  generateProgressQuizSet: () => void;
  updateProgressAnswer: (questionId: string, optionId: number) => void;
  setProgressModeState: (state: Record<string, { status: "unanswered" | "correct" | "incorrect"; attempts: number }>) => void;

  endlessQuestion: Question | null;
  endlessModeState: { answered?: string[]; lastIndex?: number; mode: "random" | "sequential" };
  generateEndlessNextQuestion: () =>  void;
  updateEndlessAnswer: (questionId: string, optionId: number) => void;
  setEndlessModeState: (state: { answered?: string[]; lastIndex?: number; mode: "random" | "sequential" }) => void;
}

const useQuizStore = create<QuizStore>((set, get) => ({
  questionList: [],
  selectedCategories: [],
  questionStats: LocalStorageService.getItem("questionStats", {}),
  answeredQuestionIds: LocalStorageService.getAnsweredQuestionIds(), 
  quizSet: LocalStorageService.getQuizSet(),
  loadQuestions: async () => {
    const questions = await apiService.fetchQuestions();
    set({ questionList: questions });
  },
  setSelectedCategories: (categories) => {
    set({ selectedCategories: categories });
  },
  filterQuestions: (categories) => FilterService.filterQuestions(get().questionList, categories),
  updateQuestionStats: (questionId, points) => {
    const currentStats = get().questionStats[questionId] || { attempts: 0, correctCount: 0, incorrectCount: 0, partialPoints: [] };
    const updatedStats = {
      ...currentStats,
      attempts: currentStats.attempts + 1,
      correctCount: points === 4 ? currentStats.correctCount + 1 : currentStats.correctCount,
      incorrectCount: points < 4 ? currentStats.incorrectCount + 1 : currentStats.incorrectCount,
      partialPoints: [...currentStats.partialPoints, points],
    };
    const newStats = { ...get().questionStats, [questionId]: updatedStats };
    LocalStorageService.saveItem("questionStats", newStats);
    set({ questionStats: newStats });
  },
  resetAllQuizStates: () => {
    const emptyQuizSet = { questions: [], answers: [], totalPossiblePoints: 0, totalAchievedPoints: 0 };
    LocalStorageService.saveQuizSet(emptyQuizSet);
    LocalStorageService.saveProgressQuizSet(emptyQuizSet);
    LocalStorageService.saveItem("progressModeState", {});
    LocalStorageService.saveItem("endlessQuizSet", null);
    LocalStorageService.saveItem("endlessModeState", { mode: "random", answered: [], lastIndex: 0 });
    LocalStorageService.saveAnsweredQuestionIds([]); // Reset answeredQuestionIds
    set({
      quizSet: emptyQuizSet,
      progressQuizSet: emptyQuizSet,
      progressModeState: {},
      endlessQuestion: null,
      endlessModeState: { mode: "random", answered: [], lastIndex: 0 },
      selectedCategories: [],
      answeredQuestionIds: [],
    });
  },

  generateQuizSet: () => {
    const newQuizSet = QuizService.generateQuizSet(get().filterQuestions(get().selectedCategories), get().selectedCategories, 6);
    LocalStorageService.saveQuizSet(newQuizSet);
    set({ quizSet: newQuizSet });
  },
  updateUserAnswer: (questionId, optionId) => {
    const updatedQuizSet = QuizService.updateAnswer(get().quizSet, questionId, optionId);
    LocalStorageService.saveQuizSet(updatedQuizSet);
    set({ quizSet: updatedQuizSet });
  },
  getQuestionPoints: (questionId) => get().quizSet.answers.find((answer) => answer.question.id === questionId)?.achievedPoints || 0,
  getTotalPoints: () => get().quizSet.totalAchievedPoints,

  progressQuizSet: LocalStorageService.getProgressQuizSet(),
  progressModeState: LocalStorageService.getItem("progressModeState", {}),
  generateProgressQuizSet: () => {
    const { questionList, selectedCategories, answeredQuestionIds } = get();


    // Filtere Fragen basierend auf Kategorien (falls vorhanden)
    const availableQuestions = selectedCategories.length > 0
      ? FilterService.filterQuestions(questionList, selectedCategories)
      : questionList;

    // Schließe bereits beantwortete Fragen aus
    const unanswered = availableQuestions.filter(
      (q) => !answeredQuestionIds.includes(q.id)
    );

    // Wenn keine unbeantworteten Fragen übrig sind, setze answeredQuestionIds zurück
    if (unanswered.length === 0) {
      LocalStorageService.saveAnsweredQuestionIds([]);
      set({ answeredQuestionIds: [] });
      // Verwende alle verfügbaren Fragen neu
      const questions = availableQuestions.slice(0, 5);
      const newQuizSet = QuizService.generateQuizSet(questions, [], questions.length);
      LocalStorageService.saveProgressQuizSet(newQuizSet);
      set({ progressQuizSet: newQuizSet });
    } else {
      // Wähle bis zu 5 unbeantwortete Fragen
      const questions = unanswered.slice(0, 5);
      const newQuizSet = QuizService.generateQuizSet(questions, [], questions.length);
      LocalStorageService.saveProgressQuizSet(newQuizSet);
      set({ progressQuizSet: newQuizSet });
    }
  },
  updateProgressAnswer: (questionId, optionId) => {
    const updatedQuizSet = QuizService.updateAnswer(get().progressQuizSet, questionId, optionId);
    const answer = updatedQuizSet.answers.find(a => a.question.id === questionId);
    if (answer) {
      const points = ScoringService.calculateQuestionPoints(answer);
      const isCorrect = points === 4;
      const newAnsweredQuestionIds = [...get().answeredQuestionIds, questionId];
      LocalStorageService.saveAnsweredQuestionIds(newAnsweredQuestionIds);
      set({
        progressModeState: {
          ...get().progressModeState,
          [questionId]: {
            status: isCorrect ? "correct" : "incorrect",
            attempts: (get().progressModeState[questionId]?.attempts || 0) + 1,
          },
        },
        answeredQuestionIds: newAnsweredQuestionIds,
      });
      ScoringService.updateStatsAfterAnswer(answer, get().updateQuestionStats);
    }
    LocalStorageService.saveProgressQuizSet(updatedQuizSet);
    set({ progressQuizSet: updatedQuizSet });
  },
  setProgressModeState: (state) => {
    LocalStorageService.saveItem("progressModeState", state);
    set({ progressModeState: state });
  },

  endlessQuestion: LocalStorageService.getItem("endlessQuizSet", null),
  endlessModeState: LocalStorageService.getItem("endlessModeState", { mode: "random", answered: [], lastIndex: 0 }),
  generateEndlessNextQuestion: () => {
    const { questionList, endlessModeState, answeredQuestionIds } = get();

    const availableQuestions = FilterService.filterQuestions(questionList, get().selectedCategories);
    if (endlessModeState.mode === "random") {
      const unanswered = availableQuestions.filter(q => !answeredQuestionIds.includes(q.id));
      if (unanswered.length === 0) set({ answeredQuestionIds: [] });
      set({ endlessQuestion: unanswered.length ? unanswered[Math.floor(Math.random() * unanswered.length)] : null });
    } else {
      const nextIndex = (endlessModeState.lastIndex ?? 0) % availableQuestions.length;
      set({ endlessQuestion: availableQuestions[nextIndex], endlessModeState: { ...endlessModeState, lastIndex: nextIndex + 1 } });
    }
  },

  updateEndlessAnswer: (questionId, optionId) => {
    const answer = get().endlessQuestion;
    if (!answer) return;

    ScoringService.updateStatsAfterAnswer({ question: answer, selectedOption: optionId }, get().updateEndlessAnswer);
    const newAnsweredQuestionIds = [...get().answeredQuestionIds, questionId];
    LocalStorageService.saveAnsweredQuestionIds(newAnsweredQuestionIds);
    set({ answeredQuestionIds: newAnsweredQuestionIds });
    get().generateEndlessNextQuestion();
  },

  setEndlessModeState: (state) => {
    LocalStorageService.saveItem("endlessModeState", state);
    set({ endlessModeState: state });
  },
}));
export default useQuizStore;
