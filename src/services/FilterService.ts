import type { Question } from "../Question/type/QuestionType";

export const FilterService = {
  filterQuestions: (
    questions: Question[],
    categories: string[]
  ): Question[] => {
    if (categories.length === 0) return questions;
    const filteredQuestions = questions.filter((q) =>
      q.category.some((cat) => categories.includes(cat))
    );
    return filteredQuestions;
  },

  getAllCategories: (questions: Question[]): string[] => {
    const categories = new Set<string>();
    questions.forEach((q) => q.category.forEach((cat) => categories.add(cat)));
    return Array.from(categories);
  },
};
