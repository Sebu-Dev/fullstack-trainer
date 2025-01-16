export type AnswerOption = {
  text: string;
  isCorrect: boolean;
};

export type Question = {
  id: string;
  questionText: string;
  answerOptions: AnswerOption[];
  difficultyLevel?: "easy" | "medium" | "hard";
  category: string[];
  explanation?: string;
  imageUrl?: string;
};
