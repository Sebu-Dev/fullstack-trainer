import { create } from "zustand";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  shuffleArray,
} from "../../utils/helpers";
import questionsData from "../data/questionData";
import type { Question, Quizset } from "../type/QuestionType";

interface QuizStore {
  questionList: Question[];
  quizSet: Quizset;
  selectedCategories: string[];
  createQuizset: () => void;
  setSelectedCategories: (categories: string[]) => void;
  toggleUserAnswer: (questionId: string, optionId: string) => void;
  submitQuiz: () => { correctAnswers: number; totalQuestions: number }; // Bewertung (später)
}

const useQuizStore = create<QuizStore>((set, get) => {
  const updateQuizSetInLocalStorage = (newQuizSet: Quizset) => {
    saveToLocalStorage("quizSet", newQuizSet);
    set({ quizSet: newQuizSet });
  };

  const filterQuestions = (categories: string[]) =>
    categories.length
      ? questionsData.filter((question) =>
          categories.every((category) => question.category.includes(category))
        )
      : questionsData;

  return {
    questionList: questionsData,
    quizSet: getFromLocalStorage("quizSet", {
      questions: [],
      answers: [],
    }),
    selectedCategories: [],

    setSelectedCategories: (categories: string[]) => {
      set({ selectedCategories: categories });
    },

    createQuizset: () => {
      const { selectedCategories } = get();
      const filteredQuestions = filterQuestions(selectedCategories);
      const shuffledQuestions = shuffleArray(filteredQuestions);
      const selectedQuestions = shuffledQuestions.slice(0, 5);

      const quizset: Quizset = {
        questions: selectedQuestions,
        answers: selectedQuestions.map((question) => ({
          question,
          userAnswers: question.options.map((option) => ({
            option,
            isSelected: false,
          })),
        })),
      };

      updateQuizSetInLocalStorage(quizset);
    },

    toggleUserAnswer: (questionId: string, optionText: string) => {
      const { quizSet } = get();

      const updatedAnswers = quizSet.answers.map((answer) => {
        if (answer.question.id === questionId) {
          return {
            ...answer,
            userAnswers: answer.userAnswers.map((userAnswer) =>
              userAnswer.option.text === optionText
                ? { ...userAnswer, isSelected: !userAnswer.isSelected }
                : userAnswer
            ),
          };
        }
        return answer;
      });

      const updatedQuizSet = { ...quizSet, answers: updatedAnswers };
      updateQuizSetInLocalStorage(updatedQuizSet);
    },

    submitQuiz: () => {
      const { quizSet } = get();
      const totalQuestions = quizSet.questions.length;
      const correctAnswers = quizSet.answers.reduce((total, answer) => {
        const allCorrect = answer.userAnswers.every(
          (userAnswer) => userAnswer.isSelected === userAnswer.option.isCorrect
        );
        return allCorrect ? total + 1 : total;
      }, 0);

      return { correctAnswers, totalQuestions };
    },
  };
});

export default useQuizStore;
