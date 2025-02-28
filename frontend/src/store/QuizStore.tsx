import { create } from "zustand";
import { apiService } from "../api/apiService";
import { Question, QuizSet } from "../Question/type/QuestionType";
import { FilterService } from "../services/FilterService";
import { LocalStorageService } from "../services/LocalStorageService";
import { QuizService } from "../services/QuizService";

interface QuizStore {
  questionList: Question[];
  quizSet: QuizSet;
  selectedCategories: string[];
  categories?: string[];
  mainCategories?: string[];

  // Actions
  loadQuestions: () => Promise<void>;
  generateQuizSet: () => void;
  setSelectedCategories: (categories: string[]) => void;
  filterQuestions: (categories: string[]) => void;
  updateUserAnswer: (questionId: string, optionId: number) => void; 
  resetQuizState: () => void;
  

  // Getters
  getQuestionPoints: (questionId: string) => number;
  getTotalPoints: () => number;
  getAllCategories: () => string[];
}

const useQuizStore = create<QuizStore>((set, get) => ({
  questionList: [],
  quizSet: LocalStorageService.getQuizSet(),
  selectedCategories: [],


  loadQuestions: async () => {
    const questions = await apiService.fetchQuestions();
    const { processedQuestions, allCategories } = FilterService.getProcessedQuestionsAndCategories(questions);
    set({ questionList: processedQuestions, mainCategories: allCategories });
  },
  resetQuizState: () => {
    const emptyQuizSet: QuizSet = {
      questions: [],
      answers: [],
      totalPossiblePoints: 0,
      totalAchievedPoints: 0,
    };
    LocalStorageService.saveQuizSet(emptyQuizSet);
    set({ quizSet: emptyQuizSet, selectedCategories: [] });
  },
  getAllCategories: () => FilterService.getAllCategories(get().questionList),

  generateQuizSet: () => {
    const newQuizSet = QuizService.generateQuizSet(
      get().questionList,
      get().selectedCategories,
      6
    );
    LocalStorageService.saveQuizSet(newQuizSet);
    set({ quizSet: newQuizSet });
  },

  updateUserAnswer: (questionId, optionId) => {
    const updatedQuizSet = QuizService.updateAnswer(
      get().quizSet,
      questionId,
      optionId
    );
    LocalStorageService.saveQuizSet(updatedQuizSet);
    set({ quizSet: updatedQuizSet });
  },

  filterQuestions: (categories) => {
    const filteredQuestions = FilterService.filterQuestions(
      get().questionList,
      categories
    );
    set({
      quizSet: {
        ...get().quizSet,
        questions: filteredQuestions,
      },
    });
  },

  

  setSelectedCategories: (categories) => set({ selectedCategories: categories }),

  getQuestionPoints: (questionId) =>
    get().quizSet.answers.find((answer) => answer.question.id === questionId)
      ?.achievedPoints || 0,

  getTotalPoints: () => get().quizSet.totalAchievedPoints,

}));

export default useQuizStore;