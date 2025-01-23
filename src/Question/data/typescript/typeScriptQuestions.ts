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
    category: ["TypeScript", "Types"],
    explanation:
      "TypeScript unterstützt sowohl primitive als auch komplexe Typen. Generics und Conditional Types bieten Flexibilität für die Typisierung.",
  },
];

export default typeScriptQuestions;
