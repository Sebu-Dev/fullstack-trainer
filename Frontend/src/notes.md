## Anforderungen

### Anforderungen an die zukünftige Gestaltung

- Verbesserung der User Experience:
  - Wann und wie werden Komponenten gerendert oder ausgeblendet?
  * Startseite neu strukturieren, damit nicht direkt alle Fragen sichtbar sind.
  - Routing einbauen, um klare Seiten- und Funktionsaufteilung zu gewährleisten.

### Zukunftspläne (nach aktueller Strukturierung):

- Erweiterung der Seite mit weiteren Fragen.
- Hinzufügen von Statistiken.
- Auswahl von Fragenpaketen zu spezifischen Themengebieten.
- Implementierung weiterer Funktionen.

---

## Ziele

### Überarbeitete Struktur

- **Startseite:**

  - Eine klar strukturierte Ansicht mit minimalen Informationen.
  - Keine direkte Anzeige aller Fragen.
  - Stattdessen ein Willkommensbereich mit kurzen Erklärungen zur App.
  - Buttons zur Kategorie-Auswahl prominent platziert.

- **Routing:**

  - Einführung eines Routers mit folgenden Seiten:
    - **Startseite**: Übersicht und Einstieg.
    - **Quiz-Erstellung**: Auswahl der Kategorien und Generierung des Quizzes.
    - **Quiz-Seite**: Beantwortung und Auswertung des Quizzes.
    - **Ergebnis-Seite**: Detaillierte Analyse nach dem Quiz.

- **Verbesserung der UX:**

  - Dynamisches Ein- und Ausblenden von Komponenten basierend auf dem aktuellen Status (z. B. Fragen nur nach Kategorieauswahl).
  - Fokus auf Benutzerführung, z. B. durch klare Hinweise und minimalistische Gestaltung.

- **Weitere technische Anpassungen:**
  - State-Management optimieren, um die Logik zwischen den Komponenten besser zu trennen.
  - Übersichtliche Darstellung der korrigierten Karten mit klarer visueller Differenzierung.
  - Komponente für „Quiz abschicken“ immer sichtbar machen, wenn ein Quiz aktiv ist.

---
