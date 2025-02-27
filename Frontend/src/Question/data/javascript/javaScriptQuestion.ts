import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

const JavaScriptQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen sind korrekt in Bezug auf die Funktionsweise von 'this' in JavaScript?",
    options: [
      {
        text: "'this' bezieht sich immer auf das Objekt, das die Methode aufruft",
        correct: false,
      },
      {
        text: "'this' bezieht sich in einer normalen Funktion auf das globale Objekt",
        correct: true,
      },
      {
        text: "'this' ist in einer Arrow-Funktion immer auf das umgebende Objekt gebunden",
        correct: true,
      },
      {
        text: "'this' kann in einem Objekt Literal nicht verwendet werden",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["JavaScript"],
    explanation:
      "'this' kann in regulären Funktionen auf das globale Objekt zeigen, während Arrow-Funktionen das 'this' aus dem umgebenden Kontext verwenden.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Unterschied zwischen `let`, `const` und `var` in JavaScript?",
    options: [
      {
        text: "`let` und `const` haben Blockscope, `var` hat Funktionsscope.",
        correct: true,
      },
      {
        text: "`let` und `const` sind veränderbar, `var` ist konstant.",
        correct: false,
      },
      {
        text: "`let` ist nur für primitive Werte, `var` für Objekte.",
        correct: false,
      },
      {
        text: "`const` ist variabel, `let` und `var` sind konstant.",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["JavaScript"],
    explanation:
      "`let` und `const` haben Blockscope, `var` hat Funktionsscope. `const` ermöglicht keine Wertänderung, während `let` und `var` verändert werden können.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Typen sind primitive Datentypen in JavaScript?",
    options: [
      { text: "Number", correct: true },
      { text: "String", correct: true },
      { text: "Object", correct: false },
      { text: "Array", correct: false },
    ],
    difficulty: "easy",
    categories: ["JavaScript"],
    explanation:
      "Primitive Datentypen in JavaScript sind Number, String, Boolean, null, undefined, Symbol, und BigInt.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen über DOM-Manipulationen sind korrekt?",
    options: [
      {
        text: "Mit `getElementById` kann man nur das erste Element mit einer bestimmten ID auswählen",
        correct: true,
      },
      {
        text: "`createElement` wird verwendet, um HTML-Elemente dynamisch zu erzeugen",
        correct: true,
      },
      {
        text: "`removeChild` kann verwendet werden, um ein Element durch den Index zu entfernen",
        correct: false,
      },
      {
        text: "`querySelectorAll` gibt immer nur das erste gefundene Element zurück",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["JavaScript", "Web APIs"],
    explanation:
      "`getElementById` wählt nur ein Element mit der angegebenen ID aus, während `createElement` ein neues DOM-Element erzeugt.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zur Fetch-API sind korrekt?",
    options: [
      {
        text: "Fetch gibt immer ein Promise zurück, auch wenn die Anfrage fehlschlägt",
        correct: true,
      },
      {
        text: "Fetch erwartet immer ein JSON-Objekt als Antwort",
        correct: false,
      },
      {
        text: "Fetch kann auch für den Download von Dateien verwendet werden",
        correct: true,
      },
      {
        text: "Fetch hat keinen eigenen Mechanismus für das Handhaben von Fehlern",
        correct: true,
      },
    ],
    difficulty: "medium",
    categories: ["JavaScript", "Web APIs"],
    explanation:
      "Fetch gibt immer ein Promise zurück, aber um Fehler zu behandeln, muss man manuell den HTTP-Status überprüfen und Fehler abfangen.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zur Verwendung von 'async/await' sind korrekt?",
    options: [
      { text: "async macht eine Funktion immer asynchron", correct: true },
      {
        text: "'await' kann nur mit Promises verwendet werden",
        correct: true,
      },
      {
        text: "'async/await' kann synchronen Code in einen asynchronen umwandeln",
        correct: false,
      },
      {
        text: "Fehler in einer async-Funktion können mit try/catch abgefangen werden",
        correct: true,
      },
    ],
    difficulty: "medium",
    categories: ["JavaScript", "Async Programming"],
    explanation:
      "'async/await' ist ein syntaktischer Zucker für die Arbeit mit Promises und hilft, asynchrone Operationen klarer zu schreiben.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zu Promises und Parallelität in JavaScript sind korrekt?",
    options: [
      {
        text: "Mit `Promise.all` können mehrere Promises gleichzeitig ausgeführt werden",
        correct: true,
      },
      {
        text: "Die Reihenfolge der Ausführung von Promises ist immer die Reihenfolge, in der sie erstellt wurden",
        correct: false,
      },
      {
        text: "`Promise.all` wartet auf alle Promises, aber gibt sie einzeln zurück",
        correct: false,
      },
      {
        text: "`Promise.all` scheitert sofort, wenn eines der Promises fehlschlägt",
        correct: true,
      },
    ],
    difficulty: "hard",
    categories: ["JavaScript", "Async Programming"],
    explanation:
      "`Promise.all` wartet auf alle Promises, aber gibt sie in einem Array zurück und bricht sofort ab, wenn eines fehlschlägt.",
  },
];

export default JavaScriptQuestions;
