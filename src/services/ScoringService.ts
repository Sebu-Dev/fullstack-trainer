import type { Answer, QuizSet } from "../Question/type/QuestionType";

export class ScoringService {
  static calculateQuestionPoints(answer: Answer): number {
    const correctOptions = answer.question.options.filter(
      (option) => option.isCorrect === true
    ).length;

    if (correctOptions === 1) {
      const allCorrect = answer.userAnswers.every(
        (answer) => answer.isSelected === answer.option.isCorrect
      );
      return allCorrect ? 4 : 0;
    }

    const correct = answer.userAnswers.filter(
      (answer) => answer.isSelected === answer.option.isCorrect
    ).length;
    let inCorrect = answer.userAnswers.filter(
      (answer) => !answer.isSelected === answer.option.isCorrect
    ).length;

    if (inCorrect > 1) {
      inCorrect = 4;
    }
    const result = correct - inCorrect;

    return Math.max(0, result, 0);
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
