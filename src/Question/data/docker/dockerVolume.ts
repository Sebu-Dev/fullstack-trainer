import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

export const dockerVolumeQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Welche Aussagen zu Docker Volumes sind korrekt?",
    options: [
      { text: "Volumes überleben Container-Lebenszyklen", isCorrect: true },
      {
        text: "Volumes können zwischen Containern geteilt werden",
        isCorrect: true,
      },
      {
        text: "Bind Mounts sind effizienter als Named Volumes",
        isCorrect: false,
      },
      { text: "docker volume prune löscht alle Volumes", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Volumes"],
    explanation:
      "Volumes sind persistent und teilbar. 'prune' löscht nur ungenutzte Volumes.",
  },
  {
    id: uuidv4(),
    text: "Wie unterscheidet sich ein Bind Mount von einem Docker Volume?",
    options: [
      {
        text: "Bind Mounts verwenden absolute Pfade auf dem Host",
        isCorrect: true,
      },
      { text: "Volumes werden von Docker verwaltet", isCorrect: true },
      { text: "Bind Mounts sind sicherer als Volumes", isCorrect: false },
      { text: "Volumes benötigen keine Pfadangabe", isCorrect: true },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Volumes"],
    explanation:
      "Bind Mounts sind flexibel, erfordern aber absolute Pfade. Volumes sind einfacher und von Docker verwaltet.",
  },
  {
    id: uuidv4(),
    text: "Was ist ein Named Volume in Docker, und wie wird es erstellt?",
    options: [
      { text: "Ein persistent gespeicherter Datenbereich", isCorrect: true },
      {
        text: "Ein Speicherbereich, der an einen Host-Pfad gebunden ist",
        isCorrect: false,
      },
      { text: "Erstellt mit 'docker volume create'", isCorrect: true },
      { text: "Kann nur für einen Container genutzt werden", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Volumes"],
    explanation:
      "Named Volumes werden mit 'docker volume create' erstellt und sind persistent sowie zwischen Containern teilbar.",
  },

  {
    id: uuidv4(),
    text: "Welche Aussage zu Docker Volumes ist korrekt?",
    options: [
      { text: "Volumes werden von Docker verwaltet", isCorrect: true },
      {
        text: "Volumes sind nur innerhalb eines Containers verfügbar",
        isCorrect: false,
      },
      {
        text: "Named Volumes sind persistenter als Bind Mounts",
        isCorrect: true,
      },
      { text: "Bind Mounts sind die sicherere Option", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Volumes"],
    explanation:
      "Volumes sind von Docker verwaltet und persistenter als Bind Mounts.",
  },
  {
    id: uuidv4(),
    text: "Wie erstellt man ein Volume in Docker?",
    options: [
      { text: "Mit dem Befehl 'docker volume create'", isCorrect: true },
      { text: "Automatisch beim Start eines Containers", isCorrect: true },
      {
        text: "Durch manuelle Erstellung im Host-Dateisystem",
        isCorrect: false,
      },
      { text: "Nur durch ein Dockerfile", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["Docker", "Docker Volumes"],
    explanation:
      "Volumes können explizit erstellt oder beim Container-Start generiert werden.",
  },
  {
    id: uuidv4(),
    text: "Welche Befehle können verwendet werden, um Volumes zu verwalten?",
    options: [
      { text: "'docker volume inspect'", isCorrect: true },
      { text: "'docker volume ls'", isCorrect: true },
      { text: "'docker volume delete'", isCorrect: false },
      { text: "'docker volume prune'", isCorrect: true },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Volumes"],
    explanation:
      "Prune entfernt ungenutzte Volumes, inspect und ls zeigen Details.",
  },
  {
    id: uuidv4(),
    text: "Welche Vorteile haben Named Volumes gegenüber Bind Mounts?",
    options: [
      { text: "Bessere Sicherheit und Portabilität", isCorrect: true },
      { text: "Automatische Erstellung durch Docker", isCorrect: true },
      { text: "Volle Kontrolle über die Pfade", isCorrect: false },
      { text: "Bind Mounts sind schneller", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Volumes"],
    explanation:
      "Named Volumes bieten mehr Portabilität und werden automatisch verwaltet.",
  },
  {
    id: uuidv4(),
    text: "Wie entfernt man ungenutzte Docker Volumes?",
    options: [
      { text: "Mit dem Befehl 'docker volume prune'", isCorrect: true },
      { text: "Mit dem Flag '--force' bei 'docker rm'", isCorrect: false },
      { text: "Manuell im Dateisystem", isCorrect: false },
      { text: "Gar nicht, sie werden automatisch gelöscht", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["Docker", "Docker Volumes"],
    explanation: "'docker volume prune' entfernt alle nicht genutzten Volumes.",
  },
  {
    id: uuidv4(),
    text: "Erläutere, wie du mit einem Volume Zugriff auf Protokolldateien eines Containers erhältst, ohne den Container zu stoppen.",
    options: [
      {
        text: "Durch Mounten eines Named Volumes an den Host",
        isCorrect: true,
      },
      { text: "Durch Nutzung eines Bind Mounts", isCorrect: true },
      { text: "Indem der Container gestoppt wird", isCorrect: false },
      { text: "Durch Kopieren der Daten via 'docker cp'", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Docker", "Docker Volumes"],
    explanation:
      "Bind Mounts und Named Volumes ermöglichen direkten Zugriff auf Dateien, ohne den Container zu stoppen.",
  },
  {
    id: uuidv4(),
    text: "Welche Auswirkungen hat die Verwendung von `docker-compose` auf die Verwaltung von Volumes im Vergleich zur manuellen Erstellung über die CLI?",
    options: [
      {
        text: "Volumes können automatisch erstellt und verwaltet werden",
        isCorrect: true,
      },
      { text: "Manuelle Volume-Befehle sind überflüssig", isCorrect: true },
      {
        text: "Es entstehen Sicherheitsvorteile durch 'docker-compose'",
        isCorrect: false,
      },
      {
        text: "Bind Mounts werden von 'docker-compose' nicht unterstützt",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Volumes"],
    explanation:
      "'docker-compose' vereinfacht die Verwaltung und Wiederverwendung von Volumes durch deklarative Konfiguration.",
  },
  {
    id: uuidv4(),
    text: "Wie unterscheiden sich Named Volumes von Anonymous Volumes? In welchen Situationen ist der Einsatz eines Named Volumes sinnvoller?",
    options: [
      { text: "Named Volumes können wiederverwendet werden", isCorrect: true },
      {
        text: "Anonymous Volumes sind für temporäre Daten geeignet",
        isCorrect: true,
      },
      {
        text: "Named Volumes werden automatisch von Docker gelöscht",
        isCorrect: false,
      },
      {
        text: "Anonymous Volumes erfordern eine manuelle Erstellung",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Volumes"],
    explanation:
      "Named Volumes eignen sich für persistente Daten, während Anonymous Volumes meist temporär genutzt werden.",
  },

  {
    id: uuidv4(),
    text: "Wie schützt man Daten in Volumes vor unautorisiertem Zugriff? Gibt es native Docker-Features dafür?",
    options: [
      {
        text: "Durch Nutzung von Zugriffskontrollen auf dem Host",
        isCorrect: true,
      },
      { text: "Durch Verschlüsselung von Volumes", isCorrect: false },
      {
        text: "Docker bietet standardmäßig keine nativen Schutzmechanismen",
        isCorrect: true,
      },
      { text: "Named Volumes sind automatisch sicher", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Docker", "Docker Volumes"],
    explanation:
      "Die Sicherheit von Volumes hängt oft von den Host-System-Berechtigungen ab.",
  },
  {
    id: uuidv4(),
    text: "Was passiert, wenn ein Volume auf einem Host gelöscht wird, aber der Container noch läuft? Wie kannst du das umgehen?",
    options: [
      {
        text: "Der Container kann auf das Volume nicht mehr zugreifen",
        isCorrect: true,
      },
      { text: "Docker stoppt den Container automatisch", isCorrect: false },
      { text: "Das Volume wird neu erstellt", isCorrect: false },
      {
        text: "Datenverluste können durch Backups verhindert werden",
        isCorrect: true,
      },
    ],
    difficulty: "hard",
    category: ["Docker", "Docker Volumes"],
    explanation:
      "Datenverluste sind möglich, wenn Volumes gelöscht werden. Regelmäßige Backups sind essenziell.",
  },
];
