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
    category: ["CSS Fundamentals"],
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
    category: ["Flexbox"],
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
    category: ["CSS Transitions & Animations"],
    explanation:
      "Die Eigenschaft 'transform' wird verwendet, um Transformationen vorzunehmen, während 'transition' und 'animation' verwendet werden, um die Dauer und den Ablauf von Transformationen zu steuern.",
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
    category: ["Flexbox"],
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
    category: ["CSS Layout"],
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
    category: ["CSS Typography"],
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
    difficulty: "hard",
    category: ["CSS Backgrounds"],
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
    category: ["CSS Positioning"],
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
    category: ["CSS Grid"],
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
    category: ["Flexbox"],
    explanation:
      "'align-items' steuert die Ausrichtung der Flex-Elemente auf der Cross-Achse, und 'align-self' kann für einzelne Elemente überschrieben werden. 'justify-content' betrifft die Hauptachse, und 'flex-grow' beeinflusst das Wachstum der Flex-Elemente.",
  },
];
