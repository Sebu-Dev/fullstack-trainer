import type { Question, QuizSet } from "../Question/type/QuestionType";

/**
 * Filtert Fragen basierend auf den ausgewählten Kategorien.
 */
export const filterQuestions = (
  questions: Question[],
  categories: string[],
): Question[] => {
  if (categories.length === 0) return questions;

  return questions.filter((question) =>
    categories.some((category) => question.categories.includes(category)),
  );
};
/**
 * Mischt ein Array von Fragen und gibt eine begrenzte Anzahl zurück.
 */
export const shuffleQuestions = (
  questions: Question[],
  count: number,
): Question[] => {
  const uniqueQuestions = Array.from(new Set(questions));
  const shuffled = uniqueQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

/**
 * Berechnet Statistiken für ein Quizset.
 */
export const calculateQuizStats = (quizSet: QuizSet) => {
  const totalPossiblePoints = quizSet.questions.length * 4; // Beispiel: jede Frage = 4 Punkte
  const totalAchievedPoints = quizSet.answers.reduce(
    (sum, answer) => sum + answer.achievedPoints,
    0,
  );

  return { totalPossiblePoints, totalAchievedPoints };
};
