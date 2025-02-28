import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";
import { generateNumericId } from "../../../utils/helpers";

export const cssQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Welche Eigenschaften beeinflussen das Box-Modell eines Elements?",
    options: [
      { id: generateNumericId(), text: "padding", correct: true },
      { id: generateNumericId(), text: "border", correct: true },
      { id: generateNumericId(), text: "margin", correct: true },
      { id: generateNumericId(), text: "color", correct: false },
    ],
    difficulty: "hard",
    categories: ["CSS"],
    explanation:
      "Das Box-Modell besteht aus dem Inhalt, Padding, Border und Margin. Die Eigenschaft 'color' beeinflusst nicht das Box-Modell.",
  },
  {
    id: uuidv4(),
    text: "Welche CSS-Eigenschaften können verwendet werden, um die Reihenfolge von Flexbox-Elementen zu steuern?",
    options: [
      { id: generateNumericId(), text: "flex-direction", correct: true },
      { id: generateNumericId(), text: "order", correct: true },
      { id: generateNumericId(), text: "align-items", correct: false },
      { id: generateNumericId(), text: "justify-content", correct: false },
    ],
    difficulty: "hard",
    categories: ["CSS"],
    explanation:
      "'flex-direction' bestimmt die Richtung der Flexbox-Elemente, während 'order' die Reihenfolge der Flexbox-Elemente innerhalb dieser Richtung steuert.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden CSS-Eigenschaften werden für die Animation von Transform-Effekten benötigt?",
    options: [
      { id: generateNumericId(), text: "transition", correct: true },
      { id: generateNumericId(), text: "transform", correct: true },
      { id: generateNumericId(), text: "animation", correct: true },
      { id: generateNumericId(), text: "z-index", correct: false },
    ],
    difficulty: "hard",
    categories: ["CSS"],
    explanation:
      "Die Eigenschaft 'transform' wird verwendet, um Transformationen vorzunehmen, während 'transition' und 'animation' verwendet werden, um die Dauer und den Ablauf von Transformationen zu steuern.",
  },
  {
    id: uuidv4(),
    text: "Was bedeutet BEM in der Webentwicklung?",
    options: [
      {
        id: generateNumericId(),
        text: "Block Element Modifier",
        correct: true,
      },
      { id: generateNumericId(), text: "Block Element Model", correct: false },
      { id: generateNumericId(), text: "Block Element Method", correct: false },
      {
        id: generateNumericId(),
        text: "Basic Element Modifier",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["CSS"],
    explanation:
      "BEM steht für Block Element Modifier und ist eine Methodologie zur Strukturierung von CSS-Klassen.",
  },
  {
    id: uuidv4(),
    text: "Was ist ein Beispiel für eine BEM-konforme CSS-Klasse?",
    options: [
      {
        id: generateNumericId(),
        text: "block__element--modifier",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "block-element--modifier",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "block-element_modifier",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "block__element_modifier",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["CSS"],
    explanation:
      "In BEM (Block-Element-Modifier) wird eine Klasse mit Block, Element und Modifier strukturiert, z.B. `block__element--modifier`.",
  },
  {
    id: uuidv4(),
    text: "Wie zentriert man ein Element in CSS?",
    options: [
      {
        id: generateNumericId(),
        text: "Mit `display: flex` und `justify-content: center; align-items: center;`",
        correct: true,
      },
      { id: generateNumericId(), text: "Mit `margin: auto`", correct: true },
      { id: generateNumericId(), text: "Mit `float: center`", correct: false },
      {
        id: generateNumericId(),
        text: "Mit `vertical-align: center`",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["CSS"],
    explanation:
      "Zentrieren kann mit Flexbox, Grid oder `margin: auto` erfolgen. `float` oder `vertical-align` sind nicht geeignet.",
  },
  {
    id: uuidv4(),
    text: "In BEM, was beschreibt der Modifier?",
    options: [
      {
        id: generateNumericId(),
        text: "Eine Modifikation des Blocks oder Elements",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Die Grundlage des Blocks",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Die Definition des Elements",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Die Vererbung von CSS-Regeln",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["CSS"],
    explanation:
      "Der Modifier beschreibt eine modifizierte Version eines Blocks oder Elements, z.B. eine Variation eines Buttons.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Unterschied zwischen `position: absolute` und `position: fixed` in CSS?",
    options: [
      {
        id: generateNumericId(),
        text: "`absolute` bezieht sich auf das nächstgelegene positionierte Element, `fixed` bleibt immer am gleichen Ort",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "`absolute` bleibt am Fenster, `fixed` folgt dem Scrollen",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "`absolute` bleibt immer am gleichen Ort, `fixed` ist relativ zum Container",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "`absolute` ist nur für Block-Elemente, `fixed` für Inline-Elemente",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["CSS"],
    explanation:
      "`absolute` positioniert relativ zum nächsten positionierten Eltern-Element, während `fixed` das Element immer am gleichen Punkt auf dem Bildschirm hält.",
  },
  {
    id: uuidv4(),
    text: "Welche CSS-Eigenschaften können verwendet werden, um den Abstand zwischen den Flex-Elementen zu steuern?",
    options: [
      { id: generateNumericId(), text: "gap", correct: true },
      { id: generateNumericId(), text: "justify-content", correct: true },
      { id: generateNumericId(), text: "align-items", correct: false },
      { id: generateNumericId(), text: "margin", correct: true },
    ],
    difficulty: "hard",
    categories: ["CSS"],
    explanation:
      "'gap' setzt den Abstand zwischen den Flex-Elementen, 'justify-content' steuert den Abstand innerhalb der Flexbox-Achse, und 'margin' kann auch verwendet werden, um den Abstand zu regulieren.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Werte sind gültige Optionen für die Eigenschaft 'position' in CSS?",
    options: [
      { id: generateNumericId(), text: "absolute", correct: true },
      { id: generateNumericId(), text: "fixed", correct: true },
      { id: generateNumericId(), text: "relative", correct: true },
      { id: generateNumericId(), text: "floating", correct: false },
    ],
    difficulty: "hard",
    categories: ["CSS"],
    explanation:
      "Die Werte 'absolute', 'fixed' und 'relative' sind gültige Optionen für die Positionierung eines Elements. 'floating' ist kein gültiger Wert für die 'position'-Eigenschaft.",
  },
  {
    id: uuidv4(),
    text: "Welche CSS-Eigenschaften können verwendet werden, um Text zu gestalten und seine Lesbarkeit zu verbessern?",
    options: [
      { id: generateNumericId(), text: "line-height", correct: true },
      { id: generateNumericId(), text: "letter-spacing", correct: true },
      { id: generateNumericId(), text: "text-align", correct: true },
      { id: generateNumericId(), text: "display", correct: false },
    ],
    difficulty: "hard",
    categories: ["CSS"],
    explanation:
      "'line-height', 'letter-spacing' und 'text-align' sind Eigenschaften, die den Textfluss und die Lesbarkeit beeinflussen. 'display' beeinflusst hingegen das Layout und nicht direkt die Lesbarkeit.",
  },
  {
    id: uuidv4(),
    text: "Welche CSS-Eigenschaften sind relevant, wenn man die Hintergrundfarbe eines Elements festlegt?",
    options: [
      { id: generateNumericId(), text: "background-color", correct: true },
      { id: generateNumericId(), text: "background-image", correct: false },
      { id: generateNumericId(), text: "background", correct: true },
      { id: generateNumericId(), text: "color", correct: false },
    ],
    difficulty: "medium",
    categories: ["CSS"],
    explanation:
      "'background-color' legt die Hintergrundfarbe fest, und 'background' ist eine Kurzform, die sowohl Farbe als auch Bild angeben kann. 'color' ist für den Textfarben-Hintergrund verantwortlich, nicht für das Element selbst.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden CSS-Eigenschaften beeinflussen die Position von Elementen auf der Z-Achse?",
    options: [
      { id: generateNumericId(), text: "z-index", correct: true },
      { id: generateNumericId(), text: "opacity", correct: true },
      { id: generateNumericId(), text: "position", correct: false },
      { id: generateNumericId(), text: "visibility", correct: false },
    ],
    difficulty: "hard",
    categories: ["CSS"],
    explanation:
      "'z-index' bestimmt die Stapelreihenfolge von Elementen, während 'opacity' die Transparenz beeinflusst. 'position' und 'visibility' beeinflussen nicht direkt die Position auf der Z-Achse.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Eigenschaften können verwendet werden, um ein Grid-Layout zu erstellen?",
    options: [
      { id: generateNumericId(), text: "display: grid", correct: true },
      { id: generateNumericId(), text: "grid-template-columns", correct: true },
      { id: generateNumericId(), text: "grid-gap", correct: true },
      { id: generateNumericId(), text: "flex-direction", correct: false },
    ],
    difficulty: "hard",
    categories: ["CSS"],
    explanation:
      "Um ein Grid-Layout zu erstellen, verwendet man 'display: grid', 'grid-template-columns' zur Festlegung der Spalten und 'grid-gap' für den Abstand zwischen den Zellen. 'flex-direction' gehört zur Flexbox und ist nicht Teil des Grid-Layouts.",
  },
  {
    id: uuidv4(),
    text: "Welche Eigenschaften beeinflussen das Verhalten von Flexbox-Elementen bei der Ausrichtung auf der Cross-Achse?",
    options: [
      { id: generateNumericId(), text: "align-items", correct: true },
      { id: generateNumericId(), text: "align-self", correct: true },
      { id: generateNumericId(), text: "justify-content", correct: false },
      { id: generateNumericId(), text: "flex-grow", correct: false },
    ],
    difficulty: "hard",
    categories: ["CSS"],
    explanation:
      "'align-items' steuert die Ausrichtung der Flex-Elemente auf der Cross-Achse, und 'align-self' kann für einzelne Elemente überschrieben werden. 'justify-content' betrifft die Hauptachse, und 'flex-grow' beeinflusst das Wachstum der Flex-Elemente.",
  },
];
