// src/services/LocalStorageService.ts
import type { QuizSet } from "../Question/type/QuestionType";

const QUIZ_SET_KEY = "quizSet";
const DEFAULT_QUIZ_SET: QuizSet = {
  questions: [],
  answers: [],
  totalPossiblePoints: 0,
  totalAchievedPoints: 0,
};

export const LocalStorageService = {
  getQuizSet: (): QuizSet => {
    const stored = localStorage.getItem(QUIZ_SET_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_QUIZ_SET;
  },

  saveQuizSet: (quizSet: QuizSet): QuizSet => {
    localStorage.setItem(QUIZ_SET_KEY, JSON.stringify(quizSet));
    return quizSet;
  },

  // Generische Methoden für andere Zustände
  getItem: <T>(key: string, defaultValue: T): T => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  },

  saveItem: <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
