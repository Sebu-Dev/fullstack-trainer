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
    category: ["Docker Basic"],
    explanation:
      "Container-Verwaltung: 'run' (erstellen/starten), 'start' (neustarten), 'ps' (anzeigen). 'build' erstellt Images.",
  },
  {
    id: uuidv4(),
    text: "Welche Vorteile bieten Docker Multi-Stage Builds?",
    options: [
      { text: "Reduzierung der finalen Image-Größe", isCorrect: true },
      { text: "Trennung von Build- und Runtime-Umgebung", isCorrect: true },
      { text: "Automatische Skalierung von Containern", isCorrect: false },
      { text: "Verbesserte Netzwerkperformance", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Docker Multistage"],
    explanation: "Multi-Stage entfernt Build-Tools aus dem finalen Image.",
  },
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
    category: ["Docker Volume"],
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
    category: ["Docker Volume", "Mounting"],
    explanation:
      "Bind Mounts sind flexibel, erfordern aber absolute Pfade. Volumes sind einfacher und von Docker verwaltet.",
  },
  {
    id: uuidv4(),
    text: "Was passiert, wenn ein Dockerfile keine CMD-Anweisung enthält?",
    options: [
      { text: "Der Container startet nicht", isCorrect: false },
      {
        text: "Der Container verwendet den Befehl des Basisimages",
        isCorrect: true,
      },
      { text: "Docker gibt einen Fehler beim Build aus", isCorrect: false },
      {
        text: "Es ist erforderlich, einen Entrypoint anzugeben",
        isCorrect: false,
      },
    ],
    difficulty: "hard",
    category: ["Dockerfile"],
    explanation:
      "Fehlt CMD, wird der Standardbefehl des Basisimages verwendet.",
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
    category: ["Docker Network"],
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
    category: ["Docker Healthcheck"],
    explanation:
      "Healthchecks prüfen die Funktionalität eines Containers und werden meist im Dockerfile definiert.",
  },
  {
    id: uuidv4(),
    text: "Welche Schritte sind beim Erstellen eines Docker-Images erforderlich?",
    options: [
      { text: "Ein Dockerfile erstellen", isCorrect: true },
      { text: "docker build ausführen", isCorrect: true },
      { text: "Einen Container starten", isCorrect: false },
      { text: "docker push verwenden", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["Docker Basic", "Dockerfile"],
    explanation:
      "Ein Image wird durch ein Dockerfile und den Befehl 'docker build' erstellt.",
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
    category: ["Docker Compose"],
    explanation:
      "Die docker-compose.yml definiert Anwendungen mit mehreren Containern, die zusammen arbeiten.",
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
    category: ["Docker Network"],
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
    category: ["Docker Security"],
    explanation:
      "Docker Secrets speichern sensible Daten und sind nur im Swarm-Modus verfügbar.",
  },
  {
    id: uuidv4(),
    text: "Was ist der Unterschied zwischen ENTRYPOINT und CMD in Docker?",
    options: [
      { text: "ENTRYPOINT ist vorrangig gegenüber CMD", isCorrect: true },
      { text: "CMD definiert Standardbefehle", isCorrect: true },
      { text: "ENTRYPOINT kann nicht überschrieben werden", isCorrect: false },
      { text: "CMD wird vor ENTRYPOINT ausgeführt", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Dockerfile"],
    explanation:
      "ENTRYPOINT ist vorrangig, CMD definiert Standardbefehle, die von ENTRYPOINT genutzt werden können.",
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
    category: ["Docker Basics"],
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
    category: ["Docker Basics"],
    explanation:
      "In der .dockerignore-Datei werden unnötige Dateien wie 'node_modules' oder '.git' ausgeschlossen, um die Build-Performance zu verbessern.",
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
    category: ["Docker Volumes"],
    explanation:
      "Named Volumes werden mit 'docker volume create' erstellt und sind persistent sowie zwischen Containern teilbar.",
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
    category: ["Docker Mounting"],
    explanation:
      "Docker unterstützt Bind Mounts, Named Volumes und Anonymous Volumes, aber keine 'Virtual Mounts'.",
  },
  {
    id: uuidv4(),
    text: "Was sind die Hauptvorteile von Multi-Stage Builds in Docker?",
    options: [
      { text: "Optimierung der finalen Image-Größe", isCorrect: true },
      { text: "Separate Build- und Runtime-Umgebungen", isCorrect: true },
      { text: "Einfachere Wartbarkeit des Dockerfiles", isCorrect: true },
      { text: "Erhöhte Netzwerkgeschwindigkeit", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Docker Multistage"],
    explanation:
      "Multi-Stage Builds optimieren die Image-Größe und trennen Build-Tools von der Runtime-Umgebung, was die Wartbarkeit erleichtert.",
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
    category: ["Docker Networking"],
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
    category: ["Docker Cleanup"],
    explanation:
      "'system prune', 'volume prune' und 'network prune' entfernen ungenutzte Ressourcen. 'container remove --all' ist kein gültiger Befehl.",
  },
  {
    id: uuidv4(),
    text: "Welche Best Practices gelten für das Schreiben von Dockerfiles?",
    options: [
      { text: "Verwendung kleiner Basis-Images", isCorrect: true },
      { text: "Minimierung der Layer-Anzahl", isCorrect: true },
      {
        text: "Alle Befehle in einer einzigen RUN-Anweisung bündeln",
        isCorrect: false,
      },
      { text: "Verwendung von Multi-Stage Builds", isCorrect: true },
    ],
    difficulty: "hard",
    category: ["Dockerfile"],
    explanation:
      "Kleine Basis-Images, wenige Layer und Multi-Stage Builds verbessern Performance und Wartbarkeit. Befehle sollten klar getrennt bleiben, nicht gebündelt.",
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
    category: ["Docker Compose"],
    explanation:
      "Docker Compose definiert Multi-Container-Apps in einer YAML-Datei. Es ergänzt Docker Swarm und unterstützt Volumes vollständig.",
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
    category: ["Docker Networking"],
    explanation:
      "'docker network create' erstellt ein benutzerdefiniertes Netzwerk und ermöglicht Namensauflösung. Container müssen explizit verbunden werden.",
  },
  {
    id: uuidv4(),
    text: "Welche Schritte sind notwendig, um ein Docker-Image zu erstellen?",
    options: [
      { text: "Ein Dockerfile schreiben", isCorrect: true },
      { text: "Den Befehl 'docker build' ausführen", isCorrect: true },
      { text: "Einen Container erstellen", isCorrect: false },
      { text: "Den Image-Namen vorher registrieren", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Building Docker Images"],
    explanation:
      "Ein Image wird durch ein Dockerfile und 'docker build' erstellt.",
  },
  {
    id: uuidv4(),
    text: "Was macht der `docker build` Befehl?",
    options: [
      { text: "Erstellt ein neues Docker-Image", isCorrect: true },
      { text: "Startet einen Container", isCorrect: false },
      { text: "Lädt Images in ein Repository hoch", isCorrect: false },
      { text: "Nutzt das Dockerfile zur Image-Erstellung", isCorrect: true },
    ],
    difficulty: "easy",
    category: ["Building Docker Images"],
    explanation:
      "Mit 'docker build' wird ein Docker-Image aus einem Dockerfile erzeugt.",
  },
  {
    id: uuidv4(),
    text: "Wie kann der Build-Kontext eines Docker-Images angegeben werden?",
    options: [
      { text: "Durch den Pfad am Ende von 'docker build'", isCorrect: true },
      { text: "Nur durch Umgebungsvariablen", isCorrect: false },
      { text: "Durch ein Flag wie '--context'", isCorrect: true },
      { text: "Der Kontext ist immer festgelegt", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Building Docker Images"],
    explanation:
      "Der Build-Kontext wird durch den Pfad oder das '--context'-Flag definiert.",
  },
  {
    id: uuidv4(),
    text: "Welche Rolle spielt der Build-Cache bei Docker?",
    options: [
      { text: "Er beschleunigt wiederholte Builds", isCorrect: true },
      { text: "Er speichert Container-Daten", isCorrect: false },
      {
        text: "Er wird mit dem Flag '--no-cache' deaktiviert",
        isCorrect: true,
      },
      { text: "Er ist nur bei Multi-Stage-Builds verfügbar", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Building Docker Images"],
    explanation:
      "Der Build-Cache speichert Zwischenschritte, um Builds zu beschleunigen.",
  },
  {
    id: uuidv4(),
    text: "Was bewirkt das Flag `-t` beim `docker build` Befehl?",
    options: [
      { text: "Es weist dem Image einen Namen zu", isCorrect: true },
      { text: "Es erhöht die Build-Geschwindigkeit", isCorrect: false },
      { text: "Es erstellt ein temporäres Image", isCorrect: false },
      { text: "Es definiert das Zielverzeichnis", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["Building Docker Images"],
    explanation: "Das '-t' Flag gibt dem Image einen Namen (Tag).",
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
    category: ["Docker Volumes"],
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
    category: ["Docker Volumes"],
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
    category: ["Docker Volumes"],
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
    category: ["Docker Volumes"],
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
    category: ["Docker Volumes"],
    explanation: "'docker volume prune' entfernt alle nicht genutzten Volumes.",
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
    category: ["Datenpersistenz"],
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
    category: ["Datenpersistenz"],
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
    category: ["Datenpersistenz"],
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
    category: ["Datenpersistenz"],
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
    category: ["Datenpersistenz"],
    explanation: "Named Volumes und Bind Mounts sind die primären Optionen.",
  },
  {
    id: uuidv4(),
    text: "Welche Anweisung wird im Dockerfile genutzt, um eine Basis-Image zu definieren?",
    options: [
      { text: "FROM", isCorrect: true },
      { text: "RUN", isCorrect: false },
      { text: "COPY", isCorrect: false },
      { text: "CMD", isCorrect: false },
    ],
    difficulty: "easy",
    category: ["Dockerfile"],
    explanation: "'FROM' gibt das Basis-Image an.",
  },
  {
    id: uuidv4(),
    text: "Wie kann man zusätzliche Software in einem Docker-Image installieren?",
    options: [
      { text: "Mit der RUN-Anweisung", isCorrect: true },
      { text: "Mit der ADD-Anweisung", isCorrect: false },
      { text: "Durch CMD", isCorrect: false },
      { text: "Durch FROM", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Dockerfile"],
    explanation: "'RUN' führt Befehle wie apt-get oder yum im Container aus.",
  },
  {
    id: uuidv4(),
    text: "Welche Anweisung kopiert Dateien ins Image?",
    options: [
      { text: "COPY", isCorrect: true },
      { text: "ADD", isCorrect: true },
      { text: "RUN", isCorrect: false },
      { text: "FROM", isCorrect: false },
    ],
    difficulty: "medium",
    category: ["Dockerfile"],
    explanation:
      "'COPY' und 'ADD' transferieren Dateien, unterscheiden sich jedoch leicht.",
  },
  {
    id: uuidv4(),
    text: "Welche Vorteile bieten Multi-Stage-Builds bei der Erstellung von Docker-Images? Nenne mindestens zwei Szenarien, in denen sie verwendet werden sollten.",
    options: [
      { text: "Reduktion der Image-Größe", isCorrect: true },
      { text: "Trennung von Build- und Runtime-Umgebung", isCorrect: true },
      { text: "Erleichterung der CI/CD-Pipelines", isCorrect: true },
      { text: "Erhöhte Netzwerkleistung", isCorrect: false },
    ],
    difficulty: "hard",
    category: ["Building Docker Images"],
    explanation:
      "Multi-Stage-Builds helfen, schlanke Images zu erstellen, indem sie unnötige Dateien und Abhängigkeiten aus der Runtime entfernen.",
  },
  {
    id: uuidv4(),
    text: "Wie kannst du sicherstellen, dass ein Docker-Build wiederholbar und unabhängig von externen Veränderungen (z. B. Änderungen im Internet) bleibt?",
    options: [
      {
        text: "Durch Verwendung fixer Versionsnummern in der Package-Installation",
        isCorrect: true,
      },
      { text: "Durch Nutzung von Caches", isCorrect: false },
      { text: "Durch Einbindung externer Build-Skripte", isCorrect: false },
      { text: "Durch Nutzung von Build-Argumenten", isCorrect: true },
    ],
    difficulty: "hard",
    category: ["Building Docker Images"],
    explanation:
      "Fixe Versionsnummern und Build-Argumente sorgen für Konsistenz bei wiederholten Builds.",
  },
  {
    id: uuidv4(),
    text: "Warum sollte man keine sensiblen Informationen (wie Passwörter) direkt im Dockerfile hinterlegen? Welche Alternativen gibt es?",
    options: [
      {
        text: "Dockerfiles sind oft in Repos öffentlich zugänglich",
        isCorrect: true,
      },
      { text: "Um Sicherheitsschwachstellen zu minimieren", isCorrect: true },
      {
        text: "Passwörter können durch Docker Secrets sicherer gehandhabt werden",
        isCorrect: true,
      },
      {
        text: "Es ist nicht möglich, sensible Daten im Dockerfile zu verwenden",
        isCorrect: false,
      },
    ],
    difficulty: "hard",
    category: ["Building Docker Images"],
    explanation:
      "Sensible Daten sollten über Umgebungsvariablen oder Docker Secrets bereitgestellt werden.",
  },
  {
    id: uuidv4(),
    text: "Was bedeutet das Konzept des Build-Contexts, und wie beeinflusst es die Größe eines Images?",
    options: [
      {
        text: "Der Build-Context ist der Ordner, der beim Build an Docker übertragen wird",
        isCorrect: true,
      },
      {
        text: "Große Build-Contexts können zu größeren Images führen",
        isCorrect: true,
      },
      {
        text: "Der Build-Context wird nicht in das Image eingebunden",
        isCorrect: false,
      },
      {
        text: "Build-Contexts beeinflussen die Layer des Images direkt",
        isCorrect: false,
      },
    ],
    difficulty: "medium",
    category: ["Building Docker Images"],
    explanation:
      "Ein sauber definierter Build-Context reduziert die Build-Zeit und die Größe des Images.",
  },
  {
    id: uuidv4(),
    text: "Erkläre, warum das Minimieren der Layers in einem Dockerfile wichtig für die Performance und Sicherheit ist.",
    options: [
      { text: "Weniger Layers führen zu kleineren Images", isCorrect: true },
      { text: "Es minimiert mögliche Angriffsflächen", isCorrect: true },
      {
        text: "Es verbessert die Lesbarkeit des Dockerfiles",
        isCorrect: false,
      },
      {
        text: "Es reduziert den Ressourcenverbrauch während des Builds",
        isCorrect: true,
      },
    ],
    difficulty: "medium",
    category: ["Building Docker Images"],
    explanation:
      "Weniger Layers bedeuten weniger Komplexität und Angriffsfläche im finalen Image.",
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
    category: ["Volumes"],
    explanation:
      "Named Volumes eignen sich für persistente Daten, während Anonymous Volumes meist temporär genutzt werden.",
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
    category: ["Volumes"],
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
    category: ["Volumes"],
    explanation:
      "'docker-compose' vereinfacht die Verwaltung und Wiederverwendung von Volumes durch deklarative Konfiguration.",
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
    category: ["Volumes"],
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
    category: ["Volumes"],
    explanation:
      "Datenverluste sind möglich, wenn Volumes gelöscht werden. Regelmäßige Backups sind essenziell.",
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
    category: ["Datenpersistenz"],
    explanation:
      "Container-File-Systeme sind flüchtig. Daten sollten extern gespeichert werden.",
  },
];
