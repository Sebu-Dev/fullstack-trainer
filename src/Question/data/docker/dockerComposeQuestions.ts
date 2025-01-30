import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";

export const dockerComposeQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Was ist Docker Compose und wofür wird es verwendet?",
    options: [
      {
        text: "Zum Orchestrieren von Containern mit einer YAML-Datei",
        isCorrect: true,
      },
      { text: "Zum Erstellen von Docker-Images", isCorrect: false },
      { text: "Zum Managen von Kubernetes-Clustern", isCorrect: false },
      {
        text: "Zum Starten und Stoppen mehrerer Container als Einheit",
        isCorrect: true,
      },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Compose"],
    explanation:
      "Docker Compose wird verwendet, um mehrere Container mit einer einzigen YAML-Datei (`docker-compose.yml`) zu definieren und gemeinsam zu verwalten.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zu Docker Compose sind korrekt?",
    options: [
      {
        text: "Es ermöglicht das Definieren von Multi-Container-Anwendungen",
        isCorrect: true,
      },
      { text: "Konfiguration erfolgt in einer YAML-Datei", isCorrect: true },
      { text: "Es ersetzt Docker Swarm", isCorrect: false },
      { text: "Es unterstützt keine Volumes", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Compose"],
    explanation:
      "Docker Compose definiert Multi-Container-Apps in einer YAML-Datei. Es ergänzt Docker Swarm und unterstützt Volumes vollständig.",
  },

  {
    id: uuidv4(),
    text: "Wie funktioniert die `docker-compose.yml` Datei?",
    options: [
      { text: "Definiert Multi-Container-Anwendungen", isCorrect: true },
      { text: "Wird mit 'docker compose up' ausgeführt", isCorrect: true },
      { text: "Ersetzt Docker Swarm", isCorrect: false },
      { text: "Ist nur für Netzwerkeinstellungen gedacht", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Compose"],
    explanation:
      "Die docker-compose.yml definiert Anwendungen mit mehreren Containern, die zusammen arbeiten.",
  },

  {
    id: uuidv4(),
    text: "Welche Vorteile bietet Docker Compose?",
    options: [
      { text: "Einfache Verwaltung mehrerer Container", isCorrect: true },
      { text: "Weniger Ressourcenverbrauch als Kubernetes", isCorrect: true },
      { text: "Automatische Skalierung der Container", isCorrect: false },
      {
        text: "Einfache Definition von Netzwerken und Volumes",
        isCorrect: true,
      },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Compose"],
    explanation:
      "Docker Compose ermöglicht eine einfache Verwaltung von Multi-Container-Anwendungen, erleichtert das Networking und die Volumenverwaltung, jedoch ohne automatische Skalierung.",
  },
  {
    id: uuidv4(),
    text: "Welche Datei wird standardmäßig von Docker Compose verwendet?",
    options: [
      { text: "docker-compose.yml", isCorrect: true },
      { text: "compose.json", isCorrect: false },
      { text: "dockerfile-compose.yml", isCorrect: false },
      { text: "compose.yaml", isCorrect: true },
    ],
    difficulty: "easy",
    category: ["Docker", "Docker Compose"],
    explanation:
      "Docker Compose nutzt standardmäßig die Datei `docker-compose.yml`, erlaubt aber auch `compose.yaml` ab Docker Compose v2.",
  },
  {
    id: uuidv4(),
    text: "Wie startet man einen Docker-Compose-Stack?",
    options: [
      { text: "docker compose up", isCorrect: true },
      { text: "docker-compose start", isCorrect: false },
      { text: "docker compose run", isCorrect: false },
      { text: "docker-compose up -d", isCorrect: true },
    ],
    difficulty: "easy",
    category: ["Docker", "Docker Compose"],
    explanation:
      "Mit `docker compose up` wird der definierte Container-Stack gestartet, mit `-d` läuft er im Hintergrund.",
  },
  {
    id: uuidv4(),
    text: "Wie stoppt man alle Container in Docker Compose?",
    options: [
      { text: "docker compose stop", isCorrect: true },
      { text: "docker compose down", isCorrect: true },
      { text: "docker-compose halt", isCorrect: false },
      { text: "docker-compose reset", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["Docker", "Docker Compose"],
    explanation:
      "`docker compose stop` stoppt Container, behält aber Netzwerke und Volumes. `docker compose down` entfernt Container, Netzwerke und Standard-Volumes.",
  },
  {
    id: uuidv4(),
    text: "Wie kann man Umgebungsvariablen in Docker Compose setzen?",
    options: [
      { text: "Mit einer `.env`-Datei", isCorrect: true },
      {
        text: "Direkt in `docker-compose.yml` unter `environment:`",
        isCorrect: true,
      },
      {
        text: "Nur mit `export VAR=VALUE` vor dem Starten von Docker Compose",
        isCorrect: false,
      },
      { text: "Mit `docker run --env VAR=VALUE`", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Compose"],
    explanation:
      "Umgebungsvariablen können in `docker-compose.yml` unter `environment:` gesetzt oder in einer `.env`-Datei gespeichert werden.",
  },
  {
    id: uuidv4(),
    text: "Wie kann man ein bestimmtes Service-Image in Docker Compose neu erstellen?",
    options: [
      { text: "docker compose build <service_name>", isCorrect: true },
      { text: "docker-compose restart <service_name>", isCorrect: false },
      { text: "docker compose up --build", isCorrect: true },
      { text: "docker-compose clean <service_name>", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Compose"],
    explanation:
      "`docker compose build <service_name>` baut ein bestimmtes Service-Image neu, `docker compose up --build` baut alle Images neu.",
  },
  {
    id: uuidv4(),
    text: "Welche Nachteile hat Docker Compose?",
    options: [
      {
        text: "Nicht für große, skalierbare Anwendungen geeignet",
        isCorrect: true,
      },
      { text: "Keine eingebaute Hochverfügbarkeit", isCorrect: true },
      { text: "Erfordert manuelles Netzwerk-Management", isCorrect: false },
      { text: "Nur für Windows und macOS verfügbar", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Compose"],
    explanation:
      "Docker Compose eignet sich nicht für große skalierbare Anwendungen oder Hochverfügbarkeitslösungen. Netzwerkmanagement ist hingegen einfach integriert.",
  },
  {
    id: uuidv4(),
    text: "Wie kann man in Docker Compose mehrere Services miteinander vernetzen?",
    options: [
      {
        text: "Mit der `networks:`-Direktive in `docker-compose.yml`",
        isCorrect: true,
      },
      {
        text: "Automatisch, wenn alle Services in der gleichen Compose-Datei sind",
        isCorrect: true,
      },
      {
        text: "Nur mit manuellen `docker network create`-Befehlen",
        isCorrect: false,
      },
      { text: "Durch Angabe von Ports in `expose:`", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Docker", "Docker Compose"],
    explanation:
      "Services im gleichen `docker-compose.yml` sind automatisch vernetzt. Zusätzliche Netzwerke können mit `networks:` definiert werden.",
  },
  {
    id: uuidv4(),
    text: "Welche Befehle kann man verwenden, um Logs eines Services in Docker Compose anzuzeigen?",
    options: [
      { text: "docker compose logs <service_name>", isCorrect: true },
      { text: "docker-compose logs -f <service_name>", isCorrect: true },
      { text: "docker logs <service_name>", isCorrect: false },
      { text: "docker-compose debug <service_name>", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Docker", "Docker Compose"],
    explanation:
      "Mit `docker compose logs` kann man Logs sehen. `-f` sorgt für ein Live-Streaming der Logs.",
  },
];
