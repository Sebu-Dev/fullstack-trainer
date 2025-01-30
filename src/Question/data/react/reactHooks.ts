import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

export const reactHookQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen über Hooks in React sind korrekt?",
    options: [
      {
        text: "Der `useEffect` Hook wird für die Seiteneffekte und API-Aufrufe verwendet",
        isCorrect: true,
      },
      {
        text: "`useRef` kann verwendet werden, um DOM-Elemente direkt zu referenzieren",
        isCorrect: true,
      },
      {
        text: "`useState` ersetzt den globalen Zustand in einer Anwendung",
        isCorrect: false,
      },

      {
        text: "`useMemo` wird verwendet, um Re-Rendering zu vermeiden, indem es berechnete Werte speichert",
        isCorrect: true,
      },
    ],
    difficulty: "medium",
    category: ["React", "React Hooks"],
    explanation:
      "`useEffect` wird für Seiteneffekte wie API-Aufrufe verwendet, `useMemo` speichert berechnete Werte, und `useRef` hilft bei der direkten Referenzierung von DOM-Elementen.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zum `useContext` Hook in React sind korrekt?",
    options: [
      {
        text: "`useContext` wird verwendet, um globale Zustände in einer React-Anwendung zu verwalten",
        isCorrect: true,
      },
      {
        text: "`useContext` ersetzt die Notwendigkeit, Props zu verwenden",
        isCorrect: true,
      },
      {
        text: "`useContext` kann nicht in Funktionskomponenten verwendet werden",
        isCorrect: false,
      },
      {
        text: "`useContext` ist nur für die Kommunikation zwischen Eltern- und Kindkomponenten geeignet",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React", "React Hooks"],
    explanation:
      "`useContext` ermöglicht es, Werte aus einem Context-Objekt in Funktionskomponenten zu beziehen, wodurch das Prop-Drilling vermieden wird.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Zweck von `useReducer` in React und wann sollte es verwendet werden?",
    options: [
      {
        text: "`useReducer` sollte verwendet werden, wenn der Zustand eine komplexe Logik hat oder von vielen Komponenten gleichzeitig bearbeitet wird",
        isCorrect: true,
      },
      {
        text: "`useReducer` ist eine vereinfachte Alternative zu `useState` und wird immer dann empfohlen, wenn der Zustand komplex ist",
        isCorrect: false,
      },
      {
        text: "`useReducer` wird verwendet, um eine Komponente mit einem externen Store zu verbinden",
        isCorrect: false,
      },
      {
        text: "`useReducer` ist nur für die Verwaltung von Listen zuständig, nicht für komplexe Objekte",
        isCorrect: false,
      },
    ],
    difficulty: "hard",
    category: ["React", "React Hooks"],
    explanation:
      "`useReducer` ist besonders nützlich für komplexe Zustandslogik, bei der mehrere Sub-Änderungen am Zustand erforderlich sind, und wird als Alternative zu `useState` verwendet, wenn der Zustand mehrere Werte umfasst oder von mehreren Aktionen betroffen ist.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zum `useEffect` Hook sind korrekt?",
    options: [
      {
        text: "`useEffect` wird nach dem ersten Rendern der Komponente ausgeführt und bei jeder State-Änderung, wenn keine Abhängigkeiten angegeben sind",
        isCorrect: true,
      },
      {
        text: "`useEffect` wird nur beim ersten Rendern ausgeführt und danach nicht mehr",
        isCorrect: false,
      },
      {
        text: "`useEffect` kann nur für API-Aufrufe und nicht für andere Seiteneffekte verwendet werden",
        isCorrect: false,
      },
      {
        text: "`useEffect` wird nicht benötigt, wenn `useState` verwendet wird",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React", "React Hooks"],
    explanation:
      "`useEffect` wird nach dem ersten Rendern ausgeführt und kann bei jeder State- oder Props-Änderung erneut ausgeführt werden, abhängig von den angegebenen Abhängigkeiten.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zu React's `useEffect` Hook sind korrekt, wenn eine Abhängigkeitsliste angegeben wird?",
    options: [
      {
        text: "Die Funktion wird nur ausgeführt, wenn eine der angegebenen Abhängigkeiten sich geändert hat",
        isCorrect: true,
      },
      {
        text: "Die Funktion wird bei jedem Rendern der Komponente ausgeführt, unabhängig von den Abhängigkeiten",
        isCorrect: false,
      },
      {
        text: "Die Funktion wird nur einmal beim ersten Rendern ausgeführt, unabhängig von den Abhängigkeiten",
        isCorrect: false,
      },
      {
        text: "Die Funktion wird nie ausgeführt, wenn eine Abhängigkeitsliste angegeben ist",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React", "React Hooks"],
    explanation:
      "Wenn eine Abhängigkeitsliste im `useEffect` Hook angegeben wird, wird die Funktion nur ausgeführt, wenn sich eine der Abhängigkeiten ändert.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Hauptzweck des `useLayoutEffect` Hooks in React?",
    options: [
      {
        text: "Es wird verwendet, um die DOM-Manipulation zu verzögern, bis das Layout der Seite vollständig gerendert ist",
        isCorrect: true,
      },
      {
        text: "Es wird verwendet, um API-Aufrufe zu tätigen",
        isCorrect: false,
      },
      {
        text: "Es hat denselben Effekt wie `useEffect`, aber es wird synchron ausgeführt",
        isCorrect: true,
      },
      {
        text: "Es wird nur in der Entwicklungsumgebung ausgeführt",
        isCorrect: false,
      },
    ],
    difficulty: "hard",
    category: ["React", "React Hooks"],
    explanation:
      "`useLayoutEffect` wird synchron nach dem Rendern des DOMs ausgeführt und vor der Anzeige der Seite auf dem Bildschirm, was es nützlich für Layout-Anpassungen macht.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Unterschied zwischen `useEffect` und `useLayoutEffect` in React?",
    options: [
      {
        text: "`useEffect` wird nach dem Rendern ausgeführt, während `useLayoutEffect` vor dem Rendern des DOMs ausgeführt wird",
        isCorrect: true,
      },
      {
        text: "`useEffect` ist nur für API-Aufrufe gedacht, `useLayoutEffect` für DOM-Manipulationen",
        isCorrect: false,
      },
      {
        text: "`useEffect` ist synchron, `useLayoutEffect` asynchron",
        isCorrect: false,
      },
      {
        text: "`useEffect` wird nur in Funktionskomponenten verwendet, `useLayoutEffect` nur in Klassenkomponenten",
        isCorrect: false,
      },
    ],
    difficulty: "hard",
    category: ["React", "React Hooks"],
    explanation:
      "`useEffect` wird nach dem Rendern ausgeführt, während `useLayoutEffect` synchron ausgeführt wird, bevor der DOM aktualisiert wird, was für Layout-Manipulationen nützlich ist.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen über `useContext` und `useReducer` sind korrekt?",
    options: [
      {
        text: "`useContext` dient dazu, Daten an tief verschachtelte Komponenten zu übergeben, während `useReducer` komplexe Zustandsänderungen innerhalb einer Komponente behandelt",
        isCorrect: true,
      },
      {
        text: "`useReducer` ersetzt `useState` immer, wenn der Zustand komplexer wird",
        isCorrect: false,
      },
      {
        text: "`useContext` kann nur in Funktionskomponenten und nicht in Klassenkomponenten verwendet werden",
        isCorrect: false,
      },
      {
        text: "`useReducer` wird hauptsächlich für die Verwaltung von Formularen verwendet",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React", "React Hooks"],
    explanation:
      "`useContext` wird verwendet, um Daten zwischen Komponenten zu teilen, ohne Props weiterzugeben, und `useReducer` hilft bei der Verwaltung komplexerer Zustände, die mehrere Aktionen erfordern.",
  },
  {
    id: uuidv4(),
    text: "Was bewirkt useMemo in React?",
    options: [
      { text: "Memoisiert teure Berechnungen", isCorrect: true },
      { text: "Optimiert Performance bei Renderings", isCorrect: true },
      { text: "Verhindert Neurendering der Komponente", isCorrect: false },
      { text: "Speichert Funktionen zwischen", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["React", "React Hooks"],
    explanation: "useMemo reduziert teure Neuberechnungen zwischen Renders.",
  },
  {
    id: uuidv4(),
    text: "Wann ist es sinnvoll, useReducer anstelle von useState zu verwenden?",
    options: [
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
    difficulty: "medium",
    category: ["React", "React Hooks"],
  },
  {
    id: uuidv4(),
    text: "Wie nutzt man useState korrekt mit mehreren unabhängigen Werten?",
    options: [
      { text: "Separate useState-Hooks verwenden", isCorrect: true },
      { text: "Werte in einem Objekt bündeln", isCorrect: false },
      { text: "Ein useState für alle Werte verwenden", isCorrect: false },
      { text: "State direkt mutieren", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["React", "React Hooks"],
  },
  {
    id: uuidv4(),
    text: "Wann ist der Einsatz von useMemo sinnvoll?",
    options: [
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
    difficulty: "medium",
    category: ["React", "React Hooks"],
    explanation:
      "useMemo optimiert teure Berechnungen, indem sie nur neu ausgeführt werden, wenn sich ihre Abhängigkeiten ändern.",
  },
  {
    id: uuidv4(),
    text: "Wofür wird useCallback primär verwendet?",
    options: [
      { text: "Um Werte zu memoisieren", isCorrect: false },
      { text: "Um Funktionen zu memoisieren", isCorrect: true },
      { text: "Um Arrays effizient zu filtern", isCorrect: false },
      { text: "Um DOM-Elemente zu referenzieren", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["React", "React Hooks"],
    explanation:
      "useCallback wird genutzt, um Funktionen zu memoisieren und unnötige Neudeklarationen bei jedem Render zu vermeiden.",
  },
  {
    id: uuidv4(),
    text: "Was sind mögliche Probleme bei der Verwendung von `useEffect`?",
    options: [
      { text: "Unbeabsichtigte Endlosschleifen", isCorrect: true },
      {
        text: "Speicherlecks bei unbereinigten Subscriptions",
        isCorrect: true,
      },
      { text: "Fehlende Rückgabewerte", isCorrect: false },
      { text: "Unzureichende Hook-Regeln", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["React", "React Hooks"],
    explanation:
      "`useEffect` kann Probleme wie Endlosschleifen und Speicherlecks verursachen, wenn Abhängigkeiten nicht korrekt angegeben oder Subscriptions nicht bereinigt werden.",
  },
  {
    id: uuidv4(),
    text: "Wann verwendet man `useReducer` anstelle von `useState`?",
    options: [
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
    difficulty: "hard",
    category: ["React", "React Hooks"],
    explanation:
      "`useReducer` eignet sich besser für komplexe Logiken, während `useState` bei einfachen State-Änderungen vorzuziehen ist.",
  },
  {
    id: uuidv4(),
    text: "Wie wird der `useState` Hook in React verwendet?",
    options: [
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
    difficulty: "easy",
    category: ["React", "React Hooks"],
    explanation:
      "`useState` ist ein Hook, um den Zustand in einer Funktionskomponente zu verwalten.",
  },
  {
    id: uuidv4(),
    text: "Was bewirkt ein leeres Abhängigkeitsarray ([]) im useEffect-Hook?",
    options: [
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
    difficulty: "easy",
    category: ["React", "React Hooks"],
    explanation:
      "Ein leeres Abhängigkeitsarray bewirkt, dass der Effekt nur einmal beim Initial-Render ausgeführt wird.",
  },
  {
    id: uuidv4(),
    text: "Wie nutzt man useState korrekt mit mehreren unabhängigen Werten?",
    options: [
      { text: "Separate useState-Hooks verwenden", isCorrect: true },
      { text: "Werte in einem Objekt bündeln", isCorrect: false },
      { text: "Ein useState für alle Werte verwenden", isCorrect: false },
      { text: "State direkt mutieren", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["React", "React Hooks"],
    explanation:
      "Für unabhängige Werte sollten separate useState-Hooks verwendet werden. Dadurch bleibt der Code modular und leicht verständlich.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Hauptzweck von useImperativeHandle in React?",
    options: [
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
    difficulty: "hard",
    category: ["React", "React Hooks"],
    explanation:
      "useImperativeHandle erlaubt es, eine benutzerdefinierte API für ein ref-Objekt zu definieren, das vom Parent genutzt wird, ohne das gesamte DOM freizulegen.",
  },
  {
    id: uuidv4(),
    text: "Wann ist es sinnvoll, useReducer anstelle von useState zu verwenden?",
    options: [
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
    difficulty: "medium",
    category: ["React", "React Hooks"],
    explanation:
      "useReducer eignet sich besser für komplexe Zustandslogiken, da es Aktionen und eine zentrale Reducer-Funktion verwendet, um den Zustand konsistent zu aktualisieren.",
  },
  {
    id: uuidv4(),
    text: "Was bewirkt ein leeres Abhängigkeitsarray ([]) im useEffect-Hook?",
    options: [
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
    difficulty: "easy",
    category: ["React"],
  },
];
