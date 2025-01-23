import { create } from "zustand";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  setDefaultAnswers,
  shuffleArray,
  toggleAnswerInList,
} from "../../utils/helpers";
import questionsData from "../data/questionData";
import type { Answer, Option, Question } from "../type/QuestionType";

interface QuizStore {
  questionList: Question[];
  userAnswers: Record<string, Option[]>;
  answers: Answer[];
  quizSet: Question[];
  selectedCategories: string[];
  setUserAnswer: (questionId: string, answers: Option[]) => void;
  toggleAnswer: (questionId: string, answer: Option) => void;
  createQuiz: () => void;
  setQuizSet: (newQuizSet: Question[]) => void;
  setSelectedCategories: (categories: string[]) => void;
  filterQuestionsByCategories: () => void;
  createNewRandomQuizSet: () => void;
}

const useQuizStore = create<QuizStore>((set, get) => {
  const updateQuizSetInLocalStorage = (newQuizSet: Question[]) => {
    saveToLocalStorage("quizSet", newQuizSet);
    set({ quizSet: newQuizSet });
  };

  const updateUserAnswersInLocalStorage = (
    updatedAnswers: Record<string, Option[]>
  ) => {
    saveToLocalStorage("userAnswers", updatedAnswers);
    set({ userAnswers: updatedAnswers });
  };

  const filterQuestions = (categories: string[]) =>
    categories.length
      ? questionsData.filter((question) =>
          categories.every((category) => question.category.includes(category))
        )
      : questionsData;

  return {
    questionList: questionsData,
    userAnswers: getFromLocalStorage("userAnswers", {}),
    answers: getFromLocalStorage("answers", setDefaultAnswers()),
    quizSet: getFromLocalStorage("quizSet", questionsData),
    selectedCategories: [],

    setQuizSet: updateQuizSetInLocalStorage,

    setSelectedCategories: (categories: string[]) => {
      set({ selectedCategories: categories });
      get().filterQuestionsByCategories();
    },

    filterQuestionsByCategories: () => {
      const { selectedCategories } = get();
      const filteredQuestions = filterQuestions(selectedCategories);
      set({ quizSet: filteredQuestions });
    },

    createQuiz: () => {
      const { selectedCategories, questionList } = get();
      const filteredQuestions = filterQuestions(selectedCategories);
      const shuffledQuestions = shuffleArray(filteredQuestions);
      const newQuizSet = shuffledQuestions.slice(0, 5);

      const quizWithShuffledAnswers = newQuizSet.map((quiz) => ({
        ...quiz,
        answerOptions: shuffleArray(quiz.options),
      }));

      updateQuizSetInLocalStorage(quizWithShuffledAnswers);
    },

    createNewRandomQuizSet: () => {
      set({ selectedCategories: [] });
      get().filterQuestionsByCategories();
    },

    setUserAnswer: (questionId: string, answers: Option[]) =>
      set((state) => {
        const updatedAnswers = {
          ...state.userAnswers,
          [questionId]: answers,
        };
        updateUserAnswersInLocalStorage(updatedAnswers);
        return { userAnswers: updatedAnswers };
      }),

    toggleAnswer: (questionId: string, answer: Option) =>
      set((state) => {
        const updatedAnswers = {
          ...state.userAnswers,
          [questionId]: toggleAnswerInList(
            state.userAnswers[questionId] || [],
            answer
          ),
        };
        updateUserAnswersInLocalStorage(updatedAnswers);
        return { userAnswers: updatedAnswers };
      }),
  };
});

export default useQuizStore;
