import { create } from "zustand";
import questionsData from "../Questions";
import { AnswerOption, Question } from "../type/QuestionType";

interface QuizStore {
  questionList: Question[];
  userAnswers: Record<string, AnswerOption[]>;
  setQuestions: (newQuestions: Question[]) => void;
  setUserAnswer: (questionId: string, answers: AnswerOption[]) => void;
  toggleAnswer: (questionId: string, answer: AnswerOption) => void;
}

const useQuizStore = create<QuizStore>()((set) => ({
  questionList: questionsData,
  userAnswers: {},

  setQuestions: (newQuestions) => set(() => ({ questionList: newQuestions })),

  setUserAnswer: (questionId: string, answers: AnswerOption[]) =>
    set((state) => ({
      userAnswers: { ...state.userAnswers, [questionId]: answers },
    })),

  toggleAnswer: (questionId: string, answer: AnswerOption) =>
    set((state) => {
      const currentAnswers = state.userAnswers[questionId] || [];
      if (currentAnswers.includes(answer)) {
        return {
          userAnswers: {
            ...state.userAnswers,
            [questionId]: currentAnswers.filter((a) => a !== answer),
          },
        };
      } else {
        return {
          userAnswers: {
            ...state.userAnswers,
            [questionId]: [...currentAnswers, answer],
          },
        };
      }
    }),
}));

export default useQuizStore;
