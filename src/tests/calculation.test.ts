import type { Answer } from "../Question/type/QuestionType";
import { calculatePoints } from "../utils/helpers";

describe("calculatePoints with multiple correct and incorrect options", () => {
  it("should calculate points correctly for easy questions with multiple answers", () => {
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
      },
    ];

    const result = calculatePoints(answers);
    expect(result.totalPoints).toBe(1); // The first question is correct, the second has incorrect selections
    expect(result.categoryPoints.easy).toBe(1);
  });

  it("should calculate points correctly for medium questions with multiple answers", () => {
    const answers: Answer[] = [
      {
        question: {
          id: "3",
          text: "Which of the following are colors of the rainbow?",
          options: [
            { text: "Red", isCorrect: true },
            { text: "Blue", isCorrect: true },
            { text: "Green", isCorrect: true },
            { text: "Pink", isCorrect: false },
          ],
          difficulty: "medium",
          category: ["science"],
        },
        userAnswers: [
          { option: { text: "Red", isCorrect: true }, isSelected: true },
          { option: { text: "Blue", isCorrect: true }, isSelected: true },
          { option: { text: "Green", isCorrect: true }, isSelected: true },
          { option: { text: "Pink", isCorrect: false }, isSelected: false },
        ],
      },
      {
        question: {
          id: "4",
          text: "Which of the following are mammals?",
          options: [
            { text: "Lion", isCorrect: true },
            { text: "Shark", isCorrect: false },
            { text: "Elephant", isCorrect: true },
            { text: "Crocodile", isCorrect: false },
          ],
          difficulty: "medium",
          category: ["biology"],
        },
        userAnswers: [
          { option: { text: "Lion", isCorrect: true }, isSelected: true },
          { option: { text: "Shark", isCorrect: false }, isSelected: true },
          { option: { text: "Elephant", isCorrect: true }, isSelected: true },
          { option: { text: "Crocodile", isCorrect: false }, isSelected: true },
        ],
      },
      {
        question: {
          id: "4",
          text: "Which of the following are mammals?",
          options: [
            { text: "Lion", isCorrect: true },
            { text: "Shark", isCorrect: false },
            { text: "Elephant", isCorrect: true },
            { text: "Crocodile", isCorrect: true },
          ],
          difficulty: "medium",
          category: ["biology"],
        },
        userAnswers: [
          { option: { text: "Lion", isCorrect: true }, isSelected: true },
          { option: { text: "Shark", isCorrect: false }, isSelected: true },
          { option: { text: "Elephant", isCorrect: true }, isSelected: true },
          { option: { text: "Crocodile", isCorrect: true }, isSelected: true },
        ],
      },
    ];

    const result = calculatePoints(answers);
    expect(result.totalPoints).toBe(1.5); // The first question is fully correct (1 point), the second has 1 error (0.5 points)
    expect(result.categoryPoints.medium).toBe(1.5);
  });

  it("should calculate points correctly for hard questions with multiple answers", () => {
    const answers: Answer[] = [
      {
        question: {
          id: "5",
          text: "Which of the following are even numbers?",
          options: [
            { text: "2", isCorrect: true },
            { text: "4", isCorrect: true },
            { text: "6", isCorrect: true },
            { text: "8", isCorrect: true },
          ],
          difficulty: "hard",
          category: ["math"],
        },
        userAnswers: [
          { option: { text: "2", isCorrect: true }, isSelected: true },
          { option: { text: "4", isCorrect: true }, isSelected: true },
          { option: { text: "6", isCorrect: true }, isSelected: true },
          { option: { text: "8", isCorrect: true }, isSelected: true },
        ],
      },
      {
        question: {
          id: "6",
          text: "Which of the following are planets?",
          options: [
            { text: "Earth", isCorrect: true },
            { text: "Pluto", isCorrect: false },
            { text: "Mars", isCorrect: true },
            { text: "Sun", isCorrect: false },
          ],
          difficulty: "hard",
          category: ["science"],
        },
        userAnswers: [
          { option: { text: "Earth", isCorrect: true }, isSelected: true },
          { option: { text: "Pluto", isCorrect: false }, isSelected: true },
          { option: { text: "Mars", isCorrect: true }, isSelected: true },
          { option: { text: "Sun", isCorrect: false }, isSelected: true },
        ],
      },
      {
        question: {
          id: "8",
          text: "Which of the following are planets?",
          options: [
            { text: "Earth", isCorrect: true },
            { text: "Pluto", isCorrect: false },
            { text: "Mars", isCorrect: true },
            { text: "Sun", isCorrect: false },
          ],
          difficulty: "hard",
          category: ["science"],
        },
        userAnswers: [
          { option: { text: "Earth", isCorrect: true }, isSelected: true },
          { option: { text: "Pluto", isCorrect: false }, isSelected: false },
          { option: { text: "Mars", isCorrect: true }, isSelected: true },
          { option: { text: "Sun", isCorrect: false }, isSelected: true },
        ],
      },
      {
        question: {
          id: "9",
          text: "Which of the following are planets?",
          options: [
            { text: "Earth", isCorrect: true },
            { text: "Pluto", isCorrect: false },
            { text: "Mars", isCorrect: false },
            { text: "Sun", isCorrect: false },
          ],
          difficulty: "hard",
          category: ["science"],
        },
        userAnswers: [
          { option: { text: "Earth", isCorrect: true }, isSelected: true },
          { option: { text: "Pluto", isCorrect: false }, isSelected: false },
          { option: { text: "Mars", isCorrect: false }, isSelected: false },
          { option: { text: "Sun", isCorrect: false }, isSelected: true },
        ],
      },
    ];

    const result = calculatePoints(answers);
    expect(result.totalPoints).toBe(4); // The first question is fully correct (2 points), the second has 1 error (1 point)
    expect(result.categoryPoints.hard).toBe(4);
  });
});
