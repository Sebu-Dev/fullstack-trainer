import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

export const dockerLayerQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Was ist ein Docker Layer, und wie unterscheidet er sich von einem Image oder Container?",
    options: [
      {
        text: "Ein Layer ist eine Schicht, die zu einem Docker-Image beiträgt",
        isCorrect: true,
      },
      {
        text: "Ein Layer repräsentiert eine Änderung im Dateisystem",
        isCorrect: true,
      },
      {
        text: "Ein Layer ist gleichbedeutend mit einem Container",
        isCorrect: false,
      },
      { text: "Ein Layer speichert Metadaten eines Images", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Layer"],

    explanation:
      "Docker Images bestehen aus einer Reihe von unveränderlichen Layers, die aufeinander aufbauen.",
  },
  {
    id: uuidv4(),
    text: "Warum wird empfohlen, häufig wechselnde Dateien in späteren Dockerfile-Anweisungen zu bearbeiten?",
    options: [
      { text: "Um den Cache optimal zu nutzen", isCorrect: true },
      {
        text: "Weil spätere Layers weniger Speicherplatz beanspruchen",
        isCorrect: false,
      },
      { text: "Um Layers wiederverwendbar zu machen", isCorrect: true },
      {
        text: "Weil Layers mit späteren Änderungen zusammengeführt werden",
        isCorrect: false,
      },
    ],
    difficulty: "hard",
    category: ["Docker", "Docker Layer"],

    explanation:
      "Häufige Änderungen in späteren Layers verhindern, dass der Cache vorheriger Layers neu berechnet werden muss.",
  },
  {
    id: uuidv4(),
    text: "Wie beeinflusst die Reihenfolge der Befehle in einem Dockerfile die Anzahl der Layers und die Build-Performance?",
    options: [
      { text: "Jeder Befehl erzeugt einen neuen Layer", isCorrect: true },
      { text: "Die Reihenfolge kann den Cache beeinflussen", isCorrect: true },
      { text: "Befehle werden automatisch optimiert", isCorrect: false },
      {
        text: "Das Zusammenführen von Layers reduziert die Größe",
        isCorrect: false,
      },
    ],
    difficulty: "hard",
    category: ["Docker", "Docker Layer"],

    explanation:
      "Jeder Dockerfile-Befehl erzeugt einen Layer. Eine durchdachte Reihenfolge kann den Cache effizienter nutzen.",
  },
  {
    id: uuidv4(),
    text: "Was bedeutet 'Layer Caching' und wie wirkt es sich auf den Build-Prozess aus?",
    options: [
      {
        text: "Es beschleunigt Builds durch Wiederverwendung unveränderter Layers",
        isCorrect: true,
      },
      { text: "Es reduziert die Image-Größe", isCorrect: false },
      { text: "Es erfordert manuelle Konfiguration", isCorrect: false },
      {
        text: "Es sorgt dafür, dass nur geänderte Layers neu gebaut werden",
        isCorrect: true,
      },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Layer"],

    explanation:
      "Layer Caching ermöglicht eine effiziente Wiederverwendung bereits gebauter Layers.",
  },
  {
    id: uuidv4(),
    text: "Wie kannst du sicherstellen, dass Layer nicht unnötig groß werden? Nenne mindestens zwei Methoden.",
    options: [
      {
        text: "Durch das Entfernen temporärer Dateien im selben RUN-Befehl",
        isCorrect: true,
      },
      { text: "Durch Verwendung von Multi-Stage-Builds", isCorrect: true },
      {
        text: "Durch Splitten eines RUN-Befehls in mehrere Schritte",
        isCorrect: false,
      },
      { text: "Durch Nutzung von großen Layer-Caches", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Docker", "Docker Layer"],

    explanation:
      "Das Kombinieren von Aktionen und Entfernen von temporären Dateien in einem Layer hilft, die Größe zu minimieren.",
  },
  {
    id: uuidv4(),
    text: "Welche Auswirkungen hat das Wiederverwenden von Layers auf die Sicherheit eines Docker-Images?",
    options: [
      {
        text: "Veraltete Layers können Sicherheitslücken enthalten",
        isCorrect: true,
      },
      { text: "Layers werden automatisch aktualisiert", isCorrect: false },
      {
        text: "Layers können nur mit vollständigen Images aktualisiert werden",
        isCorrect: true,
      },
      { text: "Nur Base-Images beeinflussen die Sicherheit", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Docker", "Docker Layer"],

    explanation:
      "Nicht aktualisierte Layers können Sicherheitslücken enthalten, weshalb regelmäßige Updates wichtig sind.",
  },
  {
    id: uuidv4(),
    text: "Erkläre, warum das Aufteilen eines Befehls in mehrere RUN-Anweisungen die Layer-Anzahl erhöht, aber Vorteile beim Debugging bietet.",
    options: [
      { text: "Jede RUN-Anweisung erzeugt einen neuen Layer", isCorrect: true },
      {
        text: "Das Debuggen wird durch kleinere Schritte erleichtert",
        isCorrect: true,
      },
      {
        text: "Die Performance beim Build-Prozess verbessert sich",
        isCorrect: false,
      },
      { text: "Die Layer-Größe wird automatisch optimiert", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Layer"],

    explanation:
      "Mehr Layers bedeuten größere Images, aber erleichtern die Nachvollziehbarkeit und das Debugging.",
  },
  {
    id: uuidv4(),
    text: "Welche Rolle spielen Base-Images bei der Erstellung und Verwaltung von Layers?",
    options: [
      {
        text: "Sie bilden die Grundlage für alle weiteren Layers",
        isCorrect: true,
      },
      {
        text: "Änderungen im Base-Image betreffen alle abhängigen Layers",
        isCorrect: true,
      },
      {
        text: "Base-Images beeinflussen nur die Größe, nicht die Layers",
        isCorrect: false,
      },
      { text: "Base-Images werden beim Build ignoriert", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Layer"],

    explanation:
      "Ein Base-Image definiert den Ausgangspunkt für Layers und beeinflusst alle darauf aufbauenden Images.",
  },
  {
    id: uuidv4(),
    text: "Wie kann der Befehl `docker history` dir helfen, Layers zu analysieren und Optimierungen im Dockerfile vorzunehmen?",
    options: [
      { text: "Er zeigt die Layer-Größe an", isCorrect: true },
      {
        text: "Er zeigt, welche Befehle zu welchen Layers gehören",
        isCorrect: true,
      },
      { text: "Er entfernt unnötige Layers automatisch", isCorrect: false },
      { text: "Er optimiert den Build-Prozess", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Layer"],

    explanation:
      "Mit `docker history` kannst du die Layer-Struktur analysieren und mögliche Verbesserungen im Dockerfile identifizieren.",
  },
  {
    id: uuidv4(),
    text: "Welche Unterschiede bestehen zwischen einem 'flattened' Image und einem regulären Docker-Image? Wann ist ein flattening sinnvoll?",
    options: [
      {
        text: "Ein 'flattened' Image besteht aus einem einzigen Layer",
        isCorrect: true,
      },
      {
        text: "Es ist einfacher zu verteilen, aber schwerer zu debuggen",
        isCorrect: true,
      },
      { text: "Reguläre Images sind immer schneller", isCorrect: false },
      { text: "Flattening entfernt Caching-Vorteile", isCorrect: true },
    ],
    difficulty: "hard",
    category: ["Docker", "Docker Layer"],

    explanation:
      "Flattening reduziert die Komplexität, geht aber auf Kosten von Debugging und Caching-Vorteilen.",
  },
];
