import type { Question } from "../Question/type/QuestionType";
import { sortArray } from "../utils/helpers";

export const FilterService = {
  filterQuestions: (
    questions: Question[],
    categories: string[],
  ): Question[] => {
    if (categories.length === 0) return questions;
    const filteredQuestions = questions.filter((q) =>
      q.categories.some((cat) => categories.includes(cat)),
    );
    return filteredQuestions;
  },

  getAllCategories: (questions: Question[]): string[] => {
    const categories = new Set<string>();
    questions.forEach((q) => q.categories.forEach((cat) => categories.add(cat)));
    const sortedArray = sortArray(Array.from(categories));
    return sortedArray;
  },
};
