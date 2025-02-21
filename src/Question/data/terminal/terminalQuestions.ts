import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

export const terminalQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Wie listet man alle Dateien in einem Verzeichnis inklusive versteckter Dateien auf?",
    options: [
      { text: "ls", correct: false },
      { text: "ls -a", correct: true },
      { text: "ls -l", correct: false },
      { text: "ls -al", correct: true },
    ],
    difficulty: "easy",
    categories: ["Terminal"],
    explanation:
      "Mit 'ls -a' werden auch versteckte Dateien (die mit '.' beginnen) angezeigt. 'ls -al' kombiniert dies mit einer detaillierten Ansicht.",
  },
  {
    id: uuidv4(),
    text: "Wie wechselt man in ein anderes Verzeichnis?",
    options: [
      { text: "cd", correct: true },
      { text: "mv", correct: false },
      { text: "pwd", correct: false },
      { text: "cd ..", correct: true },
    ],
    difficulty: "easy",
    categories: ["Terminal"],
    explanation:
      "Der Befehl 'cd' wechselt das Verzeichnis. Mit 'cd ..' gelangt man ins übergeordnete Verzeichnis.",
  },
  {
    id: uuidv4(),
    text: "Welcher Befehl zeigt den aktuellen Verzeichnispfad an?",
    options: [
      { text: "pwd", correct: true },
      { text: "ls", correct: false },
      { text: "cd", correct: false },
      { text: "echo $PWD", correct: true },
    ],
    difficulty: "easy",
    categories: ["Terminal"],
    explanation:
      "'pwd' zeigt den aktuellen Verzeichnispfad an. Alternativ kann die Umgebungsvariable '$PWD' verwendet werden.",
  },
  {
    id: uuidv4(),
    text: "Wie erstellt man eine neue Datei im Terminal?",
    options: [
      { text: "touch", correct: true },
      { text: "cat", correct: false },
      { text: "mkdir", correct: false },
      { text: "nano", correct: true },
    ],
    difficulty: "medium",
    categories: ["Terminal"],
    explanation:
      "Mit 'touch' wird eine leere Datei erstellt. 'nano' öffnet einen Editor, mit dem eine neue Datei gespeichert werden kann.",
  },
  {
    id: uuidv4(),
    text: "Welche Option löscht ein Verzeichnis und alle darin enthaltenen Dateien?",
    options: [
      { text: "rm -rf", correct: true },
      { text: "rm -r", correct: true },
      { text: "rmdir", correct: false },
      { text: "delete", correct: false },
    ],
    difficulty: "medium",
    categories: ["Terminal"],
    explanation:
      "'rm -rf' löscht ein Verzeichnis rekursiv und ohne Rückfragen. 'rm -r' fragt vor dem Löschen jeder Datei.",
  },
  {
    id: uuidv4(),
    text: "Wie zeigt man die letzten Zeilen einer Datei an?",
    options: [
      { text: "head", correct: false },
      { text: "tail", correct: true },
      { text: "cat", correct: false },
      { text: "less", correct: false },
    ],
    difficulty: "easy",
    categories: ["Terminal"],
    explanation:
      "'tail' zeigt standardmäßig die letzten 10 Zeilen einer Datei. Mit 'tail -n [Anzahl]' kann die Anzahl angepasst werden.",
  },
  {
    id: uuidv4(),
    text: "Welcher Befehl zeigt die laufenden Prozesse an?",
    options: [
      { text: "ps", correct: true },
      { text: "top", correct: true },
      { text: "jobs", correct: false },
      { text: "kill", correct: false },
    ],
    difficulty: "medium",
    categories: ["Terminal"],
    explanation:
      "'ps' zeigt eine Momentaufnahme der Prozesse, während 'top' die Prozesse in Echtzeit anzeigt.",
  },
  {
    id: uuidv4(),
    text: "Wie beendet man einen Prozess mit einer PID?",
    options: [
      { text: "kill", correct: true },
      { text: "exit", correct: false },
      { text: "kill -9", correct: true },
      { text: "stop", correct: false },
    ],
    difficulty: "medium",
    categories: ["Terminal"],
    explanation:
      "Mit 'kill [PID]' wird ein Prozess beendet. 'kill -9 [PID]' erzwingt das Beenden.",
  },
  {
    id: uuidv4(),
    text: "Wie sucht man rekursiv nach einem bestimmten String in Dateien?",
    options: [
      { text: "grep -r", correct: true },
      { text: "find -r", correct: false },
      { text: "grep", correct: false },
      { text: "grep -i", correct: false },
    ],
    difficulty: "medium",
    categories: ["Terminal"],
    explanation:
      "Mit 'grep -r' wird rekursiv nach einem String in allen Dateien eines Verzeichnisses gesucht.",
  },
  {
    id: uuidv4(),
    text: "Wie erstellt man ein komprimiertes Archiv?",
    options: [
      { text: "tar -czf", correct: true },
      { text: "zip", correct: true },
      { text: "gzip", correct: true },
      { text: "compress", correct: false },
    ],
    difficulty: "hard",
    categories: ["Terminal"],
    explanation:
      "'tar -czf' erstellt ein .tar.gz Archiv. 'zip' erstellt ein .zip Archiv. 'gzip' komprimiert einzelne Dateien.",
  },
];
