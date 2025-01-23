import questionData from "../Question/data/questionData";
import type {
  Answer,
  Option,
  Question,
  UserAnswer,
} from "../Question/type/QuestionType";

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    console.error(`Error reading key "${key}" from localStorage:`, error);
    return defaultValue;
  }
};
export const saveToLocalStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing key "${key}" to localStorage:`, error);
  }
};
export const filterQuestions = (
  questions: Question[],
  categories: string[]
): Question[] => {
  if (categories.length === 0) return questions;
  return questions.filter((q) =>
    categories.every((category) => q.category.includes(category))
  );
};
export const setDefaultAnswers = (): Answer[] => {
  const questionList = questionData;
  const defaultAnswers: Answer[] = [];

  questionList.forEach((quest: Question) => {
    const userAnswers: UserAnswer[] = quest.options.map((option: Option) => ({
      option,
      isSelected: false,
    }));

    defaultAnswers.push({
      question: quest,
      userAnswers,
    });
  });

  return defaultAnswers;
};
export const calculatePoints = (
  answers: Answer[]
): { totalPoints: number; categoryPoints: Record<string, number> } => {
  let totalPoints = 0;
  const categoryPoints: Record<string, number> = {
    easy: 0,
    medium: 0,
    hard: 0,
  };

  answers.forEach((answer) => {
    const correctOptions = answer.question.options.filter(
      (opt) => opt.isCorrect
    );
    const userSelectedOptions = answer.userAnswers;
    const isCorrect = true;
    /*  correctOptions.every((opt) => userSelectedOptions.includes(opt)) &&
      userSelectedOptions.every((opt) => opt.isCorrect); */

    if (isCorrect) {
      totalPoints += 1;
      if (answer.question.difficulty) {
        categoryPoints[answer.question.difficulty]++;
      }
    }
  });

  return { totalPoints, categoryPoints };
};
export const toggleAnswerInList = (
  currentAnswers: Option[],
  answer: Option
): Option[] => {
  return currentAnswers.includes(answer)
    ? currentAnswers.filter((a) => a !== answer)
    : [...currentAnswers, answer];
};
