import type { Question } from "./type/QuestionType";

const questionsData: Question[] = [
  // CSS
  {
    id: "1",
    questionText: "Was bedeutet BEM in der Webentwicklung?",
    answerOptions: [
      { text: "Block Element Modifier", isCorrect: true },
      { text: "Block Element Model", isCorrect: false },
      { text: "Block Element Method", isCorrect: false },
      { text: "Basic Element Modifier", isCorrect: false },
    ],
    difficultyLevel: "medium",
    category: ["CSS", "BEM"],
    explanation:
      "BEM steht für Block Element Modifier und ist eine Methodologie zur Strukturierung von CSS-Klassen.",
  },
  {
    id: "2",
    questionText:
      "Was ist der Unterschied zwischen `position: absolute` und `position: fixed` in CSS?",
    answerOptions: [
      {
        text: "`absolute` bezieht sich auf das nächstgelegene positionierte Element, `fixed` bleibt immer am gleichen Ort",
        isCorrect: true,
      },
      {
        text: "`absolute` bleibt am Fenster, `fixed` folgt dem Scrollen",
        isCorrect: false,
      },
      {
        text: "`absolute` bleibt immer am gleichen Ort, `fixed` ist relativ zum Container",
        isCorrect: false,
      },
      {
        text: "`absolute` ist nur für Block-Elemente, `fixed` für Inline-Elemente",
        isCorrect: false,
      },
    ],
    difficultyLevel: "medium",
    category: ["CSS"],
    explanation:
      "`absolute` positioniert relativ zum nächsten positionierten Eltern-Element, während `fixed` das Element immer am gleichen Punkt auf dem Bildschirm hält.",
  },

  // React
  {
    id: "3",
    questionText: "Wie wird der `useState` Hook in React verwendet?",
    answerOptions: [
      {
        text: "const [state, setState] = useState(initialState);",
        isCorrect: true,
      },
      {
        text: "const [state, setState] = useState(initialState, callback);",
        isCorrect: false,
      },
      { text: "const setState = useState(initialState);", isCorrect: false },
      {
        text: "const [state, setState] = useReducer(initialState);",
        isCorrect: false,
      },
    ],
    difficultyLevel: "easy",
    category: ["React", "Hooks"],
    explanation:
      "`useState` ist ein Hook, um den Zustand in einer Funktionskomponente zu verwalten.",
  },
  {
    id: "4",
    questionText:
      "Welche Methode wird verwendet, um eine Komponente in React zu aktualisieren?",
    answerOptions: [
      { text: "`setState`", isCorrect: true },
      { text: "`useEffect`", isCorrect: false },
      { text: "`render`", isCorrect: false },
      { text: "`updateState`", isCorrect: false },
    ],
    difficultyLevel: "easy",
    category: ["React"],
    explanation:
      "In React wird der Zustand einer Klasse durch die Methode `setState` und in Funktionskomponenten durch `useState` aktualisiert.",
  },

  // TypeScript
  {
    id: "5",
    questionText:
      "Wie wird eine Typisierung für eine Funktion in TypeScript angegeben?",
    answerOptions: [
      { text: "function myFunction(param: string): void { }", isCorrect: true },
      { text: "function myFunction(param: string): any { }", isCorrect: false },
      { text: "function myFunction(param): string { }", isCorrect: false },
      { text: "function myFunction(string): void { }", isCorrect: false },
    ],
    difficultyLevel: "medium",
    category: ["TypeScript"],
    explanation:
      "In TypeScript wird die Typisierung der Parameter und des Rückgabewerts einer Funktion mit `param: type` angegeben.",
  },

  // JavaScript
  {
    id: "6",
    questionText:
      "Was ist der Unterschied zwischen `let`, `const` und `var` in JavaScript?",
    answerOptions: [
      {
        text: "`let` und `const` haben Blockscope, `var` hat Funktionsscope.",
        isCorrect: true,
      },
      {
        text: "`let` und `const` sind veränderbar, `var` ist konstant.",
        isCorrect: false,
      },
      {
        text: "`let` ist nur für primitive Werte, `var` für Objekte.",
        isCorrect: false,
      },
      {
        text: "`const` ist variabel, `let` und `var` sind konstant.",
        isCorrect: false,
      },
    ],
    difficultyLevel: "medium",
    category: ["JavaScript"],
    explanation:
      "`let` und `const` haben Blockscope, `var` hat Funktionsscope. `const` ermöglicht keine Wertänderung, während `let` und `var` verändert werden können.",
  },

  // React Router
  {
    id: "7",
    questionText:
      "Wie wird der React Router für Navigation innerhalb einer React-App verwendet?",
    answerOptions: [
      { text: "`<Router>` und `<Route>`", isCorrect: true },
      { text: "`<Navigate>` und `<Route>`", isCorrect: false },
      { text: "`<Switch>` und `<Route>`", isCorrect: false },
      { text: "`<Link>` und `<Route>`", isCorrect: false },
    ],
    difficultyLevel: "medium",
    category: ["React", "React Router"],
    explanation:
      "Der React Router verwendet `<Router>` und `<Route>`, um Navigation und Routen zu definieren.",
  },
  {
    id: "8",
    questionText:
      "Welche Funktion wird verwendet, um die aktuelle Route mit React Router zu navigieren?",
    answerOptions: [
      { text: "`useNavigate`", isCorrect: true },
      { text: "`useHistory`", isCorrect: false },
      { text: "`useLocation`", isCorrect: false },
      { text: "`useRouteMatch`", isCorrect: false },
    ],
    difficultyLevel: "medium",
    category: ["React", "React Router"],
    explanation:
      "`useNavigate` wird verwendet, um die Navigation zu steuern, wenn der Zustand oder die Route geändert wird.",
  },

  // BEM
  {
    id: "9",
    questionText: "Was ist ein Beispiel für eine BEM-konforme CSS-Klasse?",
    answerOptions: [
      { text: "block__element--modifier", isCorrect: true },
      { text: "block-element--modifier", isCorrect: false },
      { text: "block-element_modifier", isCorrect: false },
      { text: "block__element_modifier", isCorrect: false },
    ],
    difficultyLevel: "hard",
    category: ["CSS", "BEM"],
    explanation:
      "In BEM (Block-Element-Modifier) wird eine Klasse mit Block, Element und Modifier strukturiert, z.B. `block__element--modifier`.",
  },
  {
    id: "10",
    questionText: "In BEM, was beschreibt der Modifier?",
    answerOptions: [
      { text: "Eine Modifikation des Blocks oder Elements", isCorrect: true },
      { text: "Die Grundlage des Blocks", isCorrect: false },
      { text: "Die Definition des Elements", isCorrect: false },
      { text: "Die Vererbung von CSS-Regeln", isCorrect: false },
    ],
    difficultyLevel: "hard",
    category: ["CSS", "BEM"],
    explanation:
      "Der Modifier beschreibt eine modifizierte Version eines Blocks oder Elements, z.B. eine Variation eines Buttons.",
  },

  // React Advanced Questions
  {
    id: "11",
    questionText:
      "Was sind mögliche Probleme bei der Verwendung von `useEffect`?",
    answerOptions: [
      { text: "Unbeabsichtigte Endlosschleifen", isCorrect: true },
      {
        text: "Speicherlecks bei unbereinigten Subscriptions",
        isCorrect: true,
      },
      { text: "Fehlende Rückgabewerte", isCorrect: false },
      { text: "Unzureichende Hook-Regeln", isCorrect: false },
    ],
    difficultyLevel: "hard",
    category: ["React", "Hooks"],
    explanation:
      "`useEffect` kann Probleme wie Endlosschleifen und Speicherlecks verursachen, wenn Abhängigkeiten nicht korrekt angegeben oder Subscriptions nicht bereinigt werden.",
  },
  {
    id: "12",
    questionText: "Wie zentriert man ein Element in CSS?",
    answerOptions: [
      {
        text: "Mit `display: flex` und `justify-content: center; align-items: center;`",
        isCorrect: true,
      },
      { text: "Mit `margin: auto`", isCorrect: true },
      { text: "Mit `float: center`", isCorrect: false },
      { text: "Mit `vertical-align: center`", isCorrect: false },
    ],
    difficultyLevel: "medium",
    category: ["CSS"],
    explanation:
      "Zentrieren kann mit Flexbox, Grid oder `margin: auto` erfolgen. `float` oder `vertical-align` sind nicht geeignet.",
  },
  {
    id: "13",
    questionText: "Wann verwendet man `useReducer` anstelle von `useState`?",
    answerOptions: [
      {
        text: "Bei komplexen State-Logiken mit mehreren Zuständen",
        isCorrect: true,
      },
      { text: "Wenn man nur einen Boolean togglen möchte", isCorrect: false },
      { text: "Für einfache State-Updates", isCorrect: false },
      {
        text: "Wenn man Zustand zwischen Komponenten teilen möchte",
        isCorrect: false,
      },
    ],
    difficultyLevel: "hard",
    category: ["React", "Hooks"],
    explanation:
      "`useReducer` eignet sich besser für komplexe Logiken, während `useState` bei einfachen State-Änderungen vorzuziehen ist.",
  },
  {
    id: "14",
    questionText: "Wie definiert man eine generische Funktion in TypeScript?",
    answerOptions: [
      {
        text: "function func<T>(param: T): T { return param; }",
        isCorrect: true,
      },
      {
        text: "function func(param: T): T { return param; }",
        isCorrect: false,
      },
      {
        text: "function func<T>(param: T) { return param; }",
        isCorrect: false,
      },
      {
        text: "function func<T, R>(param: T): R { return param; }",
        isCorrect: false,
      },
    ],
    difficultyLevel: "hard",
    category: ["TypeScript"],
    explanation:
      "Generische Funktionen verwenden `<T>` zur Definition und können unterschiedliche Typen verarbeiten, z.B. `function func<T>(param: T): T {}`.",
  },
];

export default questionsData;
