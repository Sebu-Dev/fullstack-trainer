export type Option = {
  text: string;
  isCorrect: boolean;
};
export type UserAnswer = {
  option: Option;
  isSelected: boolean;
};
export type Answer = {
  question: Question;
  userAnswers: UserAnswer[];
};

export type Question = {
  id: string;
  text: string;
  options: Option[];
  difficulty?: "easy" | "medium" | "hard";
  category: string[];
  explanation?: string;
  imageUrl?: string;
};
