import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

const reactQuestions: Question[] = [
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
    category: ["React", "Hook"],
    explanation:
      "`useEffect` wird für Seiteneffekte wie API-Aufrufe verwendet, `useMemo` speichert berechnete Werte, und `useRef` hilft bei der direkten Referenzierung von DOM-Elementen.",
  },

  {
    id: uuidv4(),
    text: "Wann wird eine React-Komponente neu gerendert?",
    options: [
      { text: "Bei Änderung des eigenen State", isCorrect: true },
      { text: "Wenn die Parent-Komponente rendert", isCorrect: true },
      { text: "Bei Änderung von Context-Werten", isCorrect: true },
      { text: "Bei Änderungen im Window-Objekt", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["React Rendering"],
    explanation: "Rendering bei State/Prop-Änderungen oder Context-Updates.",
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
    category: ["React Hooks"],
    explanation: "useMemo reduziert teure Neuberechnungen zwischen Renders.",
  },

  {
    id: uuidv4(),
    text: "Was ist der Hauptunterschied zwischen Funktionskomponenten und Klassenkomponenten in React?",
    options: [
      {
        text: "Funktionskomponenten können keinen Zustand (State) haben, Klassenkomponenten schon",
        isCorrect: false,
      },
      {
        text: "Funktionskomponenten sind einfacher und benötigen weniger Boilerplate-Code als Klassenkomponenten",
        isCorrect: true,
      },
      {
        text: "In Funktionskomponenten können Hooks verwendet werden, in Klassenkomponenten nicht",
        isCorrect: false,
      },
      {
        text: "Funktionskomponenten sind immer schneller als Klassenkomponenten",
        isCorrect: false,
      },
    ],
    difficulty: "easy",
    category: ["React"],
    explanation:
      "Funktionskomponenten sind leichtergewichtig und benötigen weniger Boilerplate-Code. Sie können Hooks verwenden, um Funktionen wie State und Seiteneffekte zu verwalten. In Klassenkomponenten wird dies über Methoden wie `this.setState` und Lifecycle-Methoden erreicht.",
  },
  {
    id: uuidv4(),
    text: "Was passiert, wenn der State in einer React-Komponente mit `setState` geändert wird?",
    options: [
      {
        text: "React führt sofort ein Re-Rendering der Komponente aus",
        isCorrect: true,
      },
      {
        text: "Der State wird sofort aktualisiert, und der neue Wert ist sofort verfügbar",
        isCorrect: false,
      },
      {
        text: "React plant ein Re-Rendering der Komponente, aber es wird nicht sofort ausgeführt",
        isCorrect: true,
      },
      {
        text: "Der State wird aktualisiert, aber das Re-Rendering wird nur nach dem nächsten Benutzerinteraktion durchgeführt",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React", "State"],
    explanation:
      "`setState` in einer Klassenkomponente plant ein Re-Rendering. Der neue State wird nicht sofort verfügbar, sondern erst nach dem nächsten Renderzyklus.",
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
    category: ["React", "Hook"],
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
    category: ["React", "Hook"],
    explanation:
      "`useReducer` ist besonders nützlich für komplexe Zustandslogik, bei der mehrere Sub-Änderungen am Zustand erforderlich sind, und wird als Alternative zu `useState` verwendet, wenn der Zustand mehrere Werte umfasst oder von mehreren Aktionen betroffen ist.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen über das bedingte Rendering in React sind korrekt?",
    options: [
      {
        text: "Bedingtes Rendering kann mithilfe von `if`-Statements innerhalb der `render`-Methode durchgeführt werden",
        isCorrect: true,
      },
      {
        text: "Das bedingte Rendering wird nur mit `&&`-Operatoren durchgeführt und nicht mit `if`-Statements",
        isCorrect: false,
      },
      {
        text: "Bedingtes Rendering kann auch mit dem Ternary-Operator (?:) in JSX durchgeführt werden",
        isCorrect: true,
      },
      {
        text: "Bedingtes Rendering ist nur in Klassenkomponenten verfügbar, nicht in Funktionskomponenten",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React"],
    explanation:
      "Bedingtes Rendering kann mit `if`-Statements oder dem Ternary-Operator durchgeführt werden. Der `&&`-Operator ist eine gängige Möglichkeit, um bedingte Renderings in JSX durchzuführen.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Hauptvorteil von React's Virtual DOM?",
    options: [
      {
        text: "Es reduziert den Aufwand für das tatsächliche Manipulieren des DOMs und beschleunigt das Rendering",
        isCorrect: true,
      },
      {
        text: "Es speichert eine Kopie des gesamten DOMs, um den Zustand zu sichern",
        isCorrect: false,
      },
      {
        text: "Es ermöglicht eine tiefere Kontrolle über das Rendern von HTML-Elementen",
        isCorrect: false,
      },
      {
        text: "Es reduziert die Notwendigkeit für eventuelle API-Aufrufe",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React"],
    explanation:
      "Das Virtual DOM hilft, das tatsächliche DOM effizienter zu aktualisieren, indem nur die minimalen Änderungen vorgenommen werden, die nötig sind, anstatt das gesamte DOM neu zu rendern.",
  },
  {
    id: uuidv4(),
    text: "Was ist das Ziel von `React.memo()`?",
    options: [
      {
        text: "Es verhindert, dass eine Komponente erneut gerendert wird, wenn sich ihre Props nicht geändert haben",
        isCorrect: true,
      },
      {
        text: "Es speichert den Zustand einer Komponente, um Re-Renders zu verhindern",
        isCorrect: false,
      },
      {
        text: "Es erzwingt ein erneutes Rendering der Komponente bei jeder Änderung der Props",
        isCorrect: false,
      },
      {
        text: "Es optimiert das Laden von externen Bibliotheken in einer Komponente",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React", "Performance"],
    explanation:
      "`React.memo()` ist eine HOC (Higher-Order Component), die es ermöglicht, dass eine Komponente nur dann erneut gerendert wird, wenn sich ihre Props tatsächlich ändern, was Performance-Vorteile bringt.",
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
    category: ["React", "Hook"],
    explanation:
      "`useEffect` wird nach dem ersten Rendern ausgeführt und kann bei jeder State- oder Props-Änderung erneut ausgeführt werden, abhängig von den angegebenen Abhängigkeiten.",
  },
  {
    id: uuidv4(),
    text: "Wie kann man das Problem des Prop-Drillings in React vermeiden?",
    options: [
      {
        text: "Indem man den Zustand in einer zentralen Store-Verwaltung wie Redux speichert",
        isCorrect: true,
      },
      {
        text: "Indem man den Zustand direkt in den Kindkomponenten verwaltet",
        isCorrect: false,
      },
      {
        text: "Indem man Props in jeder Komponente explizit anpasst",
        isCorrect: false,
      },
      {
        text: "Indem man den `useEffect` Hook für jeden Zustand verwendet",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React"],
    explanation:
      "Prop-Drilling kann vermieden werden, indem ein globaler Zustand, beispielsweise mit Redux oder Context API, verwendet wird, um Daten ohne das Weitergeben durch mehrere Komponentenschichten zu verwalten.",
  },
  {
    id: uuidv4(),
    text: "Was passiert, wenn `key` in einer Liste von React-Komponenten fehlt?",
    options: [
      {
        text: "React kann nicht effizient erkennen, welche Elemente sich geändert haben, was zu Performance-Problemen führt",
        isCorrect: true,
      },
      {
        text: "Die Liste wird nicht korrekt gerendert und es treten Fehler auf",
        isCorrect: false,
      },
      {
        text: "React verwendet automatisch einen Standardwert für `key`, um die Liste korrekt darzustellen",
        isCorrect: false,
      },
      {
        text: "Die Reihenfolge der Elemente in der Liste wird nicht beachtet",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React"],
    explanation:
      "Der `key`-Prop hilft React, Änderungen in Listen effizient zu erkennen und so das Re-Rendering zu optimieren. Wenn er fehlt, wird die Performance negativ beeinflusst.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen über `useCallback` in React ist korrekt?",
    options: [
      {
        text: "`useCallback` speichert eine Funktion und gibt sie nur dann neu zurück, wenn sich ihre Abhängigkeiten ändern",
        isCorrect: true,
      },
      {
        text: "`useCallback` wird verwendet, um den Zustand in einer Funktion zu speichern",
        isCorrect: false,
      },
      {
        text: "`useCallback` zwingt eine Funktion, bei jedem Rendern neu zu erstellen",
        isCorrect: false,
      },
      {
        text: "`useCallback` ist nur für die Performance-Optimierung von Funktionskomponenten gedacht",
        isCorrect: false,
      },
    ],
    difficulty: "hard",
    category: ["React", "Performance"],
    explanation:
      "`useCallback` wird verwendet, um eine Funktion zu speichern und sicherzustellen, dass sie nur dann neu erstellt wird, wenn sich ihre Abhängigkeiten ändern, um unnötige Neuberechnungen zu vermeiden.",
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
    category: ["React", "Hook"],
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
    category: ["React", "Hook"],
    explanation:
      "`useLayoutEffect` wird synchron nach dem Rendern des DOMs ausgeführt und vor der Anzeige der Seite auf dem Bildschirm, was es nützlich für Layout-Anpassungen macht.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zu React Context API sind korrekt?",
    options: [
      {
        text: "React Context ist eine Methode, um globale Zustände für alle Komponenten in einer Anwendung bereitzustellen",
        isCorrect: true,
      },
      {
        text: "React Context kann nicht mit Hooks verwendet werden",
        isCorrect: false,
      },
      {
        text: "Context API ist nur für die Kommunikation zwischen Eltern- und Kindkomponenten geeignet",
        isCorrect: false,
      },
      {
        text: "Context API kann verwendet werden, um Props zu ersetzen, aber nicht um den Zustand global zu verwalten",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React"],
    explanation:
      "Die Context API ermöglicht es, Daten global zur Verfügung zu stellen, ohne sie explizit durch die Komponentenhierarchie weiterzugeben. Sie kann sowohl mit als auch ohne Hooks verwendet werden.",
  },
  {
    id: uuidv4(),
    text: "Was passiert, wenn ein `useState` Hook mit einem neuen Wert aufgerufen wird?",
    options: [
      {
        text: "React vergleicht den neuen Wert mit dem alten und rendert nur dann neu, wenn der Wert unterschiedlich ist",
        isCorrect: true,
      },
      {
        text: "Die Komponente wird sofort neu gerendert, auch wenn der Wert identisch bleibt",
        isCorrect: false,
      },
      {
        text: "Der Zustand wird synchron geändert und sofort an die Komponente weitergegeben",
        isCorrect: false,
      },
      {
        text: "Die Komponente wird nur beim ersten Rendern aktualisiert, nicht bei State-Änderungen",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React", "State"],
    explanation:
      "Wenn `useState` mit einem neuen Wert aufgerufen wird, vergleicht React den alten und den neuen Wert und rendert nur dann neu, wenn die Werte unterschiedlich sind.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen über den `key`-Prop in React sind korrekt?",
    options: [
      {
        text: "Der `key`-Prop hilft React, effizient zu erkennen, welche Elemente sich geändert haben, und verbessert so die Performance",
        isCorrect: true,
      },
      {
        text: "Der `key`-Prop ist nur für Listen von Elementen notwendig und nicht für einzelne Elemente",
        isCorrect: true,
      },
      {
        text: "Der `key`-Prop kann jedes beliebige Objekt oder Array sein",
        isCorrect: false,
      },
      {
        text: "Die Verwendung von `key` hat keinen Einfluss auf die Performance oder das Rendering",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React"],
    explanation:
      "Der `key`-Prop hilft React, Elemente in Listen zu identifizieren und das Rendering effizient zu gestalten, indem nur die tatsächlich geänderten Elemente neu gerendert werden.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zum React Router sind korrekt?",
    options: [
      {
        text: "React Router ermöglicht die Navigation zwischen verschiedenen Komponenten basierend auf der URL",
        isCorrect: true,
      },
      {
        text: "React Router kann nur mit Funktionskomponenten verwendet werden",
        isCorrect: false,
      },
      {
        text: "React Router rendert automatisch die aktuellste Komponente basierend auf der URL",
        isCorrect: true,
      },
      {
        text: "React Router ersetzt die Notwendigkeit von HTTP-Anfragen für die Navigation",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React", "Router"],
    explanation:
      "React Router ermöglicht es, basierend auf der URL zwischen verschiedenen Komponenten zu navigieren und das passende Routing-Setup zu erstellen. Es ist für alle Komponentenarten geeignet, nicht nur für Funktionskomponenten.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Methoden wird verwendet, um Ereignisse in React-Komponenten zu behandeln?",
    options: [
      {
        text: "Ereignisse werden durch die Verwendung von `addEventListener` in der Komponente behandelt",
        isCorrect: false,
      },
      {
        text: "Ereignisse werden direkt in der JSX-Syntax als Attribute wie `onClick`, `onSubmit` usw. behandelt",
        isCorrect: true,
      },
      {
        text: "Ereignisse werden durch das Erstellen von `EventEmitter`-Instanzen behandelt",
        isCorrect: false,
      },
      {
        text: "Ereignisse können nicht innerhalb von React-Komponenten behandelt werden",
        isCorrect: false,
      },
    ],
    difficulty: "easy",
    category: ["React"],
    explanation:
      "In React werden Ereignisse durch die Verwendung von JSX-Attributen wie `onClick`, `onSubmit` und anderen direkt in den Komponenten behandelt.",
  },
  {
    id: uuidv4(),
    text: "Wie kann der Zustand eines Formulars in React verwaltet werden?",
    options: [
      {
        text: "Indem man den Zustand jedes Formularfelds mit `useState` verwaltet und die Eingaben mit `onChange` überwacht",
        isCorrect: true,
      },
      {
        text: "Indem man das Formular direkt in der DOM manipulierend verändert",
        isCorrect: false,
      },
      {
        text: "Indem man eine globale Zustandverwaltung wie Redux verwendet, um Formulardaten zu speichern",
        isCorrect: false,
      },
      {
        text: "Indem man `useEffect` verwendet, um die Formularfelder basierend auf dem Zustand zu aktualisieren",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["React", "State"],
    explanation:
      "Formulardaten werden häufig mit `useState` verwaltet, indem man jedes Eingabefeld mit einem State-Value und einem `onChange`-Handler verknüpft, um die Eingaben zu überwachen.",
  },
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
    category: ["React", "State"],
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
    category: ["React", "State"],
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
    category: ["React", "Hooks"],
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
    difficulty: "medium",
    category: ["React", "Refs"],
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
    category: ["React", "useEffect"],
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
    category: ["React", "Optimization"],
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
    category: ["React", "React Query"],
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
    category: ["React", "Hooks"],
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
    category: ["React", "Refs"],
  },
];

export default reactQuestions;
