import type { Answer, Question, QuizSet } from "../Question/type/QuestionType";
import { shuffleArray } from "../utils/helpers";
import { filterQuestions } from "../utils/quizUtils";
import { ScoringService } from "./ScoringService";

export const QuizService = {
  /**
   * Erstellt ein neues Quiz-Set basierend auf den übergebenen Fragen, Kategorien und Anzahl der Fragen.
   */
  generateQuizSet(
    questions: Question[],
    categories: string[],
    questionCount: number
  ): QuizSet {
    const filteredQuestions = filterQuestions(questions, categories);
    const selectedQuestions = getRandomQuestions(
      filteredQuestions,
      questionCount
    );

    return {
      questions: formatQuestions(selectedQuestions),
      answers: createInitialAnswers(selectedQuestions),
      totalPossiblePoints: selectedQuestions.length * 4, // 4 Punkte pro Frage
      totalAchievedPoints: 0,
    };
  },

  /**
   * Aktualisiert die Antwort des Benutzers für eine bestimmte Frage und berechnet die Punktzahl neu.
   */
  updateAnswer(
    quizSet: QuizSet,
    questionId: string,
    optionText: string
  ): QuizSet {
    const updatedAnswers = quizSet.answers.map((answer) =>
      answer.question.id === questionId
        ? updateUserAnswer(answer, optionText)
        : answer
    );

    return {
      ...quizSet,
      answers: updatedAnswers,
      totalAchievedPoints: ScoringService.calculateTotalPoints(updatedAnswers),
    };
  },
};

/** Hilfsfunktionen für bessere Strukturierung **/

/**
 * Mischt eine Liste von Fragen und gibt die gewünschte Anzahl zurück.
 */
function getRandomQuestions(questions: Question[], count: number): Question[] {
  return shuffleArray(questions).slice(0, count);
}

/**
 * Mischt die Antwortmöglichkeiten jeder Frage.
 */
function formatQuestions(questions: Question[]): Question[] {
  return questions.map((question) => ({
    ...question,
    options: shuffleArray(question.options),
  }));
}

/**
 * Erstellt die initialen Benutzerantworten mit gesetztem `isSelected: false` und `achievedPoints: 0`.
 */
function createInitialAnswers(questions: Question[]): Answer[] {
  return questions.map((question) => ({
    question,
    userAnswers: question.options.map((option) => ({
      option,
      isSelected: false,
    })),
    achievedPoints: 0,
  }));
}

/**
 * Aktualisiert die Benutzerantwort und berechnet die neue Punktzahl.
 */
function updateUserAnswer(answer: Answer, optionText: string): Answer {
  const updatedUserAnswers = answer.userAnswers.map((ua) =>
    ua.option.text === optionText ? { ...ua, isSelected: !ua.isSelected } : ua
  );

  return {
    ...answer,
    userAnswers: updatedUserAnswers,
    achievedPoints: ScoringService.calculateQuestionPoints({
      ...answer,
      userAnswers: updatedUserAnswers,
    }),
  };
}
