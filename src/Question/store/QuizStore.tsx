import { create } from "zustand";
import questionsData from "../data/questionData";

import { FilterService } from "../../services/FilterService";
import { LocalStorageService } from "../../services/LocalStorageService";
import { QuizService } from "../../services/QuizService";
import type { Question, QuizSet } from "../type/QuestionType";

interface QuizStore {
  questionList: Question[];
  quizSet: QuizSet;
  selectedCategories: string[];
  // Zustandsmethoden
  generateQuizSet: () => void;
  filterQuestions: (categories: string[]) => void; // Methode umbenennen/hinzufügen
  setSelectedCategories: (categories: string[]) => void;
  updateUserAnswer: (questionId: string, optionText: string) => void;
  // Getter
  getQuestionPoints: (questionId: string) => number;
  getTotalPoints: () => number;
  getAllCategories: () => string[];
  resetQuizState: () => void;
}

const useQuizStore = create<QuizStore>((set, get) => ({
  questionList: questionsData,
  quizSet: LocalStorageService.getQuizSet(),
  selectedCategories: [],
  resetQuizState: () => {
    set({
      quizSet: LocalStorageService.saveQuizSet({
        questions: [],
        answers: [],
        totalPossiblePoints: 0,
        totalAchievedPoints: 0,
      }),
      selectedCategories: [],
    });
  },

  generateQuizSet: () => {
    const newSet = QuizService.generateQuizSet(
      get().questionList,
      get().selectedCategories,
      5 // Anzahl Fragen
    );
    set({ quizSet: LocalStorageService.saveQuizSet(newSet) });
  },

  updateUserAnswer: (questionId, optionText) => {
    const updated = QuizService.updateAnswer(
      get().quizSet,
      questionId,
      optionText
    );
    set({ quizSet: LocalStorageService.saveQuizSet(updated) });
  },
  filterQuestions: (categories) => {
    const filtered = FilterService.filterQuestions(
      get().questionList,
      categories
    );

    const updatedQuizSet = {
      ...get().quizSet,
      questions: filtered,
    };

    LocalStorageService.saveQuizSet(updatedQuizSet);
    set({ quizSet: updatedQuizSet });
  },

  getQuestionPoints: (questionId) =>
    get().quizSet.answers.find((a) => a.question.id === questionId)
      ?.achievedPoints || 0,

  getTotalPoints: () => get().quizSet.totalAchievedPoints,

  getAllCategories: () => FilterService.getAllCategories(get().questionList),

  setSelectedCategories: (categories) =>
    set({ selectedCategories: categories }),
}));

export default useQuizStore;
