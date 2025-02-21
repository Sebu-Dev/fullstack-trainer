import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

export const reactHookQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen über Hooks in React sind korrekt?",
    options: [
      {
        text: "Der `useEffect` Hook wird für die Seiteneffekte und API-Aufrufe verwendet",
        correct: true,
      },
      {
        text: "`useRef` kann verwendet werden, um DOM-Elemente direkt zu referenzieren",
        correct: true,
      },
      {
        text: "`useState` ersetzt den globalen Zustand in einer Anwendung",
        correct: false,
      },

      {
        text: "`useMemo` wird verwendet, um Re-Rendering zu vermeiden, indem es berechnete Werte speichert",
        correct: true,
      },
    ],
    difficulty: "medium",
    categories: ["React", "React Hooks"],
    explanation:
      "`useEffect` wird für Seiteneffekte wie API-Aufrufe verwendet, `useMemo` speichert berechnete Werte, und `useRef` hilft bei der direkten Referenzierung von DOM-Elementen.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zum `useContext` Hook in React sind korrekt?",
    options: [
      {
        text: "`useContext` wird verwendet, um globale Zustände in einer React-Anwendung zu verwalten",
        correct: true,
      },
      {
        text: "`useContext` ersetzt die Notwendigkeit, Props zu verwenden",
        correct: true,
      },
      {
        text: "`useContext` kann nicht in Funktionskomponenten verwendet werden",
        correct: false,
      },
      {
        text: "`useContext` ist nur für die Kommunikation zwischen Eltern- und Kindkomponenten geeignet",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React", "React Hooks"],
    explanation:
      "`useContext` ermöglicht es, Werte aus einem Context-Objekt in Funktionskomponenten zu beziehen, wodurch das Prop-Drilling vermieden wird.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Zweck von `useReducer` in React und wann sollte es verwendet werden?",
    options: [
      {
        text: "`useReducer` sollte verwendet werden, wenn der Zustand eine komplexe Logik hat oder von vielen Komponenten gleichzeitig bearbeitet wird",
        correct: true,
      },
      {
        text: "`useReducer` ist eine vereinfachte Alternative zu `useState` und wird immer dann empfohlen, wenn der Zustand komplex ist",
        correct: false,
      },
      {
        text: "`useReducer` wird verwendet, um eine Komponente mit einem externen Store zu verbinden",
        correct: false,
      },
      {
        text: "`useReducer` ist nur für die Verwaltung von Listen zuständig, nicht für komplexe Objekte",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["React", "React Hooks"],
    explanation:
      "`useReducer` ist besonders nützlich für komplexe Zustandslogik, bei der mehrere Sub-Änderungen am Zustand erforderlich sind, und wird als Alternative zu `useState` verwendet, wenn der Zustand mehrere Werte umfasst oder von mehreren Aktionen betroffen ist.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zum `useEffect` Hook sind korrekt?",
    options: [
      {
        text: "`useEffect` wird nach dem ersten Rendern der Komponente ausgeführt und bei jeder State-Änderung, wenn keine Abhängigkeiten angegeben sind",
        correct: true,
      },
      {
        text: "`useEffect` wird nur beim ersten Rendern ausgeführt und danach nicht mehr",
        correct: false,
      },
      {
        text: "`useEffect` kann nur für API-Aufrufe und nicht für andere Seiteneffekte verwendet werden",
        correct: false,
      },
      {
        text: "`useEffect` wird nicht benötigt, wenn `useState` verwendet wird",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React", "React Hooks"],
    explanation:
      "`useEffect` wird nach dem ersten Rendern ausgeführt und kann bei jeder State- oder Props-Änderung erneut ausgeführt werden, abhängig von den angegebenen Abhängigkeiten.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zu React's `useEffect` Hook sind korrekt, wenn eine Abhängigkeitsliste angegeben wird?",
    options: [
      {
        text: "Die Funktion wird nur ausgeführt, wenn eine der angegebenen Abhängigkeiten sich geändert hat",
        correct: true,
      },
      {
        text: "Die Funktion wird bei jedem Rendern der Komponente ausgeführt, unabhängig von den Abhängigkeiten",
        correct: false,
      },
      {
        text: "Die Funktion wird nur einmal beim ersten Rendern ausgeführt, unabhängig von den Abhängigkeiten",
        correct: false,
      },
      {
        text: "Die Funktion wird nie ausgeführt, wenn eine Abhängigkeitsliste angegeben ist",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React", "React Hooks"],
    explanation:
      "Wenn eine Abhängigkeitsliste im `useEffect` Hook angegeben wird, wird die Funktion nur ausgeführt, wenn sich eine der Abhängigkeiten ändert.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Hauptzweck des `useLayoutEffect` Hooks in React?",
    options: [
      {
        text: "Es wird verwendet, um die DOM-Manipulation zu verzögern, bis das Layout der Seite vollständig gerendert ist",
        correct: true,
      },
      {
        text: "Es wird verwendet, um API-Aufrufe zu tätigen",
        correct: false,
      },
      {
        text: "Es hat denselben Effekt wie `useEffect`, aber es wird synchron ausgeführt",
        correct: true,
      },
      {
        text: "Es wird nur in der Entwicklungsumgebung ausgeführt",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["React", "React Hooks"],
    explanation:
      "`useLayoutEffect` wird synchron nach dem Rendern des DOMs ausgeführt und vor der Anzeige der Seite auf dem Bildschirm, was es nützlich für Layout-Anpassungen macht.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Unterschied zwischen `useEffect` und `useLayoutEffect` in React?",
    options: [
      {
        text: "`useEffect` wird nach dem Rendern ausgeführt, während `useLayoutEffect` vor dem Rendern des DOMs ausgeführt wird",
        correct: true,
      },
      {
        text: "`useEffect` ist nur für API-Aufrufe gedacht, `useLayoutEffect` für DOM-Manipulationen",
        correct: false,
      },
      {
        text: "`useEffect` ist synchron, `useLayoutEffect` asynchron",
        correct: false,
      },
      {
        text: "`useEffect` wird nur in Funktionskomponenten verwendet, `useLayoutEffect` nur in Klassenkomponenten",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["React", "React Hooks"],
    explanation:
      "`useEffect` wird nach dem Rendern ausgeführt, während `useLayoutEffect` synchron ausgeführt wird, bevor der DOM aktualisiert wird, was für Layout-Manipulationen nützlich ist.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen über `useContext` und `useReducer` sind korrekt?",
    options: [
      {
        text: "`useContext` dient dazu, Daten an tief verschachtelte Komponenten zu übergeben, während `useReducer` komplexe Zustandsänderungen innerhalb einer Komponente behandelt",
        correct: true,
      },
      {
        text: "`useReducer` ersetzt `useState` immer, wenn der Zustand komplexer wird",
        correct: false,
      },
      {
        text: "`useContext` kann nur in Funktionskomponenten und nicht in Klassenkomponenten verwendet werden",
        correct: false,
      },
      {
        text: "`useReducer` wird hauptsächlich für die Verwaltung von Formularen verwendet",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React", "React Hooks"],
    explanation:
      "`useContext` wird verwendet, um Daten zwischen Komponenten zu teilen, ohne Props weiterzugeben, und `useReducer` hilft bei der Verwaltung komplexerer Zustände, die mehrere Aktionen erfordern.",
  },
  {
    id: uuidv4(),
    text: "Was bewirkt useMemo in React?",
    options: [
      { text: "Memoisiert teure Berechnungen", correct: true },
      { text: "Optimiert Performance bei Renderings", correct: true },
      { text: "Verhindert Neurendering der Komponente", correct: false },
      { text: "Speichert Funktionen zwischen", correct: false },
    ],
    difficulty: "hard",
    categories: ["React", "React Hooks"],
    explanation: "useMemo reduziert teure Neuberechnungen zwischen Renders.",
  },

 
  {
    id: uuidv4(),
    text: "Wann ist der Einsatz von useMemo sinnvoll?",
    options: [
      {
        text: "Für teure Berechnungen, die Abhängigkeiten besitzen",
        correct: true,
      },
      {
        text: "Wenn eine Variable bei jedem Render neu erstellt wird",
        correct: false,
      },
      {
        text: "Für Variablen, die keine Abhängigkeiten haben",
        correct: false,
      },
      { text: "Für jede State-Änderung", correct: false },
    ],
    difficulty: "medium",
    categories: ["React", "React Hooks"],
    explanation:
      "useMemo optimiert teure Berechnungen, indem sie nur neu ausgeführt werden, wenn sich ihre Abhängigkeiten ändern.",
  },
  {
    id: uuidv4(),
    text: "Wofür wird useCallback primär verwendet?",
    options: [
      { text: "Um Werte zu memoisieren", correct: false },
      { text: "Um Funktionen zu memoisieren", correct: true },
      { text: "Um Arrays effizient zu filtern", correct: false },
      { text: "Um DOM-Elemente zu referenzieren", correct: false },
    ],
    difficulty: "medium",
    categories: ["React", "React Hooks"],
    explanation:
      "useCallback wird genutzt, um Funktionen zu memoisieren und unnötige Neudeklarationen bei jedem Render zu vermeiden.",
  },
  {
    id: uuidv4(),
    text: "Was sind mögliche Probleme bei der Verwendung von `useEffect`?",
    options: [
      { text: "Unbeabsichtigte Endlosschleifen", correct: true },
      {
        text: "Speicherlecks bei unbereinigten Subscriptions",
        correct: true,
      },
      { text: "Fehlende Rückgabewerte", correct: false },
      { text: "Unzureichende Hook-Regeln", correct: false },
    ],
    difficulty: "hard",
    categories: ["React", "React Hooks"],
    explanation:
      "`useEffect` kann Probleme wie Endlosschleifen und Speicherlecks verursachen, wenn Abhängigkeiten nicht korrekt angegeben oder Subscriptions nicht bereinigt werden.",
  },
  {
    id: uuidv4(),
    text: "Wann verwendet man `useReducer` anstelle von `useState`?",
    options: [
      {
        text: "Bei komplexen State-Logiken mit mehreren Zuständen",
        correct: true,
      },
      { text: "Wenn man nur einen Boolean togglen möchte", correct: false },
      { text: "Für einfache State-Updates", correct: false },
      {
        text: "Wenn man Zustand zwischen Komponenten teilen möchte",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["React", "React Hooks"],
    explanation:
      "`useReducer` eignet sich besser für komplexe Logiken, während `useState` bei einfachen State-Änderungen vorzuziehen ist.",
  },
  {
    id: uuidv4(),
    text: "Wie wird der `useState` Hook in React verwendet?",
    options: [
      {
        text: "const [state, setState] = useState(initialState);",
        correct: true,
      },
      {
        text: "const [state, setState] = useState(initialState, callback);",
        correct: false,
      },
      { text: "const setState = useState(initialState);", correct: false },
      {
        text: "const [state, setState] = useReducer(initialState);",
        correct: false,
      },
    ],
    difficulty: "easy",
    categories: ["React", "React Hooks"],
    explanation:
      "`useState` ist ein Hook, um den Zustand in einer Funktionskomponente zu verwalten.",
  },
  {
    id: uuidv4(),
    text: "Was bewirkt ein leeres Abhängigkeitsarray ([]) im useEffect-Hook?",
    options: [
      { text: "Der Effect wird bei jedem Render aufgerufen", correct: false },
      {
        text: "Der Effect wird nur beim ersten Render aufgerufen",
        correct: true,
      },
      {
        text: "Der Effect wird bei Änderungen des DOM ausgeführt",
        correct: false,
      },
      {
        text: "Der Effect wird nach jedem Benutzer-Event aufgerufen",
        correct: false,
      },
    ],
    difficulty: "easy",
    categories: ["React", "React Hooks"],
    explanation:
      "Ein leeres Abhängigkeitsarray bewirkt, dass der Effekt nur einmal beim Initial-Render ausgeführt wird.",
  },
  {
    id: uuidv4(),
    text: "Wie nutzt man useState korrekt mit mehreren unabhängigen Werten?",
    options: [
      { text: "Separate useState-Hooks verwenden", correct: true },
      { text: "Werte in einem Objekt bündeln", correct: false },
      { text: "Ein useState für alle Werte verwenden", correct: false },
      { text: "State direkt mutieren", correct: false },
    ],
    difficulty: "medium",
    categories: ["React", "React Hooks"],
    explanation:
      "Für unabhängige Werte sollten separate useState-Hooks verwendet werden. Dadurch bleibt der Code modular und leicht verständlich.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Hauptzweck von useImperativeHandle in React?",
    options: [
      {
        text: "Um selektive Methoden oder Eigenschaften an ein Parent zu exposen",
        correct: true,
      },
      { text: "Um ein Parent-Element direkt zu ändern", correct: false },
      {
        text: "Um eine gesamte DOM-Node an das Parent zu übergeben",
        correct: false,
      },
      {
        text: "Um Props von Child-Komponenten zu überschreiben",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["React", "React Hooks"],
    explanation:
      "useImperativeHandle erlaubt es, eine benutzerdefinierte API für ein ref-Objekt zu definieren, das vom Parent genutzt wird, ohne das gesamte DOM freizulegen.",
  },
  {
    id: uuidv4(),
    text: "Wann ist es sinnvoll, useReducer anstelle von useState zu verwenden?",
    options: [
      {
        text: "Bei komplexen Zustandslogiken mit mehreren Aktionen",
        correct: true,
      },
      { text: "Bei sehr einfachen Zustandsänderungen", correct: false },
      {
        text: "Um den State automatisch zwischen Komponenten zu teilen",
        correct: false,
      },
      {
        text: "Um die Performance ohne weitere Optimierungen zu verbessern",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React", "React Hooks"],
    explanation:
      "useReducer eignet sich besser für komplexe Zustandslogiken, da es Aktionen und eine zentrale Reducer-Funktion verwendet, um den Zustand konsistent zu aktualisieren.",
  },
 
];
