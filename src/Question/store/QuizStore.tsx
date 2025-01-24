import { create } from "zustand";
import { ScoringService } from "../../services/ScoringService";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  shuffleArray,
} from "../../utils/helpers";
import questionsData from "../data/questionData";
import type { Question, Quizset } from "../type/QuestionType";

interface QuizStore {
  filterQuestionsByCategories: () => void;
  questionList: Question[];
  quizSet: Quizset;
  selectedCategories: string[];
  createQuizset: () => void;
  setSelectedCategories: (categories: string[]) => void;
  toggleUserAnswer: (questionId: string, optionId: string) => void;
  submitQuiz: () => { correctAnswers: number; totalQuestions: number };
  getQuestionPoints: (questionId: string) => number;
  getTotalPoints: () => number;
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
      totalPossiblePoints: 0, // Initialwert hinzufügen
      totalAchievedPoints: 0, // Initialwert hinzufügen
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
      const totalPossiblePoints = selectedQuestions.length * 4;

      const quizset: Quizset = {
        questions: selectedQuestions,
        answers: selectedQuestions.map((question) => ({
          question,
          userAnswers: question.options.map((option) => ({
            option,
            isSelected: false,
          })),
          achievedPoints: 0,
        })),
        totalPossiblePoints,
        totalAchievedPoints: 0,
      };

      updateQuizSetInLocalStorage(quizset);
    },

    toggleUserAnswer: (questionId: string, optionText: string) => {
      const { quizSet } = get();

      const updatedAnswers = quizSet.answers.map((answer) => {
        if (answer.question.id === questionId) {
          // Aktualisiere die userAnswers
          const updatedUserAnswers = answer.userAnswers.map((userAnswer) =>
            userAnswer.option.text === optionText
              ? { ...userAnswer, isSelected: !userAnswer.isSelected }
              : userAnswer
          );

          // Berechne die achievedPoints basierend auf den aktualisierten userAnswers
          const achievedPoints = ScoringService.calculateQuestionPoints({
            ...answer,
            userAnswers: updatedUserAnswers,
          });

          return {
            ...answer,
            userAnswers: updatedUserAnswers,
            achievedPoints, // Speichere die neuen achievedPoints
          };
        }
        return answer;
      });

      // Berechne die totalAchievedPoints
      const totalAchievedPoints =
        ScoringService.calculateTotalPoints(updatedAnswers);

      // Aktualisiere den quizSet
      const updatedQuizSet = {
        ...quizSet,
        answers: updatedAnswers,
        totalAchievedPoints,
      };

      updateQuizSetInLocalStorage(updatedQuizSet);
    },

    getQuestionPoints: (questionId: string) => {
      const answer = get().quizSet.answers.find(
        (a) => a.question.id === questionId
      );
      return answer?.achievedPoints || 0;
    },

    getTotalPoints: () => get().quizSet.totalAchievedPoints,

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

    filterQuestionsByCategories: () => {
      const { selectedCategories, questionList } = get();
      const filteredQuestions = selectedCategories.length
        ? questionList.filter((question) =>
            selectedCategories.every((category) =>
              question.category.includes(category)
            )
          )
        : questionList;

      set({ quizSet: { ...get().quizSet, questions: filteredQuestions } });
    },
  };
});

export default useQuizStore;
