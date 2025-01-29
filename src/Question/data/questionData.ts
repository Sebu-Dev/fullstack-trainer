import { v4 as uuidv4 } from "uuid";
import type { Question } from "../type/QuestionType";
import { cssQuestions } from "./css/cssQuestions";
import { dockerBuildingQuestions } from "./docker/dockerBuildingQuestions";
import { dockerComposeQuestions } from "./docker/dockerComposeQuestions";
import { dockerFileQuestions } from "./docker/dockerFileQuestions";
import { dockerLayerQuestions } from "./docker/dockerLayerQuestions";
import { dockerMultistageQuestions } from "./docker/dockerMultistageQuestions";
import { dockerQuestions } from "./docker/dockerQuestions";
import { dockerVolumeQuestions } from "./docker/dockerVolume";
import javaScriptQuestions from "./javascript/javaScriptQuestion";
import { reactHookQuestions } from "./react/reactHooks";
import reactQuestions from "./react/reactQuestion";
import { terminalQuestions } from "./terminal/terminalQuestions";
import typeScriptQuestions from "./typescript/typeScriptQuestions";

const questionsData: Question[] = [
  // CSS
  {
    id: uuidv4(),
    text: "Was bedeutet BEM in der Webentwicklung?",
    options: [
      { text: "Block Element Modifier", isCorrect: true },
      { text: "Block Element Model", isCorrect: false },
      { text: "Block Element Method", isCorrect: false },
      { text: "Basic Element Modifier", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["CSS", "BEM"],
    explanation:
      "BEM steht für Block Element Modifier und ist eine Methodologie zur Strukturierung von CSS-Klassen.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Unterschied zwischen `position: absolute` und `position: fixed` in CSS?",
    options: [
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
    difficulty: "medium",
    category: ["CSS"],
    explanation:
      "`absolute` positioniert relativ zum nächsten positionierten Eltern-Element, während `fixed` das Element immer am gleichen Punkt auf dem Bildschirm hält.",
  },

  // React

  {
    id: uuidv4(),
    text: "Welche Methode wird verwendet, um eine Komponente in React zu aktualisieren?",
    options: [
      { text: "`setState`", isCorrect: true },
      { text: "`useEffect`", isCorrect: false },
      { text: "`render`", isCorrect: false },
      { text: "`updateState`", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["React"],
    explanation:
      "In React wird der Zustand einer Klasse durch die Methode `setState` und in Funktionskomponenten durch `useState` aktualisiert.",
  },

  // TypeScript
  {
    id: uuidv4(),
    text: "Wie wird eine Typisierung für eine Funktion in TypeScript angegeben?",
    options: [
      { text: "function myFunction(param: string): void { }", isCorrect: true },
      { text: "function myFunction(param: string): any { }", isCorrect: false },
      { text: "function myFunction(param): string { }", isCorrect: false },
      { text: "function myFunction(string): void { }", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["TypeScript"],
    explanation:
      "In TypeScript wird die Typisierung der Parameter und des Rückgabewerts einer Funktion mit `param: type` angegeben.",
  },

  // JavaScript
  {
    id: uuidv4(),
    text: "Was ist der Unterschied zwischen `let`, `const` und `var` in JavaScript?",
    options: [
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
    difficulty: "medium",
    category: ["JavaScript"],
    explanation:
      "`let` und `const` haben Blockscope, `var` hat Funktionsscope. `const` ermöglicht keine Wertänderung, während `let` und `var` verändert werden können.",
  },

  // React Router
  {
    id: uuidv4(),
    text: "Wie wird der React Router für Navigation innerhalb einer React-App verwendet?",
    options: [
      { text: "`<Router>` und `<Route>`", isCorrect: true },
      { text: "`<Navigate>` und `<Route>`", isCorrect: false },
      { text: "`<Switch>` und `<Route>`", isCorrect: false },
      { text: "`<Link>` und `<Route>`", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["React", "Router"],
    explanation:
      "Der React Router verwendet `<Router>` und `<Route>`, um Navigation und Routen zu definieren.",
  },
  {
    id: uuidv4(),
    text: "Welche Funktion wird verwendet, um die aktuelle Route mit React Router zu navigieren?",
    options: [
      { text: "`useNavigate`", isCorrect: true },
      { text: "`useHistory`", isCorrect: false },
      { text: "`useLocation`", isCorrect: false },
      { text: "`useRouteMatch`", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["React", "Router"],
    explanation:
      "`useNavigate` wird verwendet, um die Navigation zu steuern, wenn der Zustand oder die Route geändert wird.",
  },

  // BEM
  {
    id: uuidv4(),
    text: "Was ist ein Beispiel für eine BEM-konforme CSS-Klasse?",
    options: [
      { text: "block__element--modifier", isCorrect: true },
      { text: "block-element--modifier", isCorrect: false },
      { text: "block-element_modifier", isCorrect: false },
      { text: "block__element_modifier", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["CSS", "BEM"],
    explanation:
      "In BEM (Block-Element-Modifier) wird eine Klasse mit Block, Element und Modifier strukturiert, z.B. `block__element--modifier`.",
  },
  {
    id: uuidv4(),
    text: "In BEM, was beschreibt der Modifier?",
    options: [
      { text: "Eine Modifikation des Blocks oder Elements", isCorrect: true },
      { text: "Die Grundlage des Blocks", isCorrect: false },
      { text: "Die Definition des Elements", isCorrect: false },
      { text: "Die Vererbung von CSS-Regeln", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["CSS", "BEM"],
    explanation:
      "Der Modifier beschreibt eine modifizierte Version eines Blocks oder Elements, z.B. eine Variation eines Buttons.",
  },

  // React Advanced Questions

  {
    id: uuidv4(),
    text: "Wie zentriert man ein Element in CSS?",
    options: [
      {
        text: "Mit `display: flex` und `justify-content: center; align-items: center;`",
        isCorrect: true,
      },
      { text: "Mit `margin: auto`", isCorrect: true },
      { text: "Mit `float: center`", isCorrect: false },
      { text: "Mit `vertical-align: center`", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["CSS"],
    explanation:
      "Zentrieren kann mit Flexbox, Grid oder `margin: auto` erfolgen. `float` oder `vertical-align` sind nicht geeignet.",
  },

  {
    id: uuidv4(),
    text: "Wie definiert man eine generische Funktion in TypeScript?",
    options: [
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
    difficulty: "hard",
    category: ["TypeScript"],
    explanation:
      "Generische Funktionen verwenden `<T>` zur Definition und können unterschiedliche Typen verarbeiten, z.B. `function func<T>(param: T): T {}`.",
  },

  {
    id: uuidv4(),
    text: "Welche Komponente wird verwendet, um eine React-Anwendung mit der URL zu synchronisieren?",
    options: [
      { text: "<BrowserRouter>", isCorrect: true },
      { text: "<NavLink>", isCorrect: false },
      { text: "<Route>", isCorrect: false },
      { text: "<Link>", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["React", "Router"],
    explanation:
      "<BrowserRouter> ist die Basis-Komponente, die React-Router verwendet, um die URL und den Anwendungsstatus zu synchronisieren.",
  },
  {
    id: uuidv4(),
    text: "Was ist ein Vorteil von Zustand gegenüber React Context?",
    options: [
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
    difficulty: "medium",
    category: ["React", "State Management"],
    explanation:
      "Zustand ist leichter einzurichten und hat weniger Boilerplate im Vergleich zu React Context, was ihn für einfache Szenarien effizienter macht.",
  },
  {
    id: uuidv4(),
    text: "Welcher Hook wird in React Query verwendet, um Daten zu aktualisieren oder zu schreiben?",
    options: [
      { text: "useMutation", isCorrect: true },
      { text: "useQueryClient", isCorrect: false },
      { text: "useFetch", isCorrect: false },
      { text: "useQuery", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["React", "Data Fetching"],
    explanation:
      "useMutation wird in React Query verwendet, um Daten zu schreiben oder zu aktualisieren, z. B. bei POST-, PUT- oder DELETE-Anfragen.",
  },

  {
    id: uuidv4(),
    text: "Was ist ein typischer Anwendungsfall für Refs in React?",
    options: [
      {
        text: "Zustand speichern, der ein Re-Render auslöst",
        isCorrect: false,
      },
      { text: "Ein DOM-Element direkt referenzieren", isCorrect: true },
      { text: "Komplexe Animationen im State speichern", isCorrect: false },
      { text: "Ein neues Re-Render erzwingen", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["React", "Refs"],
    explanation:
      "Refs werden verwendet, um direkt auf DOM-Elemente zuzugreifen, ohne den Component-State zu beeinflussen.",
  },

  {
    id: uuidv4(),
    text: "Was teilen Custom Hooks zwischen Komponenten?",
    options: [
      { text: "Den Zustand der Komponente", isCorrect: false },
      { text: "Props der Komponente", isCorrect: false },
      { text: "Reaktive Werte werden überschrieben", isCorrect: false },
      { text: "Die zustandsbehaftete Logik", isCorrect: true },
    ],
    difficulty: "medium",
    category: ["React", "Custom Hooks"],
    explanation:
      "Custom Hooks teilen zustandsbehaftete Logik, nicht jedoch den Zustand oder die Props zwischen Komponenten.",
  },

  {
    id: uuidv4(),
    text: "Was ist der Hauptzweck eines Providers im React Context-System?",
    options: [
      { text: "Um State zwischen Komponenten zu teilen", isCorrect: true },
      { text: "Um den Context zu initialisieren", isCorrect: false },
      { text: "Um die App schneller zu machen", isCorrect: false },
      { text: "Um eine neue Komponente zu rendern", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["React", "Context"],
    explanation:
      "Ein Provider teilt den Context-Wert an alle untergeordneten Komponenten, die den Context konsumieren.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Hauptvorteil von useContext im Vergleich zu Props?",
    options: [
      {
        text: "Vermeidet das explizite Weiterreichen von Daten durch Props",
        isCorrect: true,
      },
      { text: "Erhöht die Performance automatisch", isCorrect: false },
      { text: "Erlaubt das direkte Rendern von Komponenten", isCorrect: false },
      { text: "Ersetzt alle anderen Hooks", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["React", "Context"],
    explanation:
      "useContext erspart das Weiterreichen von Props über mehrere Ebenen und erleichtert die Handhabung globaler Zustände.",
  },
];

export default [
  ...cssQuestions,
  ...dockerBuildingQuestions,
  ...dockerComposeQuestions,
  ...dockerFileQuestions,
  ...dockerLayerQuestions,
  ...dockerMultistageQuestions,
  ...dockerQuestions,
  ...dockerVolumeQuestions,
  ...javaScriptQuestions,
  ...reactHookQuestions,
  ...reactQuestions,
  ...terminalQuestions,
  ...typeScriptQuestions,
  ...questionsData,
];
