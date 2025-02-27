import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

export const dockerQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Welche Docker-Befehle dienen direkt der Container-Verwaltung?",
    options: [
      { text: "docker build", correct: false },
      { text: "docker run", correct: true },
      { text: "docker start", correct: true },
      { text: "docker ps", correct: true },
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
      { text: "Bridge: Standardmodus für Container", correct: true },
      { text: "Host: Teilt das Netzwerk des Hosts", correct: true },
      { text: "None: Deaktiviert das Netzwerk", correct: true },
      { text: "Overlay: Nur für Bind Mounts verfügbar", correct: false },
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
      { text: "Überprüft den Status eines Containers", correct: true },
      { text: "Wird im Dockerfile definiert", correct: true },
      { text: "Erfordert einen Restart-Policy", correct: false },
      { text: "Kann nur HTTP-Checks durchführen", correct: false },
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
      { text: "Port-Konflikte", correct: true },
      { text: "Container können nicht starten", correct: true },
      {
        text: "Netzwerkverkehr wird automatisch weitergeleitet",
        correct: false,
      },
      { text: "Docker reserviert Ports dynamisch", correct: false },
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
      { text: "Sie speichern sensible Daten sicher", correct: true },
      { text: "Sie sind nur im Swarm-Modus verfügbar", correct: true },
      {
        text: "Sie werden automatisch in Umgebungsvariablen geladen",
        correct: false,
      },
      { text: "Sie ersetzen Volumes für Passwörter", correct: false },
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
      { text: "docker build", correct: true },
      { text: "docker commit", correct: true },
      { text: "docker push", correct: true },
      { text: "docker exec", correct: false },
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
      { text: "node_modules", correct: true },
      { text: ".git", correct: true },
      { text: "Dockerfile", correct: false },
      { text: "package.json", correct: false },
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
      { text: "Bind Mounts", correct: true },
      { text: "Named Volumes", correct: true },
      { text: "Anonymous Volumes", correct: true },
      { text: "Virtual Mounts", correct: false },
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
      { text: "Durch Docker-Netzwerke", correct: true },
      { text: "Über gemeinsame Volumes", correct: false },
      { text: "Mit Umgebungsvariablen für IP-Adressen", correct: true },
      { text: "Nur über die Host-Maschine", correct: false },
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
      { text: "docker system prune", correct: true },
      { text: "docker volume prune", correct: true },
      { text: "docker network prune", correct: true },
      { text: "docker container remove --all", correct: false },
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
        text: "Erstellt ein benutzerdefiniertes Docker-Netzwerk",
        correct: true,
      },
      {
        text: "Verbindet alle laufenden Container automatisch",
        correct: false,
      },
      {
        text: "Ermöglicht die Namensauflösung zwischen Containern",
        correct: true,
      },
      { text: "Setzt Container-IPs auf statische Adressen", correct: false },
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
      { text: "Durch den Einsatz von Volumes", correct: true },
      { text: "Mit Bind Mounts", correct: true },
      { text: "Indem man Daten nur im Container speichert", correct: false },
      { text: "Durch das Docker-Healthcheck-Feature", correct: false },
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
        text: "Sie bleiben erhalten, wenn ein Volume verwendet wird",
        correct: true,
      },
      { text: "Alle Daten gehen verloren", correct: false },
      { text: "Daten in Bind Mounts bleiben erhalten", correct: true },
      { text: "Daten aus 'tmpfs' bleiben erhalten", correct: false },
    ],
    difficulty: "hard",
    categories: ["Docker", "Docker Datenpersistenz"],
    explanation: "Nur Daten in Volumes oder Bind Mounts überleben.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Unterschied zwischen einem Named Volume und einem Bind Mount?",
    options: [
      { text: "Named Volumes sind unabhängiger vom Host", correct: true },
      { text: "Bind Mounts erfordern absolute Pfadangaben", correct: true },
      { text: "Named Volumes sind unsicherer", correct: false },
      { text: "Bind Mounts werden von Docker verwaltet", correct: false },
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
      { text: "Durch gemeinsame Volumes", correct: true },
      { text: "Über Netzwerkspeicher", correct: true },
      { text: "Indem man 'docker cp' verwendet", correct: false },
      {
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
      { text: "Named Volumes", correct: true },
      { text: "Bind Mounts", correct: true },
      { text: "Temporary Storage", correct: false },
      { text: "Swarm Secrets", correct: false },
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
        text: "Daten gehen verloren, wenn der Container gelöscht wird",
        correct: true,
      },
      {
        text: "Container können sich gegenseitig überschreiben",
        correct: false,
      },
      {
        text: "Daten sind bei Neustart des Containers verfügbar",
        correct: false,
      },
      { text: "Nur Bind Mounts schützen Daten dauerhaft", correct: false },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Datenpersistenz"],
    explanation:
      "Container-File-Systeme sind flüchtig. Daten sollten extern gespeichert werden.",
  },
];
