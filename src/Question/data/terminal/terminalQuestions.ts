import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

export const terminalQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Wie listet man alle Dateien in einem Verzeichnis inklusive versteckter Dateien auf?",
    options: [
      { text: "ls", isCorrect: false },
      { text: "ls -a", isCorrect: true },
      { text: "ls -l", isCorrect: false },
      { text: "ls -al", isCorrect: true },
    ],
    difficulty: "easy",
    category: ["Terminal"],
    explanation:
      "Mit 'ls -a' werden auch versteckte Dateien (die mit '.' beginnen) angezeigt. 'ls -al' kombiniert dies mit einer detaillierten Ansicht.",
  },
  {
    id: uuidv4(),
    text: "Wie wechselt man in ein anderes Verzeichnis?",
    options: [
      { text: "cd", isCorrect: true },
      { text: "mv", isCorrect: false },
      { text: "pwd", isCorrect: false },
      { text: "cd ..", isCorrect: true },
    ],
    difficulty: "easy",
    category: ["Terminal"],
    explanation:
      "Der Befehl 'cd' wechselt das Verzeichnis. Mit 'cd ..' gelangt man ins übergeordnete Verzeichnis.",
  },
  {
    id: uuidv4(),
    text: "Welcher Befehl zeigt den aktuellen Verzeichnispfad an?",
    options: [
      { text: "pwd", isCorrect: true },
      { text: "ls", isCorrect: false },
      { text: "cd", isCorrect: false },
      { text: "echo $PWD", isCorrect: true },
    ],
    difficulty: "easy",
    category: ["Terminal"],
    explanation:
      "'pwd' zeigt den aktuellen Verzeichnispfad an. Alternativ kann die Umgebungsvariable '$PWD' verwendet werden.",
  },
  {
    id: uuidv4(),
    text: "Wie erstellt man eine neue Datei im Terminal?",
    options: [
      { text: "touch", isCorrect: true },
      { text: "cat", isCorrect: false },
      { text: "mkdir", isCorrect: false },
      { text: "nano", isCorrect: true },
    ],
    difficulty: "medium",
    category: ["Terminal"],
    explanation:
      "Mit 'touch' wird eine leere Datei erstellt. 'nano' öffnet einen Editor, mit dem eine neue Datei gespeichert werden kann.",
  },
  {
    id: uuidv4(),
    text: "Welche Option löscht ein Verzeichnis und alle darin enthaltenen Dateien?",
    options: [
      { text: "rm -rf", isCorrect: true },
      { text: "rm -r", isCorrect: true },
      { text: "rmdir", isCorrect: false },
      { text: "delete", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Terminal"],
    explanation:
      "'rm -rf' löscht ein Verzeichnis rekursiv und ohne Rückfragen. 'rm -r' fragt vor dem Löschen jeder Datei.",
  },
  {
    id: uuidv4(),
    text: "Wie zeigt man die letzten Zeilen einer Datei an?",
    options: [
      { text: "head", isCorrect: false },
      { text: "tail", isCorrect: true },
      { text: "cat", isCorrect: false },
      { text: "less", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["Terminal"],
    explanation:
      "'tail' zeigt standardmäßig die letzten 10 Zeilen einer Datei. Mit 'tail -n [Anzahl]' kann die Anzahl angepasst werden.",
  },
  {
    id: uuidv4(),
    text: "Welcher Befehl zeigt die laufenden Prozesse an?",
    options: [
      { text: "ps", isCorrect: true },
      { text: "top", isCorrect: true },
      { text: "jobs", isCorrect: false },
      { text: "kill", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Terminal"],
    explanation:
      "'ps' zeigt eine Momentaufnahme der Prozesse, während 'top' die Prozesse in Echtzeit anzeigt.",
  },
  {
    id: uuidv4(),
    text: "Wie beendet man einen Prozess mit einer PID?",
    options: [
      { text: "kill", isCorrect: true },
      { text: "exit", isCorrect: false },
      { text: "kill -9", isCorrect: true },
      { text: "stop", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Terminal"],
    explanation:
      "Mit 'kill [PID]' wird ein Prozess beendet. 'kill -9 [PID]' erzwingt das Beenden.",
  },
  {
    id: uuidv4(),
    text: "Wie sucht man rekursiv nach einem bestimmten String in Dateien?",
    options: [
      { text: "grep -r", isCorrect: true },
      { text: "find -r", isCorrect: false },
      { text: "grep", isCorrect: false },
      { text: "grep -i", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Terminal"],
    explanation:
      "Mit 'grep -r' wird rekursiv nach einem String in allen Dateien eines Verzeichnisses gesucht.",
  },
  {
    id: uuidv4(),
    text: "Wie erstellt man ein komprimiertes Archiv?",
    options: [
      { text: "tar -czf", isCorrect: true },
      { text: "zip", isCorrect: true },
      { text: "gzip", isCorrect: true },
      { text: "compress", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Terminal"],
    explanation:
      "'tar -czf' erstellt ein .tar.gz Archiv. 'zip' erstellt ein .zip Archiv. 'gzip' komprimiert einzelne Dateien.",
  },
];
