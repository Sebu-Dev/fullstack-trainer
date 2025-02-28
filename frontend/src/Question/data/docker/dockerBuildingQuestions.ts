import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";
import { generateNumericId } from "../../../utils/helpers";

export const dockerBuildingQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Welche Schritte sind notwendig, um ein Docker-Image zu erstellen?",
    options: [
      {
        id: generateNumericId(),
        text: "Ein Dockerfile schreiben",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Den Befehl 'docker build' ausführen",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Einen Container erstellen",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Den Image-Namen vorher registrieren",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Building Images"],
    explanation:
      "Ein Image wird durch ein Dockerfile und 'docker build' erstellt.",
  },
  {
    id: uuidv4(),
    text: "Was macht der `docker build` Befehl?",
    options: [
      {
        id: generateNumericId(),
        text: "Erstellt ein neues Docker-Image",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Startet einen Container",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Lädt Images in ein Repository hoch",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Nutzt das Dockerfile zur Image-Erstellung",
        correct: true,
      },
    ],
    difficulty: "easy",
    categories: ["Docker", "Docker Building Images"],
    explanation:
      "Mit 'docker build' wird ein Docker-Image aus einem Dockerfile erzeugt.",
  },
  {
    id: uuidv4(),
    text: "Wie kann der Build-Kontext eines Docker-Images angegeben werden?",
    options: [
      {
        id: generateNumericId(),
        text: "Durch den Pfad am Ende von 'docker build'",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Nur durch Umgebungsvariablen",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Durch ein Flag wie '--context'",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Der Kontext ist immer festgelegt",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Building Images"],
    explanation:
      "Der Build-Kontext wird durch den Pfad oder das '--context'-Flag definiert.",
  },
  {
    id: uuidv4(),
    text: "Welche Rolle spielt der Build-Cache bei Docker?",
    options: [
      {
        id: generateNumericId(),
        text: "Er beschleunigt wiederholte Builds",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Er speichert Container-Daten",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Er wird mit dem Flag '--no-cache' deaktiviert",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Er ist nur bei Multi-Stage-Builds verfügbar",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Building Images"],
    explanation:
      "Der Build-Cache speichert Zwischenschritte, um Builds zu beschleunigen.",
  },
  {
    id: uuidv4(),
    text: "Was bewirkt das Flag `-t` beim `docker build` Befehl?",
    options: [
      {
        id: generateNumericId(),
        text: "Es weist dem Image einen Namen zu",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Es erhöht die Build-Geschwindigkeit",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Es erstellt ein temporäres Image",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Es definiert das Zielverzeichnis",
        correct: false,
      },
    ],
    difficulty: "easy",
    categories: ["Docker", "Docker Building Images"],
    explanation: "Das '-t' Flag gibt dem Image einen Namen (Tag).",
  },
  {
    id: uuidv4(),
    text: "Welche Vorteile bieten Multi-Stage-Builds bei der Erstellung von Docker-Images? ",
    options: [
      {
        id: generateNumericId(),
        text: "Reduktion der Image-Größe",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Trennung von Build- und Runtime-Umgebung",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Erleichterung der CI/CD-Pipelines",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Erhöhte Netzwerkleistung",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["Docker", "Docker Building Images"],
    explanation:
      "Multi-Stage-Builds helfen, schlanke Images zu erstellen, indem sie unnötige Dateien und Abhängigkeiten aus der Runtime entfernen.",
  },
  {
    id: uuidv4(),
    text: "Wie kannst du sicherstellen, dass ein Docker-Build wiederholbar und unabhängig von externen Veränderungen (z. B. Änderungen im Internet) bleibt?",
    options: [
      {
        id: generateNumericId(),
        text: "Durch Verwendung fixer Versionsnummern in der Package-Installation",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Durch Nutzung von Caches",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Durch Einbindung externer Build-Skripte",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Durch Nutzung von Build-Argumenten",
        correct: true,
      },
    ],
    difficulty: "hard",
    categories: ["Docker", "Docker Building Images"],
    explanation:
      "Fixe Versionsnummern und Build-Argumente sorgen für Konsistenz bei wiederholten Builds.",
  },
  {
    id: uuidv4(),
    text: "Warum sollte man keine sensiblen Informationen (wie Passwörter) direkt im Dockerfile hinterlegen? Welche Alternativen gibt es?",
    options: [
      {
        id: generateNumericId(),
        text: "Dockerfiles sind oft in Repos öffentlich zugänglich",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Um Sicherheitsschwachstellen zu minimieren",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Passwörter können durch Docker Secrets sicherer gehandhabt werden",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Es ist nicht möglich, sensible Daten im Dockerfile zu verwenden",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["Docker", "Docker Building Images"],
    explanation:
      "Sensible Daten sollten über Umgebungsvariablen oder Docker Secrets bereitgestellt werden.",
  },
  {
    id: uuidv4(),
    text: "Was bedeutet das Konzept des Build-Contexts, und wie beeinflusst es die Größe eines Images?",
    options: [
      {
        id: generateNumericId(),
        text: "Der Build-Context ist der Ordner, der beim Build an Docker übertragen wird",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Große Build-Contexts können zu größeren Images führen",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Der Build-Context wird nicht in das Image eingebunden",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Build-Contexts beeinflussen die Layer des Images direkt",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Building Images"],
    explanation:
      "Ein sauber definierter Build-Context reduziert die Build-Zeit und die Größe des Images.",
  },
  {
    id: uuidv4(),
    text: "Erkläre, warum das Minimieren der Layers in einem Dockerfile wichtig für die Performance und Sicherheit ist.",
    options: [
      {
        id: generateNumericId(),
        text: "Weniger Layers führen zu kleineren Images",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Es minimiert mögliche Angriffsflächen",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Es verbessert die Lesbarkeit des Dockerfiles",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Es reduziert den Ressourcenverbrauch während des Builds",
        correct: true,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Building Images"],
    explanation:
      "Weniger Layers bedeuten weniger Komplexität und Angriffsfläche im finalen Image.",
  },
];
