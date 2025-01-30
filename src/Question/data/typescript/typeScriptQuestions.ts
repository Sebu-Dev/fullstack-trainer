import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

const typeScriptQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen über TypeScript-Typen sind korrekt?",
    options: [
      {
        text: "TypeScript hat nur primitive Typen und keine komplexen Typen",
        isCorrect: false,
      },
      {
        text: "Generics ermöglichen die Wiederverwendung von Code für unterschiedliche Typen",
        isCorrect: true,
      },
      {
        text: "Ein Interface kann in TypeScript nicht von mehreren anderen Interfaces erben",
        isCorrect: false,
      },
      {
        text: "Conditional Types ermöglichen die Typenbasierte Logik",
        isCorrect: true,
      },
    ],
    difficulty: "medium",
    category: ["TypeScript"],
    explanation:
      "TypeScript unterstützt sowohl primitive als auch komplexe Typen. Generics und Conditional Types bieten Flexibilität für die Typisierung.",
  },
  {
    id: uuidv4(),
    text: "Wie definiert man eine generische Funktion in TypeScript?",
    options: [
      {
        text: "function func<T>(param: T): T { return param; }",
        isCorrect: true,
      },
      {
        text: "function func(param: T): T { return param; }",
        isCorrect: false,
      },
      {
        text: "function func<T>(param: T) { return param; }",
        isCorrect: false,
      },
      {
        text: "function func<T, R>(param: T): R { return param; }",
        isCorrect: false,
      },
    ],
    difficulty: "hard",
    category: ["TypeScript"],
    explanation:
      "Generische Funktionen verwenden `<T>` zur Definition und können unterschiedliche Typen verarbeiten, z.B. `function func<T>(param: T): T {}`.",
  },
  {
    id: uuidv4(),
    text: "Wie wird eine Typisierung für eine Funktion in TypeScript angegeben?",
    options: [
      { text: "function myFunction(param: string): void { }", isCorrect: true },
      { text: "function myFunction(param: string): any { }", isCorrect: false },
      { text: "function myFunction(param): string { }", isCorrect: false },
      { text: "function myFunction(string): void { }", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["TypeScript"],
    explanation:
      "In TypeScript wird die Typisierung der Parameter und des Rückgabewerts einer Funktion mit `param: type` angegeben.",
  },
];

export default typeScriptQuestions;
