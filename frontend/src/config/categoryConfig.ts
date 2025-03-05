export type MainCategory = string;
export type SubcategoryMapping = Record<MainCategory, string[]>;

export interface CategoryConfig {
  mainCategories: MainCategory[];
  subcategoryMapping: SubcategoryMapping;
}

export const categoryConfig: CategoryConfig = {
  mainCategories: [
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
  subcategoryMapping: {
    CSS: ["css"],
    Docker: ["docker", "terminal", "bash"],
    JavaScript: [
      "javascript",
      "js",
      "web apis",
      "async programming",
      "node.js",
    ],
    React: ["react"],
    Terminal: ["terminal"],
    TypeScript: ["typescript", "ts"],
    Datenbanken: [
      "datenbanken",
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
    ],
    Cloud: ["cloud"],
    Azure: [
      "azure",
      "leistungsoptimierung",
      "vergleich",
      "cloud stateful/stateless",
      "stateful/stateless",
    ],
    Sonstige: [],
  },
};
