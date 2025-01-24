import type { Answer } from "../Question/type/QuestionType";

export class ScoringService {
  static calculateQuestionPoints(answer: Answer): number {
    const userCorrect = answer.userAnswers.filter(
      (ua) => ua.isSelected && ua.option.isCorrect
    ).length;
    const userIncorrect = answer.userAnswers.filter(
      (ua) => ua.isSelected && !ua.option.isCorrect
    ).length;

    if (userCorrect === 4 && userIncorrect === 0) {
      return 4;
    } else if (userCorrect === 3 && userIncorrect === 1) {
      return 2;
    } else if (userCorrect === 2 && userIncorrect === 2) {
      return 0;
    } else {
      return 0;
    }
  }

  static calculateTotalPoints(answers: Answer[]): number {
    return answers.reduce(
      (sum, answer) => sum + this.calculateQuestionPoints(answer),
      0
    );
  }

  static calculateCategoryPoints(answers: Answer[]) {
    return answers.reduce(
      (acc, answer) => {
        const difficulty = answer.question.difficulty || "medium";
        const points = this.calculateQuestionPoints(answer);
        acc[difficulty] = (acc[difficulty] || 0) + points;
        return acc;
      },
      { easy: 0, medium: 0, hard: 0 }
    );
  }
}
