import { v4 as uuidv4 } from "uuid";
import type { Question } from "../../type/QuestionType";
import { generateNumericId } from "../../../utils/helpers";

export const dockerComposeQuestions: Question[] = [
  {
    id: uuidv4(),
    text: "Was ist Docker Compose und wofür wird es verwendet?",
    options: [
      {
        id: generateNumericId(),
        text: "Zum Orchestrieren von Containern mit einer YAML-Datei",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Zum Erstellen von Docker-Images",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Zum Managen von Kubernetes-Clustern",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Zum Starten und Stoppen mehrerer Container als Einheit",
        correct: true,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Compose"],
    explanation:
      "Docker Compose wird verwendet, um mehrere Container mit einer einzigen YAML-Datei (`docker-compose.yml`) zu definieren und gemeinsam zu verwalten.",
  },
  {
    id: uuidv4(),
    text: "Welche der folgenden Aussagen zu Docker Compose sind korrekt?",
    options: [
      {
        id: generateNumericId(),
        text: "Es ermöglicht das Definieren von Multi-Container-Anwendungen",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Konfiguration erfolgt in einer YAML-Datei",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Es ersetzt Docker Swarm",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Es unterstützt keine Volumes",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Compose"],
    explanation:
      "Docker Compose definiert Multi-Container-Apps in einer YAML-Datei. Es ergänzt Docker Swarm und unterstützt Volumes vollständig.",
  },

  {
    id: uuidv4(),
    text: "Wie funktioniert die `docker-compose.yml` Datei?",
    options: [
      {
        id: generateNumericId(),
        text: "Definiert Multi-Container-Anwendungen",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Wird mit 'docker compose up' ausgeführt",
        correct: true,
      },
      { id: generateNumericId(), text: "Ersetzt Docker Swarm", correct: false },
      {
        id: generateNumericId(),
        text: "Ist nur für Netzwerkeinstellungen gedacht",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Compose"],
    explanation:
      "Die docker-compose.yml definiert Anwendungen mit mehreren Containern, die zusammen arbeiten.",
  },

  {
    id: uuidv4(),
    text: "Welche Vorteile bietet Docker Compose?",
    options: [
      {
        id: generateNumericId(),
        text: "Einfache Verwaltung mehrerer Container",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Weniger Ressourcenverbrauch als Kubernetes",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Automatische Skalierung der Container",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Einfache Definition von Netzwerken und Volumes",
        correct: true,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Compose"],
    explanation:
      "Docker Compose ermöglicht eine einfache Verwaltung von Multi-Container-Anwendungen, erleichtert das Networking und die Volumenverwaltung, jedoch ohne automatische Skalierung.",
  },
  {
    id: uuidv4(),
    text: "Welche Datei wird standardmäßig von Docker Compose verwendet?",
    options: [
      { id: generateNumericId(), text: "docker-compose.yml", correct: true },
      { id: generateNumericId(), text: "compose.json", correct: false },
      {
        id: generateNumericId(),
        text: "dockerfile-compose.yml",
        correct: false,
      },
      { id: generateNumericId(), text: "compose.yaml", correct: true },
    ],
    difficulty: "easy",
    categories: ["Docker", "Docker Compose"],
    explanation:
      "Docker Compose nutzt standardmäßig die Datei `docker-compose.yml`, erlaubt aber auch `compose.yaml` ab Docker Compose v2.",
  },
  {
    id: uuidv4(),
    text: "Wie startet man einen Docker-Compose-Stack?",
    options: [
      { id: generateNumericId(), text: "docker compose up", correct: true },
      { id: generateNumericId(), text: "docker-compose start", correct: false },
      { id: generateNumericId(), text: "docker compose run", correct: false },
      { id: generateNumericId(), text: "docker-compose up -d", correct: true },
    ],
    difficulty: "easy",
    categories: ["Docker", "Docker Compose"],
    explanation:
      "Mit `docker compose up` wird der definierte Container-Stack gestartet, mit `-d` läuft er im Hintergrund.",
  },
  {
    id: uuidv4(),
    text: "Wie stoppt man alle Container in Docker Compose?",
    options: [
      { id: generateNumericId(), text: "docker compose stop", correct: true },
      { id: generateNumericId(), text: "docker compose down", correct: true },
      { id: generateNumericId(), text: "docker-compose halt", correct: false },
      { id: generateNumericId(), text: "docker-compose reset", correct: false },
    ],
    difficulty: "easy",
    categories: ["Docker", "Docker Compose"],
    explanation:
      "`docker compose stop` stoppt Container, behält aber Netzwerke und Volumes. `docker compose down` entfernt Container, Netzwerke und Standard-Volumes.",
  },
  {
    id: uuidv4(),
    text: "Wie kann man Umgebungsvariablen in Docker Compose setzen?",
    options: [
      {
        id: generateNumericId(),
        text: "Mit einer `.env`-Datei",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Direkt in `docker-compose.yml` unter `environment:`",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Nur mit `export VAR=VALUE` vor dem Starten von Docker Compose",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Mit `docker run --env VAR=VALUE`",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Compose"],
    explanation:
      "Umgebungsvariablen können in `docker-compose.yml` unter `environment:` gesetzt oder in einer `.env`-Datei gespeichert werden.",
  },
  {
    id: uuidv4(),
    text: "Wie kann man ein bestimmtes Service-Image in Docker Compose neu erstellen?",
    options: [
      {
        id: generateNumericId(),
        text: "docker compose build <service_name>",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "docker-compose restart <service_name>",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "docker compose up --build",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "docker-compose clean <service_name>",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Compose"],
    explanation:
      "`docker compose build <service_name>` baut ein bestimmtes Service-Image neu, `docker compose up --build` baut alle Images neu.",
  },
  {
    id: uuidv4(),
    text: "Welche Nachteile hat Docker Compose?",
    options: [
      {
        id: generateNumericId(),
        text: "Nicht für große, skalierbare Anwendungen geeignet",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Keine eingebaute Hochverfügbarkeit",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Erfordert manuelles Netzwerk-Management",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Nur für Windows und macOS verfügbar",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Compose"],
    explanation:
      "Docker Compose eignet sich nicht für große skalierbare Anwendungen oder Hochverfügbarkeitslösungen. Netzwerkmanagement ist hingegen einfach integriert.",
  },
  {
    id: uuidv4(),
    text: "Wie kann man in Docker Compose mehrere Services miteinander vernetzen?",
    options: [
      {
        id: generateNumericId(),
        text: "Mit der `networks:`-Direktive in `docker-compose.yml`",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Automatisch, wenn alle Services in der gleichen Compose-Datei sind",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "Nur mit manuellen `docker network create`-Befehlen",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "Durch Angabe von Ports in `expose:`",
        correct: false,
      },
    ],
    difficulty: "hard",
    categories: ["Docker", "Docker Compose"],
    explanation:
      "Services im gleichen `docker-compose.yml` sind automatisch vernetzt. Zusätzliche Netzwerke können mit `networks:` definiert werden.",
  },
  {
    id: uuidv4(),
    text: "Welche Befehle kann man verwenden, um Logs eines Services in Docker Compose anzuzeigen?",
    options: [
      {
        id: generateNumericId(),
        text: "docker compose logs <service_name>",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "docker-compose logs -f <service_name>",
        correct: true,
      },
      {
        id: generateNumericId(),
        text: "docker logs <service_name>",
        correct: false,
      },
      {
        id: generateNumericId(),
        text: "docker-compose debug <service_name>",
        correct: false,
      },
    ],
    difficulty: "medium",
    categories: ["Docker", "Docker Compose"],
    explanation:
      "Mit `docker compose logs` kann man Logs sehen. `-f` sorgt für ein Live-Streaming der Logs.",
  },
];
