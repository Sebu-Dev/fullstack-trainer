export interface Option {
  text: string;
  isCorrect: boolean;
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
  category: string[];
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
