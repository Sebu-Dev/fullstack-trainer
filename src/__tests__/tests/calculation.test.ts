import type { Answer } from "../../Question/type/QuestionType";
import { ScoringService } from "../../services/ScoringService";

describe("ScoringService Tests", () => {
  describe("calculateQuestionPoints", () => {
    it("should calculate points correctly for a question with all correct answers", () => {
      const answer: Answer = {
        question: {
          id: "1",
          text: "Which of the following are prime numbers?",
          options: [
            { text: "2", isCorrect: true },
            { text: "3", isCorrect: true },
            { text: "4", isCorrect: false },
            { text: "5", isCorrect: true },
          ],
          difficulty: "easy",
          category: ["math"],
        },
        userAnswers: [
          { option: { text: "2", isCorrect: true }, isSelected: true },
          { option: { text: "3", isCorrect: true }, isSelected: true },
          { option: { text: "4", isCorrect: false }, isSelected: true },
          { option: { text: "5", isCorrect: true }, isSelected: true },
        ],
        achievedPoints: 0,
      };

      const result = ScoringService.calculateQuestionPoints(answer);
      expect(result).toBe(2);
    });

    it("should calculate points correctly for partially correct answers", () => {
      const answer: Answer = {
        question: {
          id: "2",
          text: "Which of the following are even numbers?",
          options: [
            { text: "1", isCorrect: false },
            { text: "2", isCorrect: true },
            { text: "3", isCorrect: false },
            { text: "4", isCorrect: true },
          ],
          difficulty: "easy",
          category: ["math"],
        },
        userAnswers: [
          { option: { text: "1", isCorrect: false }, isSelected: false },
          { option: { text: "2", isCorrect: true }, isSelected: false },
          { option: { text: "3", isCorrect: false }, isSelected: true },
          { option: { text: "4", isCorrect: true }, isSelected: true },
        ],
        achievedPoints: 0,
      };

      const result = ScoringService.calculateQuestionPoints(answer);
      expect(result).toBe(0);
    });
  });

  describe("calculateTotalPoints", () => {
    it("should calculate total points across multiple answers", () => {
      const answers: Answer[] = [
        {
          question: {
            id: "1",
            text: "Which of the following are prime numbers?",
            options: [
              { text: "2", isCorrect: true },
              { text: "3", isCorrect: true },
              { text: "4", isCorrect: false },
              { text: "5", isCorrect: true },
            ],
            difficulty: "easy",
            category: ["math"],
          },
          userAnswers: [
            { option: { text: "2", isCorrect: true }, isSelected: true },
            { option: { text: "3", isCorrect: true }, isSelected: true },
            { option: { text: "4", isCorrect: false }, isSelected: false },
            { option: { text: "5", isCorrect: true }, isSelected: true },
          ],
          achievedPoints: 0,
        },
        {
          question: {
            id: "2",
            text: "Which of the following are even numbers?",
            options: [
              { text: "1", isCorrect: false },
              { text: "2", isCorrect: true },
              { text: "3", isCorrect: false },
              { text: "4", isCorrect: true },
            ],
            difficulty: "easy",
            category: ["math"],
          },
          userAnswers: [
            { option: { text: "1", isCorrect: false }, isSelected: true },
            { option: { text: "2", isCorrect: true }, isSelected: false },
            { option: { text: "3", isCorrect: false }, isSelected: true },
            { option: { text: "4", isCorrect: true }, isSelected: true },
          ],
          achievedPoints: 0,
        },
      ];
      const result = ScoringService.recalculateTotalPoints(answers);

      expect(result).toBe(4);
    });
  });

  describe("calculateCategoryPoints", () => {
    it("should calculate points grouped by difficulty", () => {
      const answers: Answer[] = [
        {
          question: {
            id: "1",
            text: "Prime numbers?",
            options: [],
            difficulty: "easy",
            category: ["math"],
          },
          userAnswers: [],
          achievedPoints: 3,
        },
        {
          question: {
            id: "2",
            text: "Even numbers?",
            options: [],
            difficulty: "medium",
            category: ["math"],
          },
          userAnswers: [],
          achievedPoints: 2,
        },
        {
          question: {
            id: "3",
            text: "Rainbow colors?",
            options: [],
            difficulty: "hard",
            category: ["science"],
          },
          userAnswers: [],
          achievedPoints: 4,
        },
      ];

      const result = ScoringService.calculateCategoryPoints(answers);
      expect(result).toEqual({
        easy: 3,
        medium: 2,
        hard: 4,
      });
    });
  });
});
