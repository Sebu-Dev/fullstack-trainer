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
export const calculatePoints = (answers: Answer[]) => {
  let totalPoints = 0;
  const categoryPoints = { easy: 0, medium: 0, hard: 0 };

  answers.forEach((answer) => {
    const difficulty = answer.question.difficulty || "medium";
    const totalCorrect = answer.question.options.filter(
      (o) => o.isCorrect
    ).length;
    const userCorrect = answer.userAnswers.filter(
      (ua) => ua.isSelected && ua.option.isCorrect
    ).length;
    const userIncorrect = answer.userAnswers.filter(
      (ua) => ua.isSelected && !ua.option.isCorrect
    ).length;

    const missingCorrect = totalCorrect - userCorrect;
    const errors = missingCorrect + userIncorrect;

    let points = 0;

    switch (difficulty) {
      case "easy":
        points = errors === 0 ? 1 : 0;
        break;

      case "medium":
        if (errors === 0) {
          points = 1;
        } else if (errors === 1) {
          points = 0.5;
        } else if (errors > 1) {
          points = 0;
        }
        break;

      case "hard":
        if (errors === 0) {
          points = 2;
        } else if (errors === 1) {
          points = 1;
        } else if (errors > 1) {
          points = 0;
        }

        break;
    }

    totalPoints += points;
    categoryPoints[difficulty] += points;
  });

  return {
    totalPoints: Number(totalPoints.toFixed(1)),
    categoryPoints: {
      easy: Number(categoryPoints.easy.toFixed(1)),
      medium: Number(categoryPoints.medium.toFixed(1)),
      hard: Number(categoryPoints.hard.toFixed(1)),
    },
  };
};
export const toggleAnswerInList = (
  currentAnswers: Option[],
  answer: Option
): Option[] => {
  return currentAnswers.includes(answer)
    ? currentAnswers.filter((a) => a !== answer)
    : [...currentAnswers, answer];
};
