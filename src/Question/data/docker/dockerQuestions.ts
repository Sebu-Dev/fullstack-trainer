import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

export const dockerQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Welche Docker-Befehle dienen direkt der Container-Verwaltung?",
    options: [
      { text: "docker build", isCorrect: false },
      { text: "docker run", isCorrect: true },
      { text: "docker start", isCorrect: true },
      { text: "docker ps", isCorrect: true },
    ],
    difficulty: "medium",
    category: ["Docker"],
    explanation:
      "Container-Verwaltung: 'run' (erstellen/starten), 'start' (neustarten), 'ps' (anzeigen). 'build' erstellt Images.",
  },

  {
    id: uuidv4(),
    text: "Welche Netzwerkmodi gibt es in Docker, und was bedeuten sie?",
    options: [
      { text: "Bridge: Standardmodus für Container", isCorrect: true },
      { text: "Host: Teilt das Netzwerk des Hosts", isCorrect: true },
      { text: "None: Deaktiviert das Netzwerk", isCorrect: true },
      { text: "Overlay: Nur für Bind Mounts verfügbar", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker"],
    explanation:
      "Bridge ist der Standard. Host teilt das Host-Netzwerk, None deaktiviert Netzwerke. Overlay ist für Swarm.",
  },
  {
    id: uuidv4(),
    text: "Wie funktioniert ein Docker Healthcheck?",
    options: [
      { text: "Überprüft den Status eines Containers", isCorrect: true },
      { text: "Wird im Dockerfile definiert", isCorrect: true },
      { text: "Erfordert einen Restart-Policy", isCorrect: false },
      { text: "Kann nur HTTP-Checks durchführen", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Healthcheck"],
    explanation:
      "Healthchecks prüfen die Funktionalität eines Containers und werden meist im Dockerfile definiert.",
  },

  {
    id: uuidv4(),
    text: "Welche Probleme können auftreten, wenn mehrere Container denselben Port nutzen?",
    options: [
      { text: "Port-Konflikte", isCorrect: true },
      { text: "Container können nicht starten", isCorrect: true },
      {
        text: "Netzwerkverkehr wird automatisch weitergeleitet",
        isCorrect: false,
      },
      { text: "Docker reserviert Ports dynamisch", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Docker"],
    explanation:
      "Wenn mehrere Container denselben Port belegen, entstehen Konflikte, und die Container können nicht starten.",
  },
  {
    id: uuidv4(),
    text: "Wie funktionieren Docker Secrets?",
    options: [
      { text: "Sie speichern sensible Daten sicher", isCorrect: true },
      { text: "Sie sind nur im Swarm-Modus verfügbar", isCorrect: true },
      {
        text: "Sie werden automatisch in Umgebungsvariablen geladen",
        isCorrect: false,
      },
      { text: "Sie ersetzen Volumes für Passwörter", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Docker", "Docker Security"],
    explanation:
      "Docker Secrets speichern sensible Daten und sind nur im Swarm-Modus verfügbar.",
  },

  {
    id: uuidv4(),
    text: "Welche Docker-Befehle dienen der Image-Verwaltung?",
    options: [
      { text: "docker build", isCorrect: true },
      { text: "docker commit", isCorrect: true },
      { text: "docker push", isCorrect: true },
      { text: "docker exec", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker"],
    explanation:
      "Befehle wie 'build', 'commit' und 'push' betreffen die Erstellung und Verwaltung von Images. 'exec' dient der Interaktion mit laufenden Containern.",
  },
  {
    id: uuidv4(),
    text: "Welche Dateien werden typischerweise in einer .dockerignore-Datei ausgeschlossen?",
    options: [
      { text: "node_modules", isCorrect: true },
      { text: ".git", isCorrect: true },
      { text: "Dockerfile", isCorrect: false },
      { text: "package.json", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker"],
    explanation:
      "In der .dockerignore-Datei werden unnötige Dateien wie 'node_modules' oder '.git' ausgeschlossen, um die Build-Performance zu verbessern.",
  },

  {
    id: uuidv4(),
    text: "Welche der folgenden Mount-Typen sind in Docker möglich?",
    options: [
      { text: "Bind Mounts", isCorrect: true },
      { text: "Named Volumes", isCorrect: true },
      { text: "Anonymous Volumes", isCorrect: true },
      { text: "Virtual Mounts", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Docker", "Docker Mounting"],
    explanation:
      "Docker unterstützt Bind Mounts, Named Volumes und Anonymous Volumes, aber keine 'Virtual Mounts'.",
  },

  {
    id: uuidv4(),
    text: "Wie können mehrere Docker-Container miteinander kommunizieren?",
    options: [
      { text: "Durch Docker-Netzwerke", isCorrect: true },
      { text: "Über gemeinsame Volumes", isCorrect: false },
      { text: "Mit Umgebungsvariablen für IP-Adressen", isCorrect: true },
      { text: "Nur über die Host-Maschine", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Networking"],
    explanation:
      "Container können über Docker-Netzwerke und Umgebungsvariablen für IP-Adressen kommunizieren. Gemeinsame Volumes dienen nicht zur Netzwerkkommunikation.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Befehle werden zum Bereinigen von ungenutzten Ressourcen verwendet?",
    options: [
      { text: "docker system prune", isCorrect: true },
      { text: "docker volume prune", isCorrect: true },
      { text: "docker network prune", isCorrect: true },
      { text: "docker container remove --all", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker"],
    explanation:
      "'system prune', 'volume prune' und 'network prune' entfernen ungenutzte Ressourcen. 'container remove --all' ist kein gültiger Befehl.",
  },

  {
    id: uuidv4(),
    text: "Was bewirkt der Befehl 'docker network create'?",
    options: [
      {
        text: "Erstellt ein benutzerdefiniertes Docker-Netzwerk",
        isCorrect: true,
      },
      {
        text: "Verbindet alle laufenden Container automatisch",
        isCorrect: false,
      },
      {
        text: "Ermöglicht die Namensauflösung zwischen Containern",
        isCorrect: true,
      },
      { text: "Setzt Container-IPs auf statische Adressen", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Networking"],
    explanation:
      "'docker network create' erstellt ein benutzerdefiniertes Netzwerk und ermöglicht Namensauflösung. Container müssen explizit verbunden werden.",
  },

  {
    id: uuidv4(),
    text: "Wie kann man sicherstellen, dass Daten in Docker persistiert werden?",
    options: [
      { text: "Durch den Einsatz von Volumes", isCorrect: true },
      { text: "Mit Bind Mounts", isCorrect: true },
      { text: "Indem man Daten nur im Container speichert", isCorrect: false },
      { text: "Durch das Docker-Healthcheck-Feature", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Datenpersistenz"],
    explanation: "Volumes und Bind Mounts garantieren Persistenz.",
  },
  {
    id: uuidv4(),
    text: "Was passiert mit den Daten, wenn ein Container gelöscht wird?",
    options: [
      {
        text: "Sie bleiben erhalten, wenn ein Volume verwendet wird",
        isCorrect: true,
      },
      { text: "Alle Daten gehen verloren", isCorrect: false },
      { text: "Daten in Bind Mounts bleiben erhalten", isCorrect: true },
      { text: "Daten aus 'tmpfs' bleiben erhalten", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Docker", "Docker Datenpersistenz"],
    explanation: "Nur Daten in Volumes oder Bind Mounts überleben.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Unterschied zwischen einem Named Volume und einem Bind Mount?",
    options: [
      { text: "Named Volumes sind unabhängiger vom Host", isCorrect: true },
      { text: "Bind Mounts erfordern absolute Pfadangaben", isCorrect: true },
      { text: "Named Volumes sind unsicherer", isCorrect: false },
      { text: "Bind Mounts werden von Docker verwaltet", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Datenpersistenz"],
    explanation:
      "Named Volumes sind portabler, Bind Mounts hängen vom Host ab.",
  },
  {
    id: uuidv4(),
    text: "Wie kann man Daten zwischen Containern teilen?",
    options: [
      { text: "Durch gemeinsame Volumes", isCorrect: true },
      { text: "Über Netzwerkspeicher", isCorrect: true },
      { text: "Indem man 'docker cp' verwendet", isCorrect: false },
      {
        text: "Durch Direktverbindungen zwischen Containern",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Datenpersistenz"],
    explanation:
      "Volumes sind der beste Weg, um Daten zwischen Containern zu teilen.",
  },
  {
    id: uuidv4(),
    text: "Welche Arten von Datenpersistenz werden in Docker unterstützt?",
    options: [
      { text: "Named Volumes", isCorrect: true },
      { text: "Bind Mounts", isCorrect: true },
      { text: "Temporary Storage", isCorrect: false },
      { text: "Swarm Secrets", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["Docker", "Docker Datenpersistenz"],
    explanation: "Named Volumes und Bind Mounts sind die primären Optionen.",
  },

  {
    id: uuidv4(),
    text: "Welche Risiken bestehen, wenn Daten ausschließlich im Container-File-System gespeichert werden? Beschreibe mögliche Szenarien von Datenverlust.",
    options: [
      {
        text: "Daten gehen verloren, wenn der Container gelöscht wird",
        isCorrect: true,
      },
      {
        text: "Container können sich gegenseitig überschreiben",
        isCorrect: false,
      },
      {
        text: "Daten sind bei Neustart des Containers verfügbar",
        isCorrect: false,
      },
      { text: "Nur Bind Mounts schützen Daten dauerhaft", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Datenpersistenz"],
    explanation:
      "Container-File-Systeme sind flüchtig. Daten sollten extern gespeichert werden.",
  },
];
