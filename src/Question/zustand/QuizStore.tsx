import { create } from "zustand";
import { shuffleArray } from "../../utils/helpers";
import questionsData from "../Questions";
import { AnswerOption, Question } from "../type/QuestionType";

interface QuizStore {
  questionList: Question[];
  userAnswers: Record<string, AnswerOption[]>;
  setQuestions: (newQuestions: Question[]) => void;
  setUserAnswer: (questionId: string, answers: AnswerOption[]) => void;
  toggleAnswer: (questionId: string, answer: AnswerOption) => void;
  quizSet: Question[];
  createQuiz: (newQuiz: Question[]) => void;
  setQuizSet: (newQuizSet: Question[]) => void;
}

const useQuizStore = create<QuizStore>((set) => ({
  questionList: questionsData,
  userAnswers: {},
  quizSet: questionsData,

  // Setzen der Fragen
  setQuestions: (newQuestions) => set({ questionList: newQuestions }),

  // Setzen des Quiz-Sets
  setQuizSet: (newQuizSet) => set({ quizSet: newQuizSet }),

  // Erstellen eines neuen Quiz
  createQuiz: (newQuiz) =>
    set({
      quizSet: newQuiz.map((quiz) => ({
        ...quiz,
        answerOptions: shuffleArray(quiz.answerOptions),
      })),
    }),

  // Setzen der User-Antworten
  setUserAnswer: (questionId: string, answers: AnswerOption[]) =>
    set((state) => ({
      userAnswers: {
        ...state.userAnswers,
        [questionId]: answers,
      },
    })),

  // Toggle für eine Antwortoption
  toggleAnswer: (questionId: string, answer: AnswerOption) =>
    set((state) => ({
      userAnswers: {
        ...state.userAnswers,
        [questionId]: toggleAnswerInList(
          state.userAnswers[questionId] || [],
          answer
        ),
      },
    })),
}));

// Hilfsfunktion zum Hinzufügen oder Entfernen von Antworten
const toggleAnswerInList = (
  currentAnswers: AnswerOption[],
  answer: AnswerOption
): AnswerOption[] => {
  return currentAnswers.includes(answer)
    ? currentAnswers.filter((a) => a !== answer)
    : [...currentAnswers, answer];
};

export default useQuizStore;
