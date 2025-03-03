// src/store/QuizStore.ts
import { create } from "zustand";
import { apiService } from "../api/apiService";
import { Question, QuizSet } from "../Question/type/QuestionType";
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

interface CoreState {
  questionList: Question[];
  selectedCategories: string[];
  mainCategories?: string[];
  questionStats: Record<string, QuestionStats>;
  loadQuestions: () => Promise<void>;
  setSelectedCategories: (categories: string[]) => void;
  filterQuestions: (categories: string[]) => void;
  getAllCategories: () => string[];
  updateQuestionStats: (questionId: string, points: number) => void;
}

interface ExamModeState {
  quizSet: QuizSet;
  generateQuizSet: () => void;
  updateUserAnswer: (questionId: string, optionId: number) => void;
  resetQuizState: () => void;
  getQuestionPoints: (questionId: string) => number;
  getTotalPoints: () => number;
}

interface ProgressModeState {
  progressModeState: Record<string, { status: "unanswered" | "correct" | "incorrect"; attempts: number }>;
  setProgressModeState: (state: Record<string, { status: "unanswered" | "correct" | "incorrect"; attempts: number }>) => void;
  generateProgressQuizSet: () => void;
}

interface EndlessModeState {
  endlessModeState: { answered?: string[]; lastIndex?: number; mode: "random" | "sequential" };
  setEndlessModeState: (state: { answered?: string[]; lastIndex?: number; mode: "random" | "sequential" }) => void;
  generateEndlessNextQuestion: () => Question | null;
}

type QuizStore = CoreState & ExamModeState & ProgressModeState & EndlessModeState;

const useQuizStore = create<QuizStore>((set, get) => ({
  // Core Slice
  questionList: [],
  selectedCategories: [],
  mainCategories: FilterService.staticMainCategories,
  questionStats: LocalStorageService.getItem("questionStats", {}),
  loadQuestions: async () => {
    const questions = await apiService.fetchQuestions();
    const { processedQuestions, allCategories } = FilterService.getProcessedQuestionsAndCategories(questions);
    set({ questionList: processedQuestions, mainCategories: allCategories });
  },
  setSelectedCategories: (categories) => set({ selectedCategories: categories }),
  filterQuestions: (categories) => {
    const filteredQuestions = FilterService.filterQuestions(get().questionList, categories);
    set({ quizSet: { ...get().quizSet, questions: filteredQuestions } });
  },
  getAllCategories: () => FilterService.getAllCategories(get().questionList),
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

  // Exam Mode Slice
  quizSet: LocalStorageService.getQuizSet(),
  generateQuizSet: () => {
    const newQuizSet = QuizService.generateQuizSet(get().questionList, get().selectedCategories, 6);
    LocalStorageService.saveQuizSet(newQuizSet);
    set({ quizSet: newQuizSet });
  },
  updateUserAnswer: (questionId, optionId) => {
    const updatedQuizSet = QuizService.updateAnswer(get().quizSet, questionId, optionId);
    const answer = updatedQuizSet.answers.find(a => a.question.id === questionId);
    if (answer) ScoringService.updateStatsAfterAnswer(answer, get().updateQuestionStats);
    LocalStorageService.saveQuizSet(updatedQuizSet);
    set({ quizSet: updatedQuizSet });
  },
  resetQuizState: () => {
    const emptyQuizSet: QuizSet = { questions: [], answers: [], totalPossiblePoints: 0, totalAchievedPoints: 0 };
    LocalStorageService.saveQuizSet(emptyQuizSet);
    set({ quizSet: emptyQuizSet, selectedCategories: [] });
  },
  getQuestionPoints: (questionId) =>
    get().quizSet.answers.find((answer) => answer.question.id === questionId)?.achievedPoints || 0,
  getTotalPoints: () => get().quizSet.totalAchievedPoints,

  // Progress Mode Slice
  progressModeState: LocalStorageService.getItem("progressModeState", {}),
  setProgressModeState: (state) => {
    LocalStorageService.saveItem("progressModeState", state);
    set({ progressModeState: state });
  },
  generateProgressQuizSet: () => {
    const { questionList, progressModeState } = get();
    const unanswered = questionList.filter(q => !progressModeState[q.id] || progressModeState[q.id].status === "unanswered");
    const incorrect = questionList.filter(q => progressModeState[q.id]?.status === "incorrect");
    const questions = unanswered.length > 0 ? unanswered.slice(0, 5) : incorrect.slice(0, 5);
    const newQuizSet = QuizService.generateQuizSet(questions, [], questions.length);
    LocalStorageService.saveQuizSet(newQuizSet);
    set({ quizSet: newQuizSet });
  },

  // Endless Mode Slice
  endlessModeState: LocalStorageService.getItem("endlessModeState", { mode: "random", answered: [], lastIndex: 0 }),
  setEndlessModeState: (state) => {
    LocalStorageService.saveItem("endlessModeState", state);
    set({ endlessModeState: state });
  },
  generateEndlessNextQuestion: () => {
    const { questionList, endlessModeState } = get();
    if (endlessModeState.mode === "random") {
      const unanswered = questionList.filter(q => !endlessModeState.answered?.includes(q.id));
      return unanswered.length > 0 ? unanswered[Math.floor(Math.random() * unanswered.length)] : null;
    } else {
      const nextIndex = endlessModeState.lastIndex || 0;
      return nextIndex < questionList.length ? questionList[nextIndex] : null;
    }
  },
}));

export default useQuizStore;