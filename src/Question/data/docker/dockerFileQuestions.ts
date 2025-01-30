import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

export const dockerFileQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Welche Best Practices gelten für das Schreiben von Dockerfiles?",
    options: [
      { text: "Verwendung kleiner Basis-Images", isCorrect: true },
      { text: "Minimierung der Layer-Anzahl", isCorrect: true },
      {
        text: "Alle Befehle in einer einzigen RUN-Anweisung bündeln",
        isCorrect: false,
      },
      { text: "Verwendung von Multi-Stage Builds", isCorrect: true },
    ],
    difficulty: "hard",
    category: ["Docker", "Dockerfile"],
    explanation:
      "Kleine Basis-Images, wenige Layer und Multi-Stage Builds verbessern Performance und Wartbarkeit. Befehle sollten klar getrennt bleiben, nicht gebündelt.",
  },
  {
    id: uuidv4(),
    text: "Was passiert, wenn ein Dockerfile keine CMD-Anweisung enthält?",
    options: [
      { text: "Der Container startet nicht", isCorrect: false },
      {
        text: "Der Container verwendet den Befehl des Basisimages",
        isCorrect: true,
      },
      { text: "Docker gibt einen Fehler beim Build aus", isCorrect: false },
      {
        text: "Es ist erforderlich, einen Entrypoint anzugeben",
        isCorrect: false,
      },
    ],
    difficulty: "hard",
    category: ["Docker", "Dockerfile"],
    explanation:
      "Fehlt CMD, wird der Standardbefehl des Basisimages verwendet.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Unterschied zwischen ENTRYPOINT und CMD in Docker?",
    options: [
      { text: "ENTRYPOINT ist vorrangig gegenüber CMD", isCorrect: true },
      { text: "CMD definiert Standardbefehle", isCorrect: true },
      { text: "ENTRYPOINT kann nicht überschrieben werden", isCorrect: false },
      { text: "CMD wird vor ENTRYPOINT ausgeführt", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Docker", "Dockerfile"],
    explanation:
      "ENTRYPOINT ist vorrangig, CMD definiert Standardbefehle, die von ENTRYPOINT genutzt werden können.",
  },
  {
    id: uuidv4(),
    text: "Welche Schritte sind beim Erstellen eines Docker-Images erforderlich?",
    options: [
      { text: "Ein Dockerfile erstellen", isCorrect: true },
      { text: "docker build ausführen", isCorrect: true },
      { text: "Einen Container starten", isCorrect: false },
      { text: "docker push verwenden", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["Docker", "Dockerfile"],
    explanation:
      "Ein Image wird durch ein Dockerfile und den Befehl 'docker build' erstellt.",
  },
  {
    id: uuidv4(),
    text: "Welche Anweisung wird im Dockerfile genutzt, um eine Basis-Image zu definieren?",
    options: [
      { text: "FROM", isCorrect: true },
      { text: "RUN", isCorrect: false },
      { text: "COPY", isCorrect: false },
      { text: "CMD", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["Docker", "Dockerfile"],
    explanation: "'FROM' gibt das Basis-Image an.",
  },
  {
    id: uuidv4(),
    text: "Wie kann man zusätzliche Software in einem Docker-Image installieren?",
    options: [
      { text: "Mit der RUN-Anweisung", isCorrect: true },
      { text: "Mit der ADD-Anweisung", isCorrect: false },
      { text: "Durch CMD", isCorrect: false },
      { text: "Durch FROM", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Dockerfile"],
    explanation: "'RUN' führt Befehle wie apt-get oder yum im Container aus.",
  },
  {
    id: uuidv4(),
    text: "Welche Anweisung kopiert Dateien ins Image?",
    options: [
      { text: "COPY", isCorrect: true },
      { text: "ADD", isCorrect: true },
      { text: "RUN", isCorrect: false },
      { text: "FROM", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Dockerfile"],
    explanation:
      "'COPY' und 'ADD' transferieren Dateien, unterscheiden sich jedoch leicht.",
  },
];
