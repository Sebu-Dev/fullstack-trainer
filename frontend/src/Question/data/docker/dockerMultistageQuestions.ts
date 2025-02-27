import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

export const dockerMultistageQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Was sind die Hauptvorteile von Multi-Stage Builds in Docker?",
    options: [
      { text: "Optimierung der finalen Image-Größe", correct: true },
      { text: "Separate Build- und Runtime-Umgebungen", correct: true },
      { text: "Einfachere Wartbarkeit des Dockerfiles", correct: true },
      { text: "Erhöhte Netzwerkgeschwindigkeit", correct: false },
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
      { text: "Reduzierung der finalen Image-Größe", correct: true },
      { text: "Trennung von Build- und Runtime-Umgebung", correct: true },
      { text: "Automatische Skalierung von Containern", correct: false },
      { text: "Verbesserte Netzwerkperformance", correct: false },
    ],
    difficulty: "hard",
    categories: ["Docker", "Docker Multistage"],
    explanation: "Multi-Stage entfernt Build-Tools aus dem finalen Image.",
  },
];
