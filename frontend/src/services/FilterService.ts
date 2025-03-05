import { Question } from "../Question/type/QuestionType";
import { categoryConfig } from "../config/categoryConfig"; // Import aus config/
import { sortArray } from "../utils/helpers";

export const FilterService = {
  getMainCategories: (): string[] => {
    return categoryConfig.mainCategories;
  },

  mapToMainCategory: (subCategory: string): string => {
    const lowerSubCategory = subCategory.toLowerCase();
    for (const [mainCat, subCats] of Object.entries(
      categoryConfig.subcategoryMapping
    )) {
      if (subCats.includes(lowerSubCategory)) {
        return mainCat;
      }
    }
    return "Sonstige";
  },

  filterQuestions: (
    questions: Question[],
    categories: string[]
  ): Question[] => {
    if (categories.length === 0) return questions;
    return questions.filter((q) =>
      q.categories.some((cat) =>
        categories.includes(FilterService.mapToMainCategory(cat))
      )
    );
  },

  getAllCategories: (questions: Question[]): string[] => {
    const categories = new Set<string>();
    questions.forEach((q) =>
      q.categories.forEach((cat) => categories.add(cat))
    );
    return sortArray(Array.from(categories));
  },

  getProcessedQuestionsAndCategories: (questions: Question[]) => {
    const mainCategories = FilterService.getMainCategories();
    const processedQuestions = questions.map((question) => {
      const hasMainCategory = question.categories.some((cat) =>
        mainCategories.includes(FilterService.mapToMainCategory(cat))
      );
      if (!hasMainCategory) {
        return {
          ...question,
          categories: [...question.categories, "Sonstige"],
        };
      }
      return question;
    });
    const allCategories = [...mainCategories];
    return { processedQuestions, allCategories };
  },
};
