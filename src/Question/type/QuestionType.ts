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
  achievedPoints: number;
};

export type Question = {
  id: string;
  text: string;
  options: Option[];
  difficulty?: "easy" | "medium" | "hard";
  category: string[];
  explanation?: string;
  imageUrl?: string;
  maxPoints?: number;
};

export type Quizset = {
  questions: Question[];
  answers: Answer[];
  totalPossiblePoints: number;
  totalAchievedPoints: number;
};
