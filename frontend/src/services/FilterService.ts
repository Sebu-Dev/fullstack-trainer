// FilterService.ts
import { Question } from "../Question/type/QuestionType";
import { sortArray } from "../utils/helpers";

export const FilterService = {
  staticMainCategories: [
    "CSS",
    "Docker",
    "JavaScript",
    "React",
    "Terminal",
    "TypeScript",
    "Datenbanken",
    "Cloud",
    "Azure",
    "Sonstige",
  ],

  // Zuordnung von Unterkategorien zu Hauptkategorien
  mapToMainCategory: (subCategory: string): string => {
    const lowerSubCategory = subCategory.toLowerCase();

    // CSS
    if (lowerSubCategory.includes("css")) return "CSS";

    // Docker
    if (
      lowerSubCategory.includes("docker") ||
      ["terminal", "bash"].includes(lowerSubCategory)
    )
      return "Docker";

    // JavaScript
    if (
      lowerSubCategory.includes("javascript") ||
      lowerSubCategory.includes("js") ||
      ["web apis", "async programming", "node.js"].includes(lowerSubCategory)
    )
      return "JavaScript";

    // React
    if (lowerSubCategory.includes("react")) return "React";

    // Terminal
    if (lowerSubCategory === "terminal") return "Terminal";

    // TypeScript
    if (lowerSubCategory.includes("typescript") || lowerSubCategory === "ts")
      return "TypeScript";

    // Datenbanken
    if (
      lowerSubCategory.includes("datenbanken") ||
      [
        "normalformen",
        "nosql",
        "sql",
        "acid",
        "erm",
        "index",
        "views",
        "temporäre tabellen",
        "trigger",
        "prozeduren",
        "constraints",
        "schema-migrationen",
        "cap-theorem",
        "materialized views",
        "common table expression (cte)",
        "indizes",
        "azure cosmos db",
        "audit-logs",
        "dokumentenbasierte systeme",
        "zugriffsarten",
        "cloud-datenbanken",
      ].includes(lowerSubCategory)
    )
      return "Datenbanken";

    // Cloud
    if (
      lowerSubCategory.includes("cloud") &&
      !lowerSubCategory.includes("azure")
    )
      return "Cloud";

    // Azure
    if (
      lowerSubCategory.includes("azure") ||
      [
        "leistungsoptimierung",
        "vergleich",
        "cloud stateful/stateless",
        "stateful/stateless",
      ].includes(lowerSubCategory)
    )
      return "Azure";

    // Alles andere
    return "Sonstige";
  },

  // Bestehende Methoden
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

  getMainCategories: (): string[] => {
    return FilterService.staticMainCategories;
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
