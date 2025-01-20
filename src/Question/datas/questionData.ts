import { v4 as uuidv4 } from "uuid";
import type { Question } from "../type/QuestionType";
import javaScriptQuestions from "./javascript/javaScriptQuestion";
import reactQuestions from "./react/reactQuestion";
import typeScriptQuestions from "./typescript/typeScriptQuestions";

const questionsData: Question[] = [
  // CSS
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
    questionText:
      "Wie wird der React Router für Navigation innerhalb einer React-App verwendet?",
    answerOptions: [
      { text: "`<Router>` und `<Route>`", isCorrect: true },
      { text: "`<Navigate>` und `<Route>`", isCorrect: false },
      { text: "`<Switch>` und `<Route>`", isCorrect: false },
      { text: "`<Link>` und `<Route>`", isCorrect: false },
    ],
    difficultyLevel: "medium",
    category: ["React", "Router"],
    explanation:
      "Der React Router verwendet `<Router>` und `<Route>`, um Navigation und Routen zu definieren.",
  },
  {
    id: uuidv4(),
    questionText:
      "Welche Funktion wird verwendet, um die aktuelle Route mit React Router zu navigieren?",
    answerOptions: [
      { text: "`useNavigate`", isCorrect: true },
      { text: "`useHistory`", isCorrect: false },
      { text: "`useLocation`", isCorrect: false },
      { text: "`useRouteMatch`", isCorrect: false },
    ],
    difficultyLevel: "medium",
    category: ["React", "Router"],
    explanation:
      "`useNavigate` wird verwendet, um die Navigation zu steuern, wenn der Zustand oder die Route geändert wird.",
  },

  // BEM
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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

  {
    id: uuidv4(),
    questionText:
      "Wann ist es sinnvoll, useReducer anstelle von useState zu verwenden?",
    answerOptions: [
      {
        text: "Bei komplexen Zustandslogiken mit mehreren Aktionen",
        isCorrect: true,
      },
      { text: "Bei sehr einfachen Zustandsänderungen", isCorrect: false },
      {
        text: "Um den State automatisch zwischen Komponenten zu teilen",
        isCorrect: false,
      },
      {
        text: "Um die Performance ohne weitere Optimierungen zu verbessern",
        isCorrect: false,
      },
    ],
    difficultyLevel: "medium",
    category: ["React", "Hooks"],
    explanation:
      "useReducer eignet sich besser für komplexe Zustandslogiken, da es Aktionen und eine zentrale Reducer-Funktion verwendet, um den Zustand konsistent zu aktualisieren.",
  },
  {
    id: uuidv4(),
    questionText: "Was ist der Hauptzweck von useImperativeHandle in React?",
    answerOptions: [
      {
        text: "Um selektive Methoden oder Eigenschaften an ein Parent zu exposen",
        isCorrect: true,
      },
      { text: "Um ein Parent-Element direkt zu ändern", isCorrect: false },
      {
        text: "Um eine gesamte DOM-Node an das Parent zu übergeben",
        isCorrect: false,
      },
      {
        text: "Um Props von Child-Komponenten zu überschreiben",
        isCorrect: false,
      },
    ],
    difficultyLevel: "hard",
    category: ["React", "Hooks"],
    explanation:
      "useImperativeHandle erlaubt es, eine benutzerdefinierte API für ein ref-Objekt zu definieren, das vom Parent genutzt wird, ohne das gesamte DOM freizulegen.",
  },
  {
    id: uuidv4(),
    questionText:
      "Welche Komponente wird verwendet, um eine React-Anwendung mit der URL zu synchronisieren?",
    answerOptions: [
      { text: "<BrowserRouter>", isCorrect: true },
      { text: "<NavLink>", isCorrect: false },
      { text: "<Route>", isCorrect: false },
      { text: "<Link>", isCorrect: false },
    ],
    difficultyLevel: "easy",
    category: ["React", "Router"],
    explanation:
      "<BrowserRouter> ist die Basis-Komponente, die React-Router verwendet, um die URL und den Anwendungsstatus zu synchronisieren.",
  },
  {
    id: uuidv4(),
    questionText: "Was ist ein Vorteil von Zustand gegenüber React Context?",
    answerOptions: [
      {
        text: "Zustand hat weniger Boilerplate und ist schneller",
        isCorrect: true,
      },
      {
        text: "Zustand rendert Komponenten bei jedem Update neu",
        isCorrect: false,
      },
      {
        text: "Zustand nutzt ausschließlich Redux-ähnliche Patterns",
        isCorrect: false,
      },
      { text: "Zustand erfordert mehrere Context-Provider", isCorrect: false },
    ],
    difficultyLevel: "medium",
    category: ["React", "State Management"],
    explanation:
      "Zustand ist leichter einzurichten und hat weniger Boilerplate im Vergleich zu React Context, was ihn für einfache Szenarien effizienter macht.",
  },
  {
    id: uuidv4(),
    questionText:
      "Welcher Hook wird in React Query verwendet, um Daten zu aktualisieren oder zu schreiben?",
    answerOptions: [
      { text: "useMutation", isCorrect: true },
      { text: "useQueryClient", isCorrect: false },
      { text: "useFetch", isCorrect: false },
      { text: "useQuery", isCorrect: false },
    ],
    difficultyLevel: "medium",
    category: ["React", "Data Fetching"],
    explanation:
      "useMutation wird in React Query verwendet, um Daten zu schreiben oder zu aktualisieren, z. B. bei POST-, PUT- oder DELETE-Anfragen.",
  },

  {
    id: uuidv4(),
    questionText:
      "Wie nutzt man useState korrekt mit mehreren unabhängigen Werten?",
    answerOptions: [
      { text: "Separate useState-Hooks verwenden", isCorrect: true },
      { text: "Werte in einem Objekt bündeln", isCorrect: false },
      { text: "Ein useState für alle Werte verwenden", isCorrect: false },
      { text: "State direkt mutieren", isCorrect: false },
    ],
    difficultyLevel: "medium",
    category: ["React", "Hooks"],
    explanation:
      "Für unabhängige Werte sollten separate useState-Hooks verwendet werden. Dadurch bleibt der Code modular und leicht verständlich.",
  },
  {
    id: uuidv4(),
    questionText: "Was ist ein typischer Anwendungsfall für Refs in React?",
    answerOptions: [
      {
        text: "Zustand speichern, der ein Re-Render auslöst",
        isCorrect: false,
      },
      { text: "Ein DOM-Element direkt referenzieren", isCorrect: true },
      { text: "Komplexe Animationen im State speichern", isCorrect: false },
      { text: "Ein neues Re-Render erzwingen", isCorrect: false },
    ],
    difficultyLevel: "easy",
    category: ["React", "Refs"],
    explanation:
      "Refs werden verwendet, um direkt auf DOM-Elemente zuzugreifen, ohne den Component-State zu beeinflussen.",
  },
  {
    id: uuidv4(),
    questionText:
      "Was bewirkt ein leeres Abhängigkeitsarray ([]) im useEffect-Hook?",
    answerOptions: [
      { text: "Der Effect wird bei jedem Render aufgerufen", isCorrect: false },
      {
        text: "Der Effect wird nur beim ersten Render aufgerufen",
        isCorrect: true,
      },
      {
        text: "Der Effect wird bei Änderungen des DOM ausgeführt",
        isCorrect: false,
      },
      {
        text: "Der Effect wird nach jedem Benutzer-Event aufgerufen",
        isCorrect: false,
      },
    ],
    difficultyLevel: "easy",
    category: ["React", "Hooks"],
    explanation:
      "Ein leeres Abhängigkeitsarray bewirkt, dass der Effekt nur einmal beim Initial-Render ausgeführt wird.",
  },
  {
    id: uuidv4(),
    questionText: "Was teilen Custom Hooks zwischen Komponenten?",
    answerOptions: [
      { text: "Den Zustand der Komponente", isCorrect: false },
      { text: "Props der Komponente", isCorrect: false },
      { text: "Reaktive Werte werden überschrieben", isCorrect: false },
      { text: "Die zustandsbehaftete Logik", isCorrect: true },
    ],
    difficultyLevel: "medium",
    category: ["React", "Custom Hooks"],
    explanation:
      "Custom Hooks teilen zustandsbehaftete Logik, nicht jedoch den Zustand oder die Props zwischen Komponenten.",
  },
  {
    id: uuidv4(),
    questionText: "Wann ist der Einsatz von useMemo sinnvoll?",
    answerOptions: [
      {
        text: "Für teure Berechnungen, die Abhängigkeiten besitzen",
        isCorrect: true,
      },
      {
        text: "Wenn eine Variable bei jedem Render neu erstellt wird",
        isCorrect: false,
      },
      {
        text: "Für Variablen, die keine Abhängigkeiten haben",
        isCorrect: false,
      },
      { text: "Für jede State-Änderung", isCorrect: false },
    ],
    difficultyLevel: "medium",
    category: ["React", "Hooks"],
    explanation:
      "useMemo optimiert teure Berechnungen, indem sie nur neu ausgeführt werden, wenn sich ihre Abhängigkeiten ändern.",
  },
  {
    id: uuidv4(),
    questionText: "Wofür wird useCallback primär verwendet?",
    answerOptions: [
      { text: "Um Werte zu memoisieren", isCorrect: false },
      { text: "Um Funktionen zu memoisieren", isCorrect: true },
      { text: "Um Arrays effizient zu filtern", isCorrect: false },
      { text: "Um DOM-Elemente zu referenzieren", isCorrect: false },
    ],
    difficultyLevel: "medium",
    category: ["React", "Hooks"],
    explanation:
      "useCallback wird genutzt, um Funktionen zu memoisieren und unnötige Neudeklarationen bei jedem Render zu vermeiden.",
  },
  {
    id: uuidv4(),
    questionText:
      "Was ist der Hauptzweck eines Providers im React Context-System?",
    answerOptions: [
      { text: "Um State zwischen Komponenten zu teilen", isCorrect: true },
      { text: "Um den Context zu initialisieren", isCorrect: false },
      { text: "Um die App schneller zu machen", isCorrect: false },
      { text: "Um eine neue Komponente zu rendern", isCorrect: false },
    ],
    difficultyLevel: "easy",
    category: ["React", "Context"],
    explanation:
      "Ein Provider teilt den Context-Wert an alle untergeordneten Komponenten, die den Context konsumieren.",
  },
  {
    id: uuidv4(),
    questionText:
      "Was ist der Hauptvorteil von useContext im Vergleich zu Props?",
    answerOptions: [
      {
        text: "Vermeidet das explizite Weiterreichen von Daten durch Props",
        isCorrect: true,
      },
      { text: "Erhöht die Performance automatisch", isCorrect: false },
      { text: "Erlaubt das direkte Rendern von Komponenten", isCorrect: false },
      { text: "Ersetzt alle anderen Hooks", isCorrect: false },
    ],
    difficultyLevel: "easy",
    category: ["React", "Context"],
    explanation:
      "useContext erspart das Weiterreichen von Props über mehrere Ebenen und erleichtert die Handhabung globaler Zustände.",
  },
];

export default [
  ...questionsData,
  ...javaScriptQuestions,
  ...reactQuestions,
  ...typeScriptQuestions,
];
