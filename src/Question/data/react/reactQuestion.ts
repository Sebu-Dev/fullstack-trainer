import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

const reactQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Wann wird eine React-Komponente neu gerendert?",
    options: [
      { text: "Bei Änderung des eigenen State", correct: true },
      { text: "Wenn die Parent-Komponente rendert", correct: true },
      { text: "Bei Änderung von Context-Werten", correct: true },
      { text: "Bei Änderungen im Window-Objekt", correct: false },
    ],
    difficulty: "hard",
    categories: ["React Rendering"],
    explanation: "Rendering bei State/Prop-Änderungen oder Context-Updates.",
  },
  {
    id: uuidv4(),
    text: "Welche Komponente wird verwendet, um eine React-Anwendung mit der URL zu synchronisieren?",
    options: [
      { text: "<BrowserRouter>", correct: true },
      { text: "<NavLink>", correct: false },
      { text: "<Route>", correct: false },
      { text: "<Link>", correct: false },
    ],
    difficulty: "easy",
    categories: ["React", "React Router"],
    explanation:
      "<BrowserRouter> ist die Basis-Komponente, die React-Router verwendet, um die URL und den Anwendungsstatus zu synchronisieren.",
  },
  {
    id: uuidv4(),
    text: "Was ist ein Vorteil von Zustand gegenüber React Context?",
    options: [
      {
        text: "Zustand hat weniger Boilerplate und ist schneller",
        correct: true,
      },
      {
        text: "Zustand rendert Komponenten bei jedem Update neu",
        correct: false,
      },
      {
        text: "Zustand nutzt ausschließlich Redux-ähnliche Patterns",
        correct: false,
      },
      { text: "Zustand erfordert mehrere Context-Provider", correct: false },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "Zustand ist leichter einzurichten und hat weniger Boilerplate im Vergleich zu React Context, was ihn für einfache Szenarien effizienter macht.",
  },
  {
    id: uuidv4(),
    text: "Welcher Hook wird in React Query verwendet, um Daten zu aktualisieren oder zu schreiben?",
    options: [
      { text: "useMutation", correct: true },
      { text: "useQueryClient", correct: false },
      { text: "useFetch", correct: false },
      { text: "useQuery", correct: false },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "useMutation wird in React Query verwendet, um Daten zu schreiben oder zu aktualisieren, z. B. bei POST-, PUT- oder DELETE-Anfragen.",
  },

  {
    id: uuidv4(),
    text: "Was ist ein typischer Anwendungsfall für Refs in React?",
    options: [
      {
        text: "Zustand speichern, der ein Re-Render auslöst",
        correct: false,
      },
      { text: "Ein DOM-Element direkt referenzieren", correct: true },
      { text: "Komplexe Animationen im State speichern", correct: false },
      { text: "Ein neues Re-Render erzwingen", correct: false },
    ],
    difficulty: "easy",
    categories: ["React"],
    explanation:
      "Refs werden verwendet, um direkt auf DOM-Elemente zuzugreifen, ohne den Component-State zu beeinflussen.",
  },

  {
    id: uuidv4(),
    text: "Was teilen Custom Hooks zwischen Komponenten?",
    options: [
      { text: "Den Zustand der Komponente", correct: false },
      { text: "Props der Komponente", correct: false },
      { text: "Reaktive Werte werden überschrieben", correct: false },
      { text: "Die zustandsbehaftete Logik", correct: true },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "Custom Hooks teilen zustandsbehaftete Logik, nicht jedoch den Zustand oder die Props zwischen Komponenten.",
  },

  {
    id: uuidv4(),
    text: "Was ist der Hauptzweck eines Providers im React Context-System?",
    options: [
      { text: "Um State zwischen Komponenten zu teilen", correct: true },
      { text: "Um den Context zu initialisieren", correct: false },
      { text: "Um die App schneller zu machen", correct: false },
      { text: "Um eine neue Komponente zu rendern", correct: false },
    ],
    difficulty: "easy",
    categories: ["React", "React Context"],
    explanation:
      "Ein Provider teilt den Context-Wert an alle untergeordneten Komponenten, die den Context konsumieren.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Hauptvorteil von useContext im Vergleich zu Props?",
    options: [
      {
        text: "Vermeidet das explizite Weiterreichen von Daten durch Props",
        correct: true,
      },
      { text: "Erhöht die Performance automatisch", correct: false },
      { text: "Erlaubt das direkte Rendern von Komponenten", correct: false },
      { text: "Ersetzt alle anderen Hooks", correct: false },
    ],
    difficulty: "easy",
    categories: ["React", "React Context"],
    explanation:
      "useContext erspart das Weiterreichen von Props über mehrere Ebenen und erleichtert die Handhabung globaler Zustände.",
  },

  {
    id: uuidv4(),
    text: "Welche Methode wird verwendet, um eine Komponente in React zu aktualisieren?",
    options: [
      { text: "`setState`", correct: true },
      { text: "`useEffect`", correct: false },
      { text: "`render`", correct: false },
      { text: "`updateState`", correct: false },
    ],
    difficulty: "easy",
    categories: ["React"],
    explanation:
      "In React wird der Zustand einer Klasse durch die Methode `setState` und in Funktionskomponenten durch `useState` aktualisiert.",
  },
  {
    id: uuidv4(),
    text: "Wie wird der React Router für Navigation innerhalb einer React-App verwendet?",
    options: [
      { text: "`<Router>` und `<Route>`", correct: true },
      { text: "`<Navigate>` und `<Route>`", correct: false },
      { text: "`<Switch>` und `<Route>`", correct: false },
      { text: "`<Link>` und `<Route>`", correct: false },
    ],
    difficulty: "medium",
    categories: ["React", "React Router"],
    explanation:
      "Der React Router verwendet `<Router>` und `<Route>`, um Navigation und Routen zu definieren.",
  },
  {
    id: uuidv4(),
    text: "Welche Funktion wird verwendet, um die aktuelle Route mit React Router zu navigieren?",
    options: [
      { text: "`useNavigate`", correct: true },
      { text: "`useHistory`", correct: false },
      { text: "`useLocation`", correct: false },
      { text: "`useRouteMatch`", correct: false },
    ],
    difficulty: "medium",
    categories: ["React", "React Router"],
    explanation:
      "`useNavigate` wird verwendet, um die Navigation zu steuern, wenn der Zustand oder die Route geändert wird.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Hauptunterschied zwischen Funktionskomponenten und Klassenkomponenten in React?",
    options: [
      {
        text: "Funktionskomponenten können keinen Zustand (State) haben, Klassenkomponenten schon",
        correct: false,
      },
      {
        text: "Funktionskomponenten sind einfacher und benötigen weniger Boilerplate-Code als Klassenkomponenten",
        correct: true,
      },
      {
        text: "In Funktionskomponenten können Hooks verwendet werden, in Klassenkomponenten nicht",
        correct: false,
      },
      {
        text: "Funktionskomponenten sind immer schneller als Klassenkomponenten",
        correct: false,
      },
    ],
    difficulty: "easy",
    categories: ["React"],
    explanation:
      "Funktionskomponenten sind leichtergewichtig und benötigen weniger Boilerplate-Code. Sie können Hooks verwenden, um Funktionen wie State und Seiteneffekte zu verwalten. In Klassenkomponenten wird dies über Methoden wie `this.setState` und Lifecycle-Methoden erreicht.",
  },
  {
    id: uuidv4(),
    text: "Was passiert, wenn der State in einer React-Komponente mit `setState` geändert wird?",
    options: [
      {
        text: "React führt sofort ein Re-Rendering der Komponente aus",
        correct: true,
      },
      {
        text: "Der State wird sofort aktualisiert, und der neue Wert ist sofort verfügbar",
        correct: false,
      },
      {
        text: "React plant ein Re-Rendering der Komponente, aber es wird nicht sofort ausgeführt",
        correct: true,
      },
      {
        text: "Der State wird aktualisiert, aber das Re-Rendering wird nur nach dem nächsten Benutzerinteraktion durchgeführt",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "`setState` in einer Klassenkomponente plant ein Re-Rendering. Der neue State wird nicht sofort verfügbar, sondern erst nach dem nächsten Renderzyklus.",
  },

  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen über das bedingte Rendering in React sind korrekt?",
    options: [
      {
        text: "Bedingtes Rendering kann mithilfe von `if`-Statements innerhalb der `render`-Methode durchgeführt werden",
        correct: true,
      },
      {
        text: "Das bedingte Rendering wird nur mit `&&`-Operatoren durchgeführt und nicht mit `if`-Statements",
        correct: false,
      },
      {
        text: "Bedingtes Rendering kann auch mit dem Ternary-Operator (?:) in JSX durchgeführt werden",
        correct: true,
      },
      {
        text: "Bedingtes Rendering ist nur in Klassenkomponenten verfügbar, nicht in Funktionskomponenten",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "Bedingtes Rendering kann mit `if`-Statements oder dem Ternary-Operator durchgeführt werden. Der `&&`-Operator ist eine gängige Möglichkeit, um bedingte Renderings in JSX durchzuführen.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Hauptvorteil von React's Virtual DOM?",
    options: [
      {
        text: "Es reduziert den Aufwand für das tatsächliche Manipulieren des DOMs und beschleunigt das Rendering",
        correct: true,
      },
      {
        text: "Es speichert eine Kopie des gesamten DOMs, um den Zustand zu sichern",
        correct: false,
      },
      {
        text: "Es ermöglicht eine tiefere Kontrolle über das Rendern von HTML-Elementen",
        correct: false,
      },
      {
        text: "Es reduziert die Notwendigkeit für eventuelle API-Aufrufe",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "Das Virtual DOM hilft, das tatsächliche DOM effizienter zu aktualisieren, indem nur die minimalen Änderungen vorgenommen werden, die nötig sind, anstatt das gesamte DOM neu zu rendern.",
  },
  {
    id: uuidv4(),
    text: "Was ist das Ziel von `React.memo()`?",
    options: [
      {
        text: "Es verhindert, dass eine Komponente erneut gerendert wird, wenn sich ihre Props nicht geändert haben",
        correct: true,
      },
      {
        text: "Es speichert den Zustand einer Komponente, um Re-Renders zu verhindern",
        correct: false,
      },
      {
        text: "Es erzwingt ein erneutes Rendering der Komponente bei jeder Änderung der Props",
        correct: false,
      },
      {
        text: "Es optimiert das Laden von externen Bibliotheken in einer Komponente",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "`React.memo()` ist eine HOC (Higher-Order Component), die es ermöglicht, dass eine Komponente nur dann erneut gerendert wird, wenn sich ihre Props tatsächlich ändern, was Performance-Vorteile bringt.",
  },

  {
    id: uuidv4(),
    text: "Wie kann man das Problem des Prop-Drillings in React vermeiden?",
    options: [
      {
        text: "Indem man den Zustand in einer zentralen Store-Verwaltung wie Redux speichert",
        correct: true,
      },
      {
        text: "Indem man den Zustand direkt in den Kindkomponenten verwaltet",
        correct: false,
      },
      {
        text: "Indem man Props in jeder Komponente explizit anpasst",
        correct: false,
      },
      {
        text: "Indem man den `useEffect` Hook für jeden Zustand verwendet",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "Prop-Drilling kann vermieden werden, indem ein globaler Zustand, beispielsweise mit Redux oder Context API, verwendet wird, um Daten ohne das Weitergeben durch mehrere Komponentenschichten zu verwalten.",
  },
  {
    id: uuidv4(),
    text: "Was passiert, wenn `key` in einer Liste von React-Komponenten fehlt?",
    options: [
      {
        text: "React kann nicht effizient erkennen, welche Elemente sich geändert haben, was zu Performance-Problemen führt",
        correct: true,
      },
      {
        text: "Die Liste wird nicht korrekt gerendert und es treten Fehler auf",
        correct: false,
      },
      {
        text: "React verwendet automatisch einen Standardwert für `key`, um die Liste korrekt darzustellen",
        correct: false,
      },
      {
        text: "Die Reihenfolge der Elemente in der Liste wird nicht beachtet",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "Der `key`-Prop hilft React, Änderungen in Listen effizient zu erkennen und so das Re-Rendering zu optimieren. Wenn er fehlt, wird die Performance negativ beeinflusst.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen über `useCallback` in React ist korrekt?",
    options: [
      {
        text: "`useCallback` speichert eine Funktion und gibt sie nur dann neu zurück, wenn sich ihre Abhängigkeiten ändern",
        correct: true,
      },
      {
        text: "`useCallback` wird verwendet, um den Zustand in einer Funktion zu speichern",
        correct: false,
      },
      {
        text: "`useCallback` zwingt eine Funktion, bei jedem Rendern neu zu erstellen",
        correct: false,
      },
      {
        text: "`useCallback` ist nur für die Performance-Optimierung von Funktionskomponenten gedacht",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["React"],
    explanation:
      "`useCallback` wird verwendet, um eine Funktion zu speichern und sicherzustellen, dass sie nur dann neu erstellt wird, wenn sich ihre Abhängigkeiten ändern, um unnötige Neuberechnungen zu vermeiden.",
  },

  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zu React Context API sind korrekt?",
    options: [
      {
        text: "React Context ist eine Methode, um globale Zustände für alle Komponenten in einer Anwendung bereitzustellen",
        correct: true,
      },
      {
        text: "React Context kann nicht mit Hooks verwendet werden",
        correct: false,
      },
      {
        text: "Context API ist nur für die Kommunikation zwischen Eltern- und Kindkomponenten geeignet",
        correct: false,
      },
      {
        text: "Context API kann verwendet werden, um Props zu ersetzen, aber nicht um den Zustand global zu verwalten",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "Die Context API ermöglicht es, Daten global zur Verfügung zu stellen, ohne sie explizit durch die Komponentenhierarchie weiterzugeben. Sie kann sowohl mit als auch ohne Hooks verwendet werden.",
  },
  {
    id: uuidv4(),
    text: "Was passiert, wenn ein `useState` Hook mit einem neuen Wert aufgerufen wird?",
    options: [
      {
        text: "React vergleicht den neuen Wert mit dem alten und rendert nur dann neu, wenn der Wert unterschiedlich ist",
        correct: true,
      },
      {
        text: "Die Komponente wird sofort neu gerendert, auch wenn der Wert identisch bleibt",
        correct: false,
      },
      {
        text: "Der Zustand wird synchron geändert und sofort an die Komponente weitergegeben",
        correct: false,
      },
      {
        text: "Die Komponente wird nur beim ersten Rendern aktualisiert, nicht bei State-Änderungen",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "Wenn `useState` mit einem neuen Wert aufgerufen wird, vergleicht React den alten und den neuen Wert und rendert nur dann neu, wenn die Werte unterschiedlich sind.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen über den `key`-Prop in React sind korrekt?",
    options: [
      {
        text: "Der `key`-Prop hilft React, effizient zu erkennen, welche Elemente sich geändert haben, und verbessert so die Performance",
        correct: true,
      },
      {
        text: "Der `key`-Prop ist nur für Listen von Elementen notwendig und nicht für einzelne Elemente",
        correct: true,
      },
      {
        text: "Der `key`-Prop kann jedes beliebige Objekt oder Array sein",
        correct: false,
      },
      {
        text: "Die Verwendung von `key` hat keinen Einfluss auf die Performance oder das Rendering",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "Der `key`-Prop hilft React, Elemente in Listen zu identifizieren und das Rendering effizient zu gestalten, indem nur die tatsächlich geänderten Elemente neu gerendert werden.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zum React Router sind korrekt?",
    options: [
      {
        text: "React Router ermöglicht die Navigation zwischen verschiedenen Komponenten basierend auf der URL",
        correct: true,
      },
      {
        text: "React Router kann nur mit Funktionskomponenten verwendet werden",
        correct: false,
      },
      {
        text: "React Router rendert automatisch die aktuellste Komponente basierend auf der URL",
        correct: true,
      },
      {
        text: "React Router ersetzt die Notwendigkeit von HTTP-Anfragen für die Navigation",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React", "React Router"],
    explanation:
      "React Router ermöglicht es, basierend auf der URL zwischen verschiedenen Komponenten zu navigieren und das passende Routing-Setup zu erstellen. Es ist für alle Komponentenarten geeignet, nicht nur für Funktionskomponenten.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Methoden wird verwendet, um Ereignisse in React-Komponenten zu behandeln?",
    options: [
      {
        text: "Ereignisse werden durch die Verwendung von `addEventListener` in der Komponente behandelt",
        correct: false,
      },
      {
        text: "Ereignisse werden direkt in der JSX-Syntax als Attribute wie `onClick`, `onSubmit` usw. behandelt",
        correct: true,
      },
      {
        text: "Ereignisse werden durch das Erstellen von `EventEmitter`-Instanzen behandelt",
        correct: false,
      },
      {
        text: "Ereignisse können nicht innerhalb von React-Komponenten behandelt werden",
        correct: false,
      },
    ],
    difficulty: "easy",
    categories: ["React"],
    explanation:
      "In React werden Ereignisse durch die Verwendung von JSX-Attributen wie `onClick`, `onSubmit` und anderen direkt in den Komponenten behandelt.",
  },
  {
    id: uuidv4(),
    text: "Wie kann der Zustand eines Formulars in React verwaltet werden?",
    options: [
      {
        text: "Indem man den Zustand jedes Formularfelds mit `useState` verwaltet und die Eingaben mit `onChange` überwacht",
        correct: true,
      },
      {
        text: "Indem man das Formular direkt in der DOM manipulierend verändert",
        correct: false,
      },
      {
        text: "Indem man eine globale Zustandverwaltung wie Redux verwendet, um Formulardaten zu speichern",
        correct: false,
      },
      {
        text: "Indem man `useEffect` verwendet, um die Formularfelder basierend auf dem Zustand zu aktualisieren",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "Formulardaten werden häufig mit `useState` verwaltet, indem man jedes Eingabefeld mit einem State-Value und einem `onChange`-Handler verknüpft, um die Eingaben zu überwachen.",
  },
  {
    id: uuidv4(),
    text: "Was passiert, wenn eine Komponente in React `setState` mit einem neuen Zustand aufruft, der denselben Wert wie der aktuelle Zustand hat?",
    options: [
      {
        text: "React ignoriert die Aktualisierung, da der Zustand nicht geändert wurde und rendert die Komponente nicht neu",
        correct: true,
      },
      {
        text: "Die Komponente wird dennoch neu gerendert, um sicherzustellen, dass der Zustand immer aktualisiert wird",
        correct: false,
      },
      {
        text: "Der Zustand wird sofort aktualisiert und die neue Komponente wird gerendert",
        correct: false,
      },
      {
        text: "Es führt zu einem Fehler, da der Zustand immer einzigartig sein muss",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "Wenn der neue Zustand identisch mit dem alten Zustand ist, wird das Re-Rendering von React vermieden, da keine Änderung vorliegt.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zu `React.Fragment` sind korrekt?",
    options: [
      {
        text: "`React.Fragment` ermöglicht das Gruppieren von Komponenten ohne zusätzliche DOM-Elemente zu erzeugen",
        correct: true,
      },
      {
        text: "`React.Fragment` wird nur für Listen von Komponenten benötigt",
        correct: false,
      },
      {
        text: "`React.Fragment` kann nicht mit Schlüssel-Attributen (`key`) verwendet werden",
        correct: false,
      },
      {
        text: "`React.Fragment` hat den gleichen Zweck wie ein `div`-Tag, aber ohne Styling",
        correct: true,
      },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "`React.Fragment` wird verwendet, um mehrere Elemente zu gruppieren, ohne zusätzliche DOM-Elemente hinzuzufügen. Es kann auch mit dem `key`-Attribut verwendet werden, wenn erforderlich.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen über das Lifecycle von React-Komponenten sind korrekt?",
    options: [
      {
        text: "Die `componentDidMount`-Methode wird nach dem ersten Rendern einer Klasse ausgeführt",
        correct: true,
      },
      {
        text: "Die `componentDidUpdate`-Methode wird nur bei Änderungen des Props ausgeführt",
        correct: false,
      },
      {
        text: "Die `componentWillUnmount`-Methode wird aufgerufen, bevor eine Komponente vom DOM entfernt wird",
        correct: true,
      },
      {
        text: "Lifecycle-Methoden sind nur in Funktionskomponenten verfügbar",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["React"],
    explanation:
      "`componentDidMount` wird nach dem ersten Rendern einer Komponente ausgeführt, und `componentWillUnmount` wird ausgeführt, bevor die Komponente entfernt wird. Funktionskomponenten haben keinen direkten Zugriff auf diese Methoden, aber ähnliche Funktionen können mit `useEffect` erreicht werden.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Zweck von `React.memo` in React?",
    options: [
      {
        text: "`React.memo` optimiert die Performance, indem es die Komponente nur dann neu rendert, wenn sich die Props ändern",
        correct: true,
      },
      {
        text: "`React.memo` verhindert das Re-Rendering einer Komponente, wenn der Zustand sich nicht ändert",
        correct: false,
      },
      {
        text: "`React.memo` wird verwendet, um die Initialisierung der Komponente zu verhindern",
        correct: false,
      },
      {
        text: "`React.memo` ist nur für Klassenkomponenten gedacht",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "`React.memo` ist ein High Order Component (HOC), das dafür sorgt, dass eine Komponente nur dann neu gerendert wird, wenn sich ihre Props ändern, wodurch unnötige Renderings vermieden werden.",
  },
  {
    id: uuidv4(),
    text: "Wie kannst du in React den Wert eines Formularfeldes wie eines `input` steuern?",
    options: [
      {
        text: "Indem man den `value`-Prop des Formularfeldes mit dem Zustand der Komponente bindet",
        correct: true,
      },
      {
        text: "Indem man den `checked`-Prop für alle Formularfelder nutzt",
        correct: false,
      },
      {
        text: "Indem man das `input`-Feld jedes Mal manuell ändert, wenn der Zustand sich ändert",
        correct: false,
      },
      {
        text: "Indem man `useEffect` verwendet, um den Wert des `input`-Feldes zu setzen",
        correct: false,
      },
    ],
    difficulty: "easy",
    categories: ["React"],
    explanation:
      "In React wird der Wert eines Formularfeldes durch den `value`-Prop gesteuert, der mit dem Zustand der Komponente verknüpft ist. Dies wird als kontrollierte Komponente bezeichnet.",
  },

  {
    id: uuidv4(),
    text: "Wie verhinderst du in React, dass eine Komponente unnötig neu gerendert wird?",
    options: [
      {
        text: "Verwende `shouldComponentUpdate` in Klassenkomponenten oder `React.memo` in Funktionskomponenten",
        correct: true,
      },
      {
        text: "Verwende immer den `key`-Prop in allen Komponenten",
        correct: false,
      },
      {
        text: "Verwende `useEffect`, um die Komponente zu überwachen und nur bei Bedarf neu zu rendern",
        correct: false,
      },
      {
        text: "Vermeide das Setzen von Zustand innerhalb von Komponenten",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["React"],
    explanation:
      "`shouldComponentUpdate` und `React.memo` helfen dabei, unnötige Renderings zu verhindern, indem sie sicherstellen, dass Komponenten nur neu gerendert werden, wenn sich die Props oder der Zustand ändern.",
  },

 


];

export default reactQuestions;
