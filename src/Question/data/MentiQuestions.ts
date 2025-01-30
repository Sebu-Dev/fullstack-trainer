import { v4 as uuidv4 } from "uuid";
import type { Question } from "../type/QuestionType";

export const mentiQuiz: Question[] = [
  {
    id: uuidv4(),
    text: "Was passiert, wenn eine Komponente in React `setState` mit einem neuen Zustand aufruft, der denselben Wert wie der aktuelle Zustand hat?",
    options: [
      {
        text: "React ignoriert die Aktualisierung, da der Zustand nicht geändert wurde und rendert die Komponente nicht neu",
        isCorrect: true,
      },
      {
        text: "Die Komponente wird dennoch neu gerendert, um sicherzustellen, dass der Zustand immer aktualisiert wird",
        isCorrect: false,
      },
      {
        text: "Der Zustand wird sofort aktualisiert und die neue Komponente wird gerendert",
        isCorrect: false,
      },
      {
        text: "Es führt zu einem Fehler, da der Zustand immer einzigartig sein muss",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React"],
    explanation:
      "Wenn der neue Zustand identisch mit dem alten Zustand ist, wird das Re-Rendering von React vermieden, da keine Änderung vorliegt.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zu `React.Fragment` sind korrekt?",
    options: [
      {
        text: "`React.Fragment` ermöglicht das Gruppieren von Komponenten ohne zusätzliche DOM-Elemente zu erzeugen",
        isCorrect: true,
      },
      {
        text: "`React.Fragment` wird nur für Listen von Komponenten benötigt",
        isCorrect: false,
      },
      {
        text: "`React.Fragment` kann nicht mit Schlüssel-Attributen (`key`) verwendet werden",
        isCorrect: false,
      },
      {
        text: "`React.Fragment` hat den gleichen Zweck wie ein `div`-Tag, aber ohne Styling",
        isCorrect: true,
      },
    ],
    difficulty: "medium",
    category: ["React"],
    explanation:
      "`React.Fragment` wird verwendet, um mehrere Elemente zu gruppieren, ohne zusätzliche DOM-Elemente hinzuzufügen. Es kann auch mit dem `key`-Attribut verwendet werden, wenn erforderlich.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen über das Lifecycle von React-Komponenten sind korrekt?",
    options: [
      {
        text: "Die `componentDidMount`-Methode wird nach dem ersten Rendern einer Klasse ausgeführt",
        isCorrect: true,
      },
      {
        text: "Die `componentDidUpdate`-Methode wird nur bei Änderungen des Props ausgeführt",
        isCorrect: false,
      },
      {
        text: "Die `componentWillUnmount`-Methode wird aufgerufen, bevor eine Komponente vom DOM entfernt wird",
        isCorrect: true,
      },
      {
        text: "Lifecycle-Methoden sind nur in Funktionskomponenten verfügbar",
        isCorrect: false,
      },
    ],
    difficulty: "hard",
    category: ["React"],
    explanation:
      "`componentDidMount` wird nach dem ersten Rendern einer Komponente ausgeführt, und `componentWillUnmount` wird ausgeführt, bevor die Komponente entfernt wird. Funktionskomponenten haben keinen direkten Zugriff auf diese Methoden, aber ähnliche Funktionen können mit `useEffect` erreicht werden.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Zweck von `React.memo` in React?",
    options: [
      {
        text: "`React.memo` optimiert die Performance, indem es die Komponente nur dann neu rendert, wenn sich die Props ändern",
        isCorrect: true,
      },
      {
        text: "`React.memo` verhindert das Re-Rendering einer Komponente, wenn der Zustand sich nicht ändert",
        isCorrect: false,
      },
      {
        text: "`React.memo` wird verwendet, um die Initialisierung der Komponente zu verhindern",
        isCorrect: false,
      },
      {
        text: "`React.memo` ist nur für Klassenkomponenten gedacht",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React"],
    explanation:
      "`React.memo` ist ein High Order Component (HOC), das dafür sorgt, dass eine Komponente nur dann neu gerendert wird, wenn sich ihre Props ändern, wodurch unnötige Renderings vermieden werden.",
  },
  {
    id: uuidv4(),
    text: "Wie kannst du in React den Wert eines Formularfeldes wie eines `input` steuern?",
    options: [
      {
        text: "Indem man den `value`-Prop des Formularfeldes mit dem Zustand der Komponente bindet",
        isCorrect: true,
      },
      {
        text: "Indem man den `checked`-Prop für alle Formularfelder nutzt",
        isCorrect: false,
      },
      {
        text: "Indem man das `input`-Feld jedes Mal manuell ändert, wenn der Zustand sich ändert",
        isCorrect: false,
      },
      {
        text: "Indem man `useEffect` verwendet, um den Wert des `input`-Feldes zu setzen",
        isCorrect: false,
      },
    ],
    difficulty: "easy",
    category: ["React"],
    explanation:
      "In React wird der Wert eines Formularfeldes durch den `value`-Prop gesteuert, der mit dem Zustand der Komponente verknüpft ist. Dies wird als kontrollierte Komponente bezeichnet.",
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
    category: ["React", "Hook"],
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
    category: ["React", "Hook"],
    explanation:
      "`useContext` wird verwendet, um Daten zwischen Komponenten zu teilen, ohne Props weiterzugeben, und `useReducer` hilft bei der Verwaltung komplexerer Zustände, die mehrere Aktionen erfordern.",
  },
  {
    id: uuidv4(),
    text: "Wie verhinderst du in React, dass eine Komponente unnötig neu gerendert wird?",
    options: [
      {
        text: "Verwende `shouldComponentUpdate` in Klassenkomponenten oder `React.memo` in Funktionskomponenten",
        isCorrect: true,
      },
      {
        text: "Verwende immer den `key`-Prop in allen Komponenten",
        isCorrect: false,
      },
      {
        text: "Verwende `useEffect`, um die Komponente zu überwachen und nur bei Bedarf neu zu rendern",
        isCorrect: false,
      },
      {
        text: "Vermeide das Setzen von Zustand innerhalb von Komponenten",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React"],
    explanation:
      "`shouldComponentUpdate` und `React.memo` helfen dabei, unnötige Renderings zu verhindern, indem sie sicherstellen, dass Komponenten nur neu gerendert werden, wenn sich die Props oder der Zustand ändern.",
  },
];
