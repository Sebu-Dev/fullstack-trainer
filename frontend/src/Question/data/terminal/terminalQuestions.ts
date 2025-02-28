import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";
import { generateNumericId } from "../../../utils/helpers";

export const terminalQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Wie listet man alle Dateien in einem Verzeichnis inklusive versteckter Dateien auf?",
    options: [
      { id: generateNumericId(), text: "ls", correct: false },
      { id: generateNumericId(), text: "ls -a", correct: true },
      { id: generateNumericId(), text: "ls -l", correct: false },
      { id: generateNumericId(), text: "ls -al", correct: true },
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
      { id: generateNumericId(), text: "cd", correct: true },
      { id: generateNumericId(), text: "mv", correct: false },
      { id: generateNumericId(), text: "pwd", correct: false },
      { id: generateNumericId(), text: "cd ..", correct: true },
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
      { id: generateNumericId(), text: "pwd", correct: true },
      { id: generateNumericId(), text: "ls", correct: false },
      { id: generateNumericId(), text: "cd", correct: false },
      { id: generateNumericId(), text: "echo $PWD", correct: true },
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
      { id: generateNumericId(), text: "touch", correct: true },
      { id: generateNumericId(), text: "cat", correct: false },
      { id: generateNumericId(), text: "mkdir", correct: false },
      { id: generateNumericId(), text: "nano", correct: true },
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
      { id: generateNumericId(), text: "rm -rf", correct: true },
      { id: generateNumericId(), text: "rm -r", correct: true },
      { id: generateNumericId(), text: "rmdir", correct: false },
      { id: generateNumericId(), text: "delete", correct: false },
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
      { id: generateNumericId(), text: "head", correct: false },
      { id: generateNumericId(), text: "tail", correct: true },
      { id: generateNumericId(), text: "cat", correct: false },
      { id: generateNumericId(), text: "less", correct: false },
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
      { id: generateNumericId(), text: "ps", correct: true },
      { id: generateNumericId(), text: "top", correct: true },
      { id: generateNumericId(), text: "jobs", correct: false },
      { id: generateNumericId(), text: "kill", correct: false },
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
      { id: generateNumericId(), text: "kill", correct: true },
      { id: generateNumericId(), text: "exit", correct: false },
      { id: generateNumericId(), text: "kill -9", correct: true },
      { id: generateNumericId(), text: "stop", correct: false },
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
      { id: generateNumericId(), text: "grep -r", correct: true },
      { id: generateNumericId(), text: "find -r", correct: false },
      { id: generateNumericId(), text: "grep", correct: false },
      { id: generateNumericId(), text: "grep -i", correct: false },
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
      { id: generateNumericId(), text: "tar -czf", correct: true },
      { id: generateNumericId(), text: "zip", correct: true },
      { id: generateNumericId(), text: "gzip", correct: true },
      { id: generateNumericId(), text: "compress", correct: false },
    ],
    difficulty: "hard",
    categories: ["Terminal"],
    explanation:
      "'tar -czf' erstellt ein .tar.gz Archiv. 'zip' erstellt ein .zip Archiv. 'gzip' komprimiert einzelne Dateien.",
  },
];
