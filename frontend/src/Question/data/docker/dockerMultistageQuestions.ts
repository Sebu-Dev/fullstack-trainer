import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";
import { generateNumericId } from "../../../utils/helpers";

export const dockerMultistageQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Was sind die Hauptvorteile von Multi-Stage Builds in Docker?",
    options: [
      {
        id: generateNumericId(),
        text: "Optimierung der finalen Image-Größe",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Separate Build- und Runtime-Umgebungen",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Einfachere Wartbarkeit des Dockerfiles",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Erhöhte Netzwerkgeschwindigkeit",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["Docker", "Docker Multistage"],
    explanation:
      "Multi-Stage Builds optimieren die Image-Größe und trennen Build-Tools von der Runtime-Umgebung, was die Wartbarkeit erleichtert.",
  },
  {
    id: uuidv4(),
    text: "Welche Vorteile bieten Docker Multi-Stage Builds?",
    options: [
      {
        id: generateNumericId(),
        text: "Reduzierung der finalen Image-Größe",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Trennung von Build- und Runtime-Umgebung",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Automatische Skalierung von Containern",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Verbesserte Netzwerkperformance",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["Docker", "Docker Multistage"],
    explanation: "Multi-Stage entfernt Build-Tools aus dem finalen Image.",
  },
];
