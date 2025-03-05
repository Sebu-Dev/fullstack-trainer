import type { QuizSet } from "../Question/type/QuestionType";

const QUIZ_SET_KEY = "quizSet";
const PROGRESS_QUIZ_SET_KEY = "progressQuizSet";
const ANSWERED_QUESTION_IDS_KEY = "answeredQuestionIds";
const DEFAULT_QUIZ_SET: QuizSet = {
  questions: [],
  answers: [],
  totalPossiblePoints: 0,
  totalAchievedPoints: 0,
};

export const LocalStorageService = {
  // Für Prüfungsmodus
  getQuizSet: (): QuizSet => {
    const stored = localStorage.getItem(QUIZ_SET_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_QUIZ_SET;
  },

  saveQuizSet: (quizSet: QuizSet): QuizSet => {
    localStorage.setItem(QUIZ_SET_KEY, JSON.stringify(quizSet));
    return quizSet;
  },

  // Für Progress-Modus
  getProgressQuizSet: (): QuizSet => {
    const stored = localStorage.getItem(PROGRESS_QUIZ_SET_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_QUIZ_SET;
  },

  saveProgressQuizSet: (quizSet: QuizSet): QuizSet => {
    localStorage.setItem(PROGRESS_QUIZ_SET_KEY, JSON.stringify(quizSet));
    return quizSet;
  },

  // Für beantwortete Fragen-IDs
  getAnsweredQuestionIds: (): string[] => {
    const stored = localStorage.getItem(ANSWERED_QUESTION_IDS_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  saveAnsweredQuestionIds: (ids: string[]): string[] => {
    localStorage.setItem(ANSWERED_QUESTION_IDS_KEY, JSON.stringify(ids));
    return ids;
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
