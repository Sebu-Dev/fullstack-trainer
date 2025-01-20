Erstelle einen Satz an Multiple-Choice-Fragen zu den folgenden Themen. Die Fragen sollen eine Mischung aus theoretischem Verständnis und praxisorientiertem Wissen bieten, mit einem Fokus auf das Verständnis der Konzepte, ohne große Codebeispiele zu verwenden. Jede Frage sollte eine klare Erklärung für die richtige Antwort enthalten, die auf den jeweiligen Kontext des Themas abgestimmt ist.

Anforderungen:
Schwierigkeitsgrad: Die Fragen sollten komplex genug sein, um das Verständnis des Nutzers zu testen, jedoch nicht zu detailliert (z.B. ohne umfangreiche Codebeispiele).
Antwortformat: Multiple-Choice-Fragen, bei denen mehrere richtige Antworten möglich sind.
Struktur der Fragen: Jede Frage sollte eine klare und präzise Erklärung der richtigen Antworten enthalten.
Themen: Es sollen alle folgenden Themen behandelt werden, wobei jedes Thema gleich gewichtet wird und keine Auslassungen auftreten:
JavaScript Grundlagen: Variablen, Datentypen, Arrays, Objekte, Funktionsaufrufe, this, etc.
Web APIs: Grundlagen der Browser APIs, DOM-Manipulation, Events, Fetch-API, etc.
Async Programming: Promises, async/await, Fehlerbehandlung, parallele Operationen, etc.
TypeScript Grundlagen: Typisierung, Interfaces, Klassen, Generics, Conditional Types, Infer, Utility Types (z.B. Pick, Omit, Exclude, Partial, etc.)
React: Funktionskomponenten vs. Klassenkomponenten, Props vs. State, Event Handling, Hooks (useState, useEffect, useRef, useCallback, useMemo, useContext, useReducer), Zustandshandhabung, React-Router, Zustand mit React-Query, etc.
Format der Fragen:
typescript
Copy
Edit
export type AnswerOption = {
text: string;
isCorrect: boolean;
};

export type Question = {
id: string;
questionText: string;
answerOptions: AnswerOption[];
difficultyLevel?: "easy" | "medium" | "hard";
category: string[];
explanation?: string;
imageUrl?: string;
};

// Beispiel einer Frage
{
id: "1",
questionText: "Welche der folgenden Aussagen sind korrekt bezüglich der Funktionsweise von async/await in JavaScript?",
answerOptions: [
{ text: "'await' kann nur innerhalb einer async-Funktion verwendet werden", isCorrect: true },
{ text: "async/await macht den Code synchrone, blockiert jedoch den Event Loop", isCorrect: false },
{ text: "'await' wartet auf die Ausführung eines Promises und blockiert den restlichen Code", isCorrect: false },
{ text: "'async' bewirkt, dass die Funktion immer ein Promise zurückgibt", isCorrect: true },
],
difficultyLevel: "medium",
category: ["JavaScript", "Async Programming"],
explanation: "'async/await' wird genutzt, um asynchrone Operationen klarer und lesbarer zu gestalten. 'await' blockiert den Code nicht, sondern wartet, bis das Promise aufgelöst wird."
}
Weitere Details zu den Anforderungen:
Jede Frage sollte mehrere richtige Antworten haben können. Das heißt, der Nutzer muss mehrere Auswahlmöglichkeiten auswählen können, um die Frage korrekt zu beantworten.
Die Schwierigkeitsgrade der Fragen sollten variiert werden (leicht, mittel, schwer), um ein breites Spektrum an Wissen zu testen.
Der Kategoriebereich der Fragen sollte klar definiert sein (z.B. "JavaScript", "React", "Async Programming", "TypeScript"), um die Themen gezielt zuzuordnen.
Erklärungen: Jede Antwort muss eine kurze Erklärung beinhalten, warum sie richtig oder falsch ist. Dies hilft dem Nutzer, sein Wissen zu vertiefen.
Codebeispiele: Vermeide komplexe Codebeispiele, es sollten eher kleine Codeausschnitte oder rein theoretische Fragen gestellt werden, die den Nutzer auf das Verständnis von Konzepten testen.
Wiederverwendbarkeit: Der Prompt sollte so gestaltet sein, dass du ihn öfter stellen kannst, ohne dass er redundante oder zu ähnliche Fragen generiert.
Themen, die abgedeckt werden müssen:
JavaScript Grundlagen
Schlüsselwörter: let, const, var, this, function, arrow functions, objects, arrays, loops, conditions, scopes.
Typen: Primitive und komplexe Typen, Vergleich von primitiven und Referenztypen, Ausnahmen von Coercion.
Web APIs
DOM-Manipulation (Elemente selektieren, verändern, hinzufügen, entfernen), Events (Event Listener), Fetch API, Browser-APIs.
Async Programming
Promises, async/await, Fehlerbehandlung mit try/catch, Parallelität (z.B. Promise.all), setTimeout, setInterval, Event Loop.
TypeScript
Grundlagen der Typisierung, Generics, Conditional Types, Utility Types (z.B. Pick, Omit, Partial, Exclude, Record), Interfaces, Infer.
React
Unterschied zwischen Funktionskomponenten und Klassenkomponenten.
Props vs. State, Event-Handling, bedingtes Rendering.
useState, useEffect, useMemo, useCallback, useReducer, useContext.
React-Router für die Navigation.
Zustandshandhabung mit React-Query.
Nächste Schritte:
Kombination der Themen: Stelle sicher, dass die Fragen eine gute Mischung aus den verschiedenen Bereichen enthalten. Jede Kategorie sollte mit einem Schwierigkeitsgrad versehen sein, um eine Vielzahl von Lernniveaus abzudecken.
Testbarkeit: Teste die Fragen und ihre Antworten, um sicherzustellen, dass sie korrekt sind und dem gewünschten Schwierigkeitsgrad entsprechen.
