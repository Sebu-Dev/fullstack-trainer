import type { QuizSet } from "../Question/type/QuestionType";

const QUIZ_SET_KEY = "quizSet";

const defaultQuizSet: QuizSet = {
  questions: [],
  answers: [],
  totalPossiblePoints: 0,
  totalAchievedPoints: 0,
};

export const LocalStorageService = {
  getQuizSet: (): QuizSet => {
    const stored = localStorage.getItem(QUIZ_SET_KEY);
    return stored ? JSON.parse(stored) : defaultQuizSet;
  },

  saveQuizSet: (quizSet: QuizSet): QuizSet => {
    localStorage.setItem(QUIZ_SET_KEY, JSON.stringify(quizSet));
    return quizSet;
  },
};
