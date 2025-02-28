import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";
import { generateNumericId } from "../../../utils/helpers";

export const dockerVolumeQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Welche Aussagen zu Docker Volumes sind korrekt?",
    options: [
      {
        id: generateNumericId(),
        text: "Volumes überleben Container-Lebenszyklen",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Volumes können zwischen Containern geteilt werden",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Bind Mounts sind effizienter als Named Volumes",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "docker volume prune löscht alle Volumes",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Volumes"],
    explanation:
      "Volumes sind persistent und teilbar. 'prune' löscht nur ungenutzte Volumes.",
  },
  {
    id: uuidv4(),
    text: "Wie unterscheidet sich ein Bind Mount von einem Docker Volume?",
    options: [
      {
        id: generateNumericId(),
        text: "Bind Mounts verwenden absolute Pfade auf dem Host",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Volumes werden von Docker verwaltet",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Bind Mounts sind sicherer als Volumes",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Volumes benötigen keine Pfadangabe",
        correct: true,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Volumes"],
    explanation:
      "Bind Mounts sind flexibel, erfordern aber absolute Pfade. Volumes sind einfacher und von Docker verwaltet.",
  },
  {
    id: uuidv4(),
    text: "Was ist ein Named Volume in Docker, und wie wird es erstellt?",
    options: [
      {
        id: generateNumericId(),
        text: "Ein persistent gespeicherter Datenbereich",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Ein Speicherbereich, der an einen Host-Pfad gebunden ist",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Erstellt mit 'docker volume create'",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Kann nur für einen Container genutzt werden",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Volumes"],
    explanation:
      "Named Volumes werden mit 'docker volume create' erstellt und sind persistent sowie zwischen Containern teilbar.",
  },

  {
    id: uuidv4(),
    text: "Welche Aussage zu Docker Volumes ist korrekt?",
    options: [
      {
        id: generateNumericId(),
        text: "Volumes werden von Docker verwaltet",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Volumes sind nur innerhalb eines Containers verfügbar",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Named Volumes sind persistenter als Bind Mounts",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Bind Mounts sind die sicherere Option",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Volumes"],
    explanation:
      "Volumes sind von Docker verwaltet und persistenter als Bind Mounts.",
  },
  {
    id: uuidv4(),
    text: "Wie erstellt man ein Volume in Docker?",
    options: [
      {
        id: generateNumericId(),
        text: "Mit dem Befehl 'docker volume create'",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Automatisch beim Start eines Containers",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Durch manuelle Erstellung im Host-Dateisystem",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Nur durch ein Dockerfile",
        correct: false,
      },
    ],
    difficulty: "easy",
    categories: ["Docker", "Docker Volumes"],
    explanation:
      "Volumes können explizit erstellt oder beim Container-Start generiert werden.",
  },
  {
    id: uuidv4(),
    text: "Welche Befehle können verwendet werden, um Volumes zu verwalten?",
    options: [
      {
        id: generateNumericId(),
        text: "'docker volume inspect'",
        correct: true,
      },
      { id: generateNumericId(), text: "'docker volume ls'", correct: true },
      {
        id: generateNumericId(),
        text: "'docker volume delete'",
        correct: false,
      },
      { id: generateNumericId(), text: "'docker volume prune'", correct: true },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Volumes"],
    explanation:
      "Prune entfernt ungenutzte Volumes, inspect und ls zeigen Details.",
  },
  {
    id: uuidv4(),
    text: "Welche Vorteile haben Named Volumes gegenüber Bind Mounts?",
    options: [
      {
        id: generateNumericId(),
        text: "Bessere Sicherheit und Portabilität",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Automatische Erstellung durch Docker",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Volle Kontrolle über die Pfade",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Bind Mounts sind schneller",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Volumes"],
    explanation:
      "Named Volumes bieten mehr Portabilität und werden automatisch verwaltet.",
  },
  {
    id: uuidv4(),
    text: "Wie entfernt man ungenutzte Docker Volumes?",
    options: [
      {
        id: generateNumericId(),
        text: "Mit dem Befehl 'docker volume prune'",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Mit dem Flag '--force' bei 'docker rm'",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Manuell im Dateisystem",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Gar nicht, sie werden automatisch gelöscht",
        correct: false,
      },
    ],
    difficulty: "easy",
    categories: ["Docker", "Docker Volumes"],
    explanation: "'docker volume prune' entfernt alle nicht genutzten Volumes.",
  },
  {
    id: uuidv4(),
    text: "Erläutere, wie du mit einem Volume Zugriff auf Protokolldateien eines Containers erhältst, ohne den Container zu stoppen.",
    options: [
      {
        id: generateNumericId(),
        text: "Durch Mounten eines Named Volumes an den Host",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Durch Nutzung eines Bind Mounts",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Indem der Container gestoppt wird",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Durch Kopieren der Daten via 'docker cp'",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["Docker", "Docker Volumes"],
    explanation:
      "Bind Mounts und Named Volumes ermöglichen direkten Zugriff auf Dateien, ohne den Container zu stoppen.",
  },
  {
    id: uuidv4(),
    text: "Welche Auswirkungen hat die Verwendung von `docker-compose` auf die Verwaltung von Volumes im Vergleich zur manuellen Erstellung über die CLI?",
    options: [
      {
        id: generateNumericId(),
        text: "Volumes können automatisch erstellt und verwaltet werden",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Manuelle Volume-Befehle sind überflüssig",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Es entstehen Sicherheitsvorteile durch 'docker-compose'",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Bind Mounts werden von 'docker-compose' nicht unterstützt",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Volumes"],
    explanation:
      "'docker-compose' vereinfacht die Verwaltung und Wiederverwendung von Volumes durch deklarative Konfiguration.",
  },
  {
    id: uuidv4(),
    text: "Wie unterscheiden sich Named Volumes von Anonymous Volumes? In welchen Situationen ist der Einsatz eines Named Volumes sinnvoller?",
    options: [
      {
        id: generateNumericId(),
        text: "Named Volumes können wiederverwendet werden",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Anonymous Volumes sind für temporäre Daten geeignet",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Named Volumes werden automatisch von Docker gelöscht",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Anonymous Volumes erfordern eine manuelle Erstellung",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Volumes"],
    explanation:
      "Named Volumes eignen sich für persistente Daten, während Anonymous Volumes meist temporär genutzt werden.",
  },

  {
    id: uuidv4(),
    text: "Wie schützt man Daten in Volumes vor unautorisiertem Zugriff? Gibt es native Docker-Features dafür?",
    options: [
      {
        id: generateNumericId(),
        text: "Durch Nutzung von Zugriffskontrollen auf dem Host",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Durch Verschlüsselung von Volumes",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Docker bietet standardmäßig keine nativen Schutzmechanismen",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Named Volumes sind automatisch sicher",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["Docker", "Docker Volumes"],
    explanation:
      "Die Sicherheit von Volumes hängt oft von den Host-System-Berechtigungen ab.",
  },
  {
    id: uuidv4(),
    text: "Was passiert, wenn ein Volume auf einem Host gelöscht wird, aber der Container noch läuft? Wie kannst du das umgehen?",
    options: [
      {
        id: generateNumericId(),
        text: "Der Container kann auf das Volume nicht mehr zugreifen",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Docker stoppt den Container automatisch",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Das Volume wird neu erstellt",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Datenverluste können durch Backups verhindert werden",
        correct: true,
      },
    ],
    difficulty: "hard",
    categories: ["Docker", "Docker Volumes"],
    explanation:
      "Datenverluste sind möglich, wenn Volumes gelöscht werden. Regelmäßige Backups sind essenziell.",
  },
];
