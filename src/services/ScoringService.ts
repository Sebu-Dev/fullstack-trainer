import type { Answer, QuizSet } from "../Question/type/QuestionType";

export class ScoringService {
  static calculateQuestionPoints(answer: Answer): number {
    return Math.max(
      0,
      answer.userAnswers.reduce((totalPoints, userAnswer) => {
        const isCorrectSelection =
          userAnswer.isSelected === userAnswer.option.isCorrect;
        return isCorrectSelection
          ? totalPoints + (userAnswer.option.isCorrect ? 1 : -1)
          : totalPoints;
      }, 0)
    );
  }

  static calculateTotalPoints(answers: Answer[]): number {
    return Math.max(
      0,
      answers.reduce(
        (totalPoints, answer) => totalPoints + answer.achievedPoints,
        0
      )
    );
  }

  static calculateCategoryPoints(answers: Answer[]): Record<string, number> {
    return answers.reduce(
      (difficultyPoints, answer) => {
        const difficultyLevel = answer.question.difficulty || "medium";
        difficultyPoints[difficultyLevel] += answer.achievedPoints;
        difficultyPoints[difficultyLevel] = Math.max(
          0,
          difficultyPoints[difficultyLevel]
        );
        return difficultyPoints;
      },
      { easy: 0, medium: 0, hard: 0 }
    );
  }

  static calculateCorrectAnswers(quizSet: QuizSet): number {
    return quizSet.answers.reduce((correctAnswerCount, answer) => {
      const isFullyCorrect = answer.userAnswers.every(
        (userAnswer) => userAnswer.isSelected === userAnswer.option.isCorrect
      );
      return isFullyCorrect ? correctAnswerCount + 1 : correctAnswerCount;
    }, 0);
  }

  static recalculateTotalPoints(answers: Answer[]): number {
    return Math.max(
      0,
      answers.reduce(
        (totalPoints, answer) =>
          totalPoints + this.calculateQuestionPoints(answer),
        0
      )
    );
  }
}
