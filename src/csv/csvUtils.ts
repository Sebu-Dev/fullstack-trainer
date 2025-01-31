import { v4 as generateId } from "uuid";
import type { Option, Question } from "../Question/type/QuestionType";

const MAX_OPTION_COUNT = 4;
const CSV_HEADERS = [
  "Topic",
  "QuestionID",
  "QuestionText",
  "Difficulty",
  "Categories",
  "Explanation",
  "ImageURL",
  "MaxPoints",
  ...Array.from({ length: MAX_OPTION_COUNT }, (_, i) => [
    `Option${i + 1}Text`,
    `Option${i + 1}Correct`,
  ]).flat(),
];

export const QuizCsvConverter = {
  // Wandelt die Fragen in CSV um
  convertToCsv(questions: Question[], topic: string): string {
    // Funktion zum Escapen von Feldern
    const escapeCsvField = (value: string) => `"${value.replace(/"/g, '""')}"`;

    // Erstelle eine Liste der CSV-Zeilen für jede Frage
    const csvRows = questions.map((question) => {
      const fields = [
        topic,
        question.id || generateId(),
        escapeCsvField(question.text),
        question.difficulty || "",
        question.category.join(" "),
        question.explanation ? escapeCsvField(question.explanation) : "",
        question.imageUrl || "",
        question.maxPoints?.toString() || "",
        ...this.padOptions(question.options).flatMap((option) => [
          escapeCsvField(option.text),
          option.isCorrect.toString(),
        ]),
      ];

      return fields.join(";");
    });

    // Gib das gesamte CSV zurück, bestehend aus den Headern und den Daten
    return "\uFEFF" + [CSV_HEADERS.join(";"), ...csvRows].join("\n");
  },

  // Parsen des CSV-Inhalts zurück zu Fragen
  parseFromCsv(csvContent: string): { questions: Question[]; topic: string } {
    const [headerLine, ...dataLines] = csvContent
      .split("\n")
      .filter((line) => line.trim());

    if (!headerLine) return { questions: [], topic: "" };

    const headers = headerLine.split(";");
    const topic = this.getCsvValue(
      headers,
      this.splitCsvLine(dataLines[0]),
      "Topic",
    );

    // Konvertiere jede Datenzeile zurück zu einer Frage
    const questions = dataLines.map((line) => {
      const values = this.splitCsvLine(line);

      return {
        id: this.getCsvValue(headers, values, "QuestionID") || generateId(),
        text: this.unescapeCsvField(
          this.getCsvValue(headers, values, "QuestionText"),
        ),
        options: this.parseOptions(headers, values),
        category: this.getCsvValue(headers, values, "Categories").split(" "),
        difficulty: this.getOptionalValue(headers, values, "Difficulty"),
        explanation: this.getOptionalValue(headers, values, "Explanation"),
        imageUrl: this.getOptionalValue(headers, values, "ImageURL"),
        maxPoints: this.getOptionalNumber(headers, values, "MaxPoints"),
      } as Question;
    });

    return { questions, topic };
  },

  // Ergänzt fehlende Optionen bis zur maximalen Anzahl
  padOptions(options: Option[]): Option[] {
    const paddedOptions = [...options];
    while (paddedOptions.length < MAX_OPTION_COUNT) {
      paddedOptions.push({ text: "", isCorrect: false });
    }
    return paddedOptions;
  },

  // Parst die Optionen aus den CSV-Daten
  parseOptions(headers: string[], values: string[]): Option[] {
    const options: Option[] = [];

    for (let i = 1; i <= MAX_OPTION_COUNT; i++) {
      const optionText = this.unescapeCsvField(
        this.getCsvValue(headers, values, `Option${i}Text`),
      );
      const isCorrect =
        this.getCsvValue(headers, values, `Option${i}Correct`) === "true";

      if (optionText.trim()) {
        options.push({ text: optionText, isCorrect });
      }
    }

    return options;
  },

  // Holt einen Wert aus den CSV-Daten anhand des Headernamens
  getCsvValue(headers: string[], values: string[], headerName: string): string {
    const index = headers.indexOf(headerName);
    return index >= 0 ? values[index] : "";
  },

  // Holt einen optionalen Wert (falls vorhanden)
  getOptionalValue<T>(
    headers: string[],
    values: string[],
    headerName: string,
  ): T | undefined {
    const value = this.getCsvValue(headers, values, headerName);
    return value ? (value as T) : undefined;
  },

  // Holt eine optionale Zahl (falls vorhanden)
  getOptionalNumber(
    headers: string[],
    values: string[],
    headerName: string,
  ): number | undefined {
    const value = this.getCsvValue(headers, values, headerName);
    return value ? Number(value) : undefined;
  },

  // Entfernt Escape-Zeichen aus CSV-Feldern
  unescapeCsvField(value: string): string {
    return value.replace(/""/g, '"');
  },

  // Teilt eine CSV-Zeile in einzelne Felder auf
  splitCsvLine(line: string): string[] {
    return line.split(";").map((value) => value.trim());
  },
};
