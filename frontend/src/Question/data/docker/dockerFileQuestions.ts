import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";
import { generateNumericId } from "../../../utils/helpers";

export const dockerFileQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Welche Best Practices gelten für das Schreiben von Dockerfiles?",
    options: [
      {
        id: generateNumericId(),
        text: "Verwendung kleiner Basis-Images",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Minimierung der Layer-Anzahl",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Alle Befehle in einer einzigen RUN-Anweisung bündeln",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Verwendung von Multi-Stage Builds",
        correct: true,
      },
    ],
    difficulty: "hard",
    categories: ["Docker", "Dockerfile"],
    explanation:
      "Kleine Basis-Images, wenige Layer und Multi-Stage Builds verbessern Performance und Wartbarkeit. Befehle sollten klar getrennt bleiben, nicht gebündelt.",
  },
  {
    id: uuidv4(),
    text: "Was passiert, wenn ein Dockerfile keine CMD-Anweisung enthält?",
    options: [
      {
        id: generateNumericId(),
        text: "Der Container startet nicht",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Der Container verwendet den Befehl des Basisimages",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Docker gibt einen Fehler beim Build aus",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Es ist erforderlich, einen Entrypoint anzugeben",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["Docker", "Dockerfile"],
    explanation:
      "Fehlt CMD, wird der Standardbefehl des Basisimages verwendet.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Unterschied zwischen ENTRYPOINT und CMD in Docker?",
    options: [
      {
        id: generateNumericId(),
        text: "ENTRYPOINT ist vorrangig gegenüber CMD",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "CMD definiert Standardbefehle",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "ENTRYPOINT kann nicht überschrieben werden",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "CMD wird vor ENTRYPOINT ausgeführt",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["Docker", "Dockerfile"],
    explanation:
      "ENTRYPOINT ist vorrangig, CMD definiert Standardbefehle, die von ENTRYPOINT genutzt werden können.",
  },
  {
    id: uuidv4(),
    text: "Welche Schritte sind beim Erstellen eines Docker-Images erforderlich?",
    options: [
      {
        id: generateNumericId(),
        text: "Ein Dockerfile erstellen",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "docker build ausführen",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Einen Container starten",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "docker push verwenden",
        correct: false,
      },
    ],
    difficulty: "easy",
    categories: ["Docker", "Dockerfile"],
    explanation:
      "Ein Image wird durch ein Dockerfile und den Befehl 'docker build' erstellt.",
  },
  {
    id: uuidv4(),
    text: "Welche Anweisung wird im Dockerfile genutzt, um eine Basis-Image zu definieren?",
    options: [
      { id: generateNumericId(), text: "FROM", correct: true },
      { id: generateNumericId(), text: "RUN", correct: false },
      { id: generateNumericId(), text: "COPY", correct: false },
      { id: generateNumericId(), text: "CMD", correct: false },
    ],
    difficulty: "easy",
    categories: ["Docker", "Dockerfile"],
    explanation: "'FROM' gibt das Basis-Image an.",
  },
  {
    id: uuidv4(),
    text: "Wie kann man zusätzliche Software in einem Docker-Image installieren?",
    options: [
      { id: generateNumericId(), text: "Mit der RUN-Anweisung", correct: true },
      {
        id: generateNumericId(),
        text: "Mit der ADD-Anweisung",
        correct: false,
      },
      { id: generateNumericId(), text: "Durch CMD", correct: false },
      { id: generateNumericId(), text: "Durch FROM", correct: false },
    ],
    difficulty: "medium",
    categories: ["Docker", "Dockerfile"],
    explanation: "'RUN' führt Befehle wie apt-get oder yum im Container aus.",
  },
  {
    id: uuidv4(),
    text: "Welche Anweisung kopiert Dateien ins Image?",
    options: [
      { id: generateNumericId(), text: "COPY", correct: true },
      { id: generateNumericId(), text: "ADD", correct: true },
      { id: generateNumericId(), text: "RUN", correct: false },
      { id: generateNumericId(), text: "FROM", correct: false },
    ],
    difficulty: "medium",
    categories: ["Docker", "Dockerfile"],
    explanation:
      "'COPY' und 'ADD' transferieren Dateien, unterscheiden sich jedoch leicht.",
  },
];
