import type { Answer, QuizSet } from "../Question/type/QuestionType";

export class ScoringService {
  /** Berechnet die Punkte für eine einzelne Frage */
  static calculateQuestionPoints(answer: Answer): number {
    const correctOptions = answer.question.options.filter(
      (opt) => opt.correct,
    ).length;

    if (correctOptions === 1) {
      const allCorrect = answer.userAnswers.every(
        (userAnswer) => userAnswer.isSelected === userAnswer.option.correct,
      );
      return allCorrect ? 4 : 0;
    }

    const correctSelections = answer.userAnswers.filter(
      (userAnswer) => userAnswer.isSelected === userAnswer.option.correct,
    ).length;

    let incorrectSelections = answer.userAnswers.filter(
      (userAnswer) => userAnswer.isSelected !== userAnswer.option.correct,
    ).length;

    incorrectSelections = Math.min(incorrectSelections, 4); // Maximal -4 Punkte Abzug

    return Math.max(0, correctSelections - incorrectSelections);
  }

  /** Berechnet die Gesamtpunktzahl */
  static calculateTotalPoints(answers: Answer[]): number {
    return answers.reduce((total, answer) => total + answer.achievedPoints, 0);
  }

  /** Berechnet die Punkte pro Schwierigkeitsgrad */
  static calculateCategoryPoints(answers: Answer[]): Record<string, number> {
    return answers.reduce(
      (pointsByDifficulty, answer) => {
        const difficulty = answer.question.difficulty || "medium";
        pointsByDifficulty[difficulty] =
          (pointsByDifficulty[difficulty] || 0) + answer.achievedPoints;
        return pointsByDifficulty;
      },
      { easy: 0, medium: 0, hard: 0 },
    );
  }

  /** Zählt die vollständig korrekt beantworteten Fragen */
  static countCorrectAnswers(quizSet: QuizSet): number {
    return quizSet.answers.filter((answer) =>
      answer.userAnswers.every(
        (userAnswer) => userAnswer.isSelected === userAnswer.option.correct,
      ),
    ).length;
  }

  /** Berechnet die Gesamtpunktzahl anhand aller Antworten neu */
  static recalculateTotalPoints(answers: Answer[]): number {
    return answers.reduce(
      (total, answer) => total + this.calculateQuestionPoints(answer),
      0,
    );
  }
}
