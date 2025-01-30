import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

export const cssQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Welche Eigenschaften beeinflussen das Box-Modell eines Elements?",
    options: [
      { text: "padding", isCorrect: true },
      { text: "border", isCorrect: true },
      { text: "margin", isCorrect: true },
      { text: "color", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["CSS"],
    explanation:
      "Das Box-Modell besteht aus dem Inhalt, Padding, Border und Margin. Die Eigenschaft 'color' beeinflusst nicht das Box-Modell.",
  },
  {
    id: uuidv4(),
    text: "Welche CSS-Eigenschaften können verwendet werden, um die Reihenfolge von Flexbox-Elementen zu steuern?",
    options: [
      { text: "flex-direction", isCorrect: true },
      { text: "order", isCorrect: true },
      { text: "align-items", isCorrect: false },
      { text: "justify-content", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["CSS"],
    explanation:
      "'flex-direction' bestimmt die Richtung der Flexbox-Elemente, während 'order' die Reihenfolge der Flexbox-Elemente innerhalb dieser Richtung steuert.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden CSS-Eigenschaften werden für die Animation von Transform-Effekten benötigt?",
    options: [
      { text: "transition", isCorrect: true },
      { text: "transform", isCorrect: true },
      { text: "animation", isCorrect: true },
      { text: "z-index", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["CSS"],
    explanation:
      "Die Eigenschaft 'transform' wird verwendet, um Transformationen vorzunehmen, während 'transition' und 'animation' verwendet werden, um die Dauer und den Ablauf von Transformationen zu steuern.",
  },
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
    category: ["CSS"],
    explanation:
      "BEM steht für Block Element Modifier und ist eine Methodologie zur Strukturierung von CSS-Klassen.",
  },
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
    category: ["CSS"],
    explanation:
      "In BEM (Block-Element-Modifier) wird eine Klasse mit Block, Element und Modifier strukturiert, z.B. `block__element--modifier`.",
  },
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
    text: "In BEM, was beschreibt der Modifier?",
    options: [
      { text: "Eine Modifikation des Blocks oder Elements", isCorrect: true },
      { text: "Die Grundlage des Blocks", isCorrect: false },
      { text: "Die Definition des Elements", isCorrect: false },
      { text: "Die Vererbung von CSS-Regeln", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["CSS"],
    explanation:
      "Der Modifier beschreibt eine modifizierte Version eines Blocks oder Elements, z.B. eine Variation eines Buttons.",
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
  {
    id: uuidv4(),
    text: "Welche CSS-Eigenschaften können verwendet werden, um den Abstand zwischen den Flex-Elementen zu steuern?",
    options: [
      { text: "gap", isCorrect: true },
      { text: "justify-content", isCorrect: true },
      { text: "align-items", isCorrect: false },
      { text: "margin", isCorrect: true },
    ],
    difficulty: "hard",
    category: ["CSS"],
    explanation:
      "'gap' setzt den Abstand zwischen den Flex-Elementen, 'justify-content' steuert den Abstand innerhalb der Flexbox-Achse, und 'margin' kann auch verwendet werden, um den Abstand zu regulieren.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Werte sind gültige Optionen für die Eigenschaft 'position' in CSS?",
    options: [
      { text: "absolute", isCorrect: true },
      { text: "fixed", isCorrect: true },
      { text: "relative", isCorrect: true },
      { text: "floating", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["CSS"],
    explanation:
      "Die Werte 'absolute', 'fixed' und 'relative' sind gültige Optionen für die Positionierung eines Elements. 'floating' ist kein gültiger Wert für die 'position'-Eigenschaft.",
  },
  {
    id: uuidv4(),
    text: "Welche CSS-Eigenschaften können verwendet werden, um Text zu gestalten und seine Lesbarkeit zu verbessern?",
    options: [
      { text: "line-height", isCorrect: true },
      { text: "letter-spacing", isCorrect: true },
      { text: "text-align", isCorrect: true },
      { text: "display", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["CSS"],
    explanation:
      "'line-height', 'letter-spacing' und 'text-align' sind Eigenschaften, die den Textfluss und die Lesbarkeit beeinflussen. 'display' beeinflusst hingegen das Layout und nicht direkt die Lesbarkeit.",
  },
  {
    id: uuidv4(),
    text: "Welche CSS-Eigenschaften sind relevant, wenn man die Hintergrundfarbe eines Elements festlegt?",
    options: [
      { text: "background-color", isCorrect: true },
      { text: "background-image", isCorrect: false },
      { text: "background", isCorrect: true },
      { text: "color", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["CSS"],
    explanation:
      "'background-color' legt die Hintergrundfarbe fest, und 'background' ist eine Kurzform, die sowohl Farbe als auch Bild angeben kann. 'color' ist für den Textfarben-Hintergrund verantwortlich, nicht für das Element selbst.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden CSS-Eigenschaften beeinflussen die Position von Elementen auf der Z-Achse?",
    options: [
      { text: "z-index", isCorrect: true },
      { text: "opacity", isCorrect: true },
      { text: "position", isCorrect: false },
      { text: "visibility", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["CSS"],
    explanation:
      "'z-index' bestimmt die Stapelreihenfolge von Elementen, während 'opacity' die Transparenz beeinflusst. 'position' und 'visibility' beeinflussen nicht direkt die Position auf der Z-Achse.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Eigenschaften können verwendet werden, um ein Grid-Layout zu erstellen?",
    options: [
      { text: "display: grid", isCorrect: true },
      { text: "grid-template-columns", isCorrect: true },
      { text: "grid-gap", isCorrect: true },
      { text: "flex-direction", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["CSS"],
    explanation:
      "Um ein Grid-Layout zu erstellen, verwendet man 'display: grid', 'grid-template-columns' zur Festlegung der Spalten und 'grid-gap' für den Abstand zwischen den Zellen. 'flex-direction' gehört zur Flexbox und ist nicht Teil des Grid-Layouts.",
  },
  {
    id: uuidv4(),
    text: "Welche Eigenschaften beeinflussen das Verhalten von Flexbox-Elementen bei der Ausrichtung auf der Cross-Achse?",
    options: [
      { text: "align-items", isCorrect: true },
      { text: "align-self", isCorrect: true },
      { text: "justify-content", isCorrect: false },
      { text: "flex-grow", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["CSS"],
    explanation:
      "'align-items' steuert die Ausrichtung der Flex-Elemente auf der Cross-Achse, und 'align-self' kann für einzelne Elemente überschrieben werden. 'justify-content' betrifft die Hauptachse, und 'flex-grow' beeinflusst das Wachstum der Flex-Elemente.",
  },
];
