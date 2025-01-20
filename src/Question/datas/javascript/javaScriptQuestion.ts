import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

const javaScriptQuestions: Question[] = [
  {
    id: uuidv4(),
    questionText:
      "Welche der folgenden Aussagen sind korrekt in Bezug auf die Funktionsweise von 'this' in JavaScript?",
    answerOptions: [
      {
        text: "'this' bezieht sich immer auf das Objekt, das die Methode aufruft",
        isCorrect: false,
      },
      {
        text: "'this' bezieht sich in einer normalen Funktion auf das globale Objekt",
        isCorrect: true,
      },
      {
        text: "'this' ist in einer Arrow-Funktion immer auf das umgebende Objekt gebunden",
        isCorrect: true,
      },
      {
        text: "'this' kann in einem Objekt Literal nicht verwendet werden",
        isCorrect: false,
      },
    ],
    difficultyLevel: "medium",
    category: ["JavaScript"],
    explanation:
      "'this' kann in regulären Funktionen auf das globale Objekt zeigen, während Arrow-Funktionen das 'this' aus dem umgebenden Kontext verwenden.",
  },
  {
    id: uuidv4(),
    questionText:
      "Welche der folgenden Typen sind primitive Datentypen in JavaScript?",
    answerOptions: [
      { text: "Number", isCorrect: true },
      { text: "String", isCorrect: true },
      { text: "Object", isCorrect: false },
      { text: "Array", isCorrect: false },
    ],
    difficultyLevel: "easy",
    category: ["JavaScript"],
    explanation:
      "Primitive Datentypen in JavaScript sind Number, String, Boolean, null, undefined, Symbol, und BigInt.",
  },
  {
    id: uuidv4(),
    questionText:
      "Welche der folgenden Aussagen über DOM-Manipulationen sind korrekt?",
    answerOptions: [
      {
        text: "Mit `getElementById` kann man nur das erste Element mit einer bestimmten ID auswählen",
        isCorrect: true,
      },
      {
        text: "`createElement` wird verwendet, um HTML-Elemente dynamisch zu erzeugen",
        isCorrect: true,
      },
      {
        text: "`removeChild` kann verwendet werden, um ein Element durch den Index zu entfernen",
        isCorrect: false,
      },
      {
        text: "`querySelectorAll` gibt immer nur das erste gefundene Element zurück",
        isCorrect: false,
      },
    ],
    difficultyLevel: "medium",
    category: ["Web APIs"],
    explanation:
      "`getElementById` wählt nur ein Element mit der angegebenen ID aus, während `createElement` ein neues DOM-Element erzeugt.",
  },
  {
    id: uuidv4(),
    questionText: "Welche der folgenden Aussagen zur Fetch-API sind korrekt?",
    answerOptions: [
      {
        text: "Fetch gibt immer ein Promise zurück, auch wenn die Anfrage fehlschlägt",
        isCorrect: true,
      },
      {
        text: "Fetch erwartet immer ein JSON-Objekt als Antwort",
        isCorrect: false,
      },
      {
        text: "Fetch kann auch für den Download von Dateien verwendet werden",
        isCorrect: true,
      },
      {
        text: "Fetch hat keinen eigenen Mechanismus für das Handhaben von Fehlern",
        isCorrect: true,
      },
    ],
    difficultyLevel: "medium",
    category: ["Web APIs"],
    explanation:
      "Fetch gibt immer ein Promise zurück, aber um Fehler zu behandeln, muss man manuell den HTTP-Status überprüfen und Fehler abfangen.",
  },
  {
    id: uuidv4(),
    questionText:
      "Welche der folgenden Aussagen zur Verwendung von 'async/await' sind korrekt?",
    answerOptions: [
      { text: "async macht eine Funktion immer asynchron", isCorrect: true },
      {
        text: "'await' kann nur mit Promises verwendet werden",
        isCorrect: true,
      },
      {
        text: "'async/await' kann synchronen Code in einen asynchronen umwandeln",
        isCorrect: false,
      },
      {
        text: "Fehler in einer async-Funktion können mit try/catch abgefangen werden",
        isCorrect: true,
      },
    ],
    difficultyLevel: "medium",
    category: ["Async Programming"],
    explanation:
      "'async/await' ist ein syntaktischer Zucker für die Arbeit mit Promises und hilft, asynchrone Operationen klarer zu schreiben.",
  },
  {
    id: uuidv4(),
    questionText:
      "Welche der folgenden Aussagen zu Promises und Parallelität in JavaScript sind korrekt?",
    answerOptions: [
      {
        text: "Mit `Promise.all` können mehrere Promises gleichzeitig ausgeführt werden",
        isCorrect: true,
      },
      {
        text: "Die Reihenfolge der Ausführung von Promises ist immer die Reihenfolge, in der sie erstellt wurden",
        isCorrect: false,
      },
      {
        text: "`Promise.all` wartet auf alle Promises, aber gibt sie einzeln zurück",
        isCorrect: false,
      },
      {
        text: "`Promise.all` scheitert sofort, wenn eines der Promises fehlschlägt",
        isCorrect: true,
      },
    ],
    difficultyLevel: "hard",
    category: ["Async Programming"],
    explanation:
      "`Promise.all` wartet auf alle Promises, aber gibt sie in einem Array zurück und bricht sofort ab, wenn eines fehlschlägt.",
  },
];

export default javaScriptQuestions;
