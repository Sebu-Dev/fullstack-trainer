export interface Option {
  text: string;
  correct: boolean;
}

export interface UserAnswer {
  option: Option;
  isSelected: boolean;
}

export interface Answer {
  question: Question;
  userAnswers: UserAnswer[];
  achievedPoints: number;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  difficulty?: "easy" | "medium" | "hard";
  categories: string[];
  explanation?: string;
  imageUrl?: string;
  maxPoints?: number;
}

export interface QuizSet {
  questions: Question[];
  answers: Answer[];
  totalPossiblePoints: number;
  totalAchievedPoints: number;
}
