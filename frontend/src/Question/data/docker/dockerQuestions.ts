import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";
import { generateNumericId } from "../../../utils/helpers";

export const dockerQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Welche Docker-Befehle dienen direkt der Container-Verwaltung?",
    options: [
      { id: generateNumericId(), text: "docker build", correct: false },
      { id: generateNumericId(), text: "docker run", correct: true },
      { id: generateNumericId(), text: "docker start", correct: true },
      { id: generateNumericId(), text: "docker ps", correct: true },
    ],
    difficulty: "medium",
    categories: ["Docker"],
    explanation:
      "Container-Verwaltung: 'run' (erstellen/starten), 'start' (neustarten), 'ps' (anzeigen). 'build' erstellt Images.",
  },

  {
    id: uuidv4(),
    text: "Welche Netzwerkmodi gibt es in Docker, und was bedeuten sie?",
    options: [
      {
        id: generateNumericId(),
        text: "Bridge: Standardmodus für Container",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Host: Teilt das Netzwerk des Hosts",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "None: Deaktiviert das Netzwerk",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Overlay: Nur für Bind Mounts verfügbar",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker"],
    explanation:
      "Bridge ist der Standard. Host teilt das Host-Netzwerk, None deaktiviert Netzwerke. Overlay ist für Swarm.",
  },
  {
    id: uuidv4(),
    text: "Wie funktioniert ein Docker Healthcheck?",
    options: [
      {
        id: generateNumericId(),
        text: "Überprüft den Status eines Containers",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Wird im Dockerfile definiert",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Erfordert einen Restart-Policy",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Kann nur HTTP-Checks durchführen",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Healthcheck"],
    explanation:
      "Healthchecks prüfen die Funktionalität eines Containers und werden meist im Dockerfile definiert.",
  },

  {
    id: uuidv4(),
    text: "Welche Probleme können auftreten, wenn mehrere Container denselben Port nutzen?",
    options: [
      { id: generateNumericId(), text: "Port-Konflikte", correct: true },
      {
        id: generateNumericId(),
        text: "Container können nicht starten",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Netzwerkverkehr wird automatisch weitergeleitet",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Docker reserviert Ports dynamisch",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["Docker"],
    explanation:
      "Wenn mehrere Container denselben Port belegen, entstehen Konflikte, und die Container können nicht starten.",
  },
  {
    id: uuidv4(),
    text: "Wie funktionieren Docker Secrets?",
    options: [
      {
        id: generateNumericId(),
        text: "Sie speichern sensible Daten sicher",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Sie sind nur im Swarm-Modus verfügbar",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Sie werden automatisch in Umgebungsvariablen geladen",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Sie ersetzen Volumes für Passwörter",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["Docker", "Docker Security"],
    explanation:
      "Docker Secrets speichern sensible Daten und sind nur im Swarm-Modus verfügbar.",
  },

  {
    id: uuidv4(),
    text: "Welche Docker-Befehle dienen der Image-Verwaltung?",
    options: [
      { id: generateNumericId(), text: "docker build", correct: true },
      { id: generateNumericId(), text: "docker commit", correct: true },
      { id: generateNumericId(), text: "docker push", correct: true },
      { id: generateNumericId(), text: "docker exec", correct: false },
    ],
    difficulty: "medium",
    categories: ["Docker"],
    explanation:
      "Befehle wie 'build', 'commit' und 'push' betreffen die Erstellung und Verwaltung von Images. 'exec' dient der Interaktion mit laufenden Containern.",
  },
  {
    id: uuidv4(),
    text: "Welche Dateien werden typischerweise in einer .dockerignore-Datei ausgeschlossen?",
    options: [
      { id: generateNumericId(), text: "node_modules", correct: true },
      { id: generateNumericId(), text: ".git", correct: true },
      { id: generateNumericId(), text: "Dockerfile", correct: false },
      { id: generateNumericId(), text: "package.json", correct: false },
    ],
    difficulty: "medium",
    categories: ["Docker"],
    explanation:
      "In der .dockerignore-Datei werden unnötige Dateien wie 'node_modules' oder '.git' ausgeschlossen, um die Build-Performance zu verbessern.",
  },

  {
    id: uuidv4(),
    text: "Welche der folgenden Mount-Typen sind in Docker möglich?",
    options: [
      { id: generateNumericId(), text: "Bind Mounts", correct: true },
      { id: generateNumericId(), text: "Named Volumes", correct: true },
      { id: generateNumericId(), text: "Anonymous Volumes", correct: true },
      { id: generateNumericId(), text: "Virtual Mounts", correct: false },
    ],
    difficulty: "hard",
    categories: ["Docker", "Docker Mounting"],
    explanation:
      "Docker unterstützt Bind Mounts, Named Volumes und Anonymous Volumes, aber keine 'Virtual Mounts'.",
  },

  {
    id: uuidv4(),
    text: "Wie können mehrere Docker-Container miteinander kommunizieren?",
    options: [
      {
        id: generateNumericId(),
        text: "Durch Docker-Netzwerke",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Über gemeinsame Volumes",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Mit Umgebungsvariablen für IP-Adressen",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Nur über die Host-Maschine",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Networking"],
    explanation:
      "Container können über Docker-Netzwerke und Umgebungsvariablen für IP-Adressen kommunizieren. Gemeinsame Volumes dienen nicht zur Netzwerkkommunikation.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Befehle werden zum Bereinigen von ungenutzten Ressourcen verwendet?",
    options: [
      { id: generateNumericId(), text: "docker system prune", correct: true },
      { id: generateNumericId(), text: "docker volume prune", correct: true },
      { id: generateNumericId(), text: "docker network prune", correct: true },
      {
        id: generateNumericId(),
        text: "docker container remove --all",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker"],
    explanation:
      "'system prune', 'volume prune' und 'network prune' entfernen ungenutzte Ressourcen. 'container remove --all' ist kein gültiger Befehl.",
  },

  {
    id: uuidv4(),
    text: "Was bewirkt der Befehl 'docker network create'?",
    options: [
      {
        id: generateNumericId(),
        text: "Erstellt ein benutzerdefiniertes Docker-Netzwerk",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Verbindet alle laufenden Container automatisch",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Ermöglicht die Namensauflösung zwischen Containern",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Setzt Container-IPs auf statische Adressen",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Networking"],
    explanation:
      "'docker network create' erstellt ein benutzerdefiniertes Netzwerk und ermöglicht Namensauflösung. Container müssen explizit verbunden werden.",
  },

  {
    id: uuidv4(),
    text: "Wie kann man sicherstellen, dass Daten in Docker persistiert werden?",
    options: [
      {
        id: generateNumericId(),
        text: "Durch den Einsatz von Volumes",
        correct: true,
      },
      { id: generateNumericId(), text: "Mit Bind Mounts", correct: true },
      {
        id: generateNumericId(),
        text: "Indem man Daten nur im Container speichert",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Durch das Docker-Healthcheck-Feature",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Datenpersistenz"],
    explanation: "Volumes und Bind Mounts garantieren Persistenz.",
  },
  {
    id: uuidv4(),
    text: "Was passiert mit den Daten, wenn ein Container gelöscht wird?",
    options: [
      {
        id: generateNumericId(),
        text: "Sie bleiben erhalten, wenn ein Volume verwendet wird",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Alle Daten gehen verloren",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Daten in Bind Mounts bleiben erhalten",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Daten aus 'tmpfs' bleiben erhalten",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["Docker", "Docker Datenpersistenz"],
    explanation: "Nur Daten in Volumes oder Bind Mounts überleben.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Unterschied zwischen einem Named Volume und einem Bind Mount?",
    options: [
      {
        id: generateNumericId(),
        text: "Named Volumes sind unabhängiger vom Host",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Bind Mounts erfordern absolute Pfadangaben",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Named Volumes sind unsicherer",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Bind Mounts werden von Docker verwaltet",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Datenpersistenz"],
    explanation:
      "Named Volumes sind portabler, Bind Mounts hängen vom Host ab.",
  },
  {
    id: uuidv4(),
    text: "Wie kann man Daten zwischen Containern teilen?",
    options: [
      {
        id: generateNumericId(),
        text: "Durch gemeinsame Volumes",
        correct: true,
      },
      { id: generateNumericId(), text: "Über Netzwerkspeicher", correct: true },
      {
        id: generateNumericId(),
        text: "Indem man 'docker cp' verwendet",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Durch Direktverbindungen zwischen Containern",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Datenpersistenz"],
    explanation:
      "Volumes sind der beste Weg, um Daten zwischen Containern zu teilen.",
  },
  {
    id: uuidv4(),
    text: "Welche Arten von Datenpersistenz werden in Docker unterstützt?",
    options: [
      { id: generateNumericId(), text: "Named Volumes", correct: true },
      { id: generateNumericId(), text: "Bind Mounts", correct: true },
      { id: generateNumericId(), text: "Temporary Storage", correct: false },
      { id: generateNumericId(), text: "Swarm Secrets", correct: false },
    ],
    difficulty: "easy",
    categories: ["Docker", "Docker Datenpersistenz"],
    explanation: "Named Volumes und Bind Mounts sind die primären Optionen.",
  },

  {
    id: uuidv4(),
    text: "Welche Risiken bestehen, wenn Daten ausschließlich im Container-File-System gespeichert werden? Beschreibe mögliche Szenarien von Datenverlust.",
    options: [
      {
        id: generateNumericId(),
        text: "Daten gehen verloren, wenn der Container gelöscht wird",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Container können sich gegenseitig überschreiben",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Daten sind bei Neustart des Containers verfügbar",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Nur Bind Mounts schützen Daten dauerhaft",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Datenpersistenz"],
    explanation:
      "Container-File-Systeme sind flüchtig. Daten sollten extern gespeichert werden.",
  },
];
