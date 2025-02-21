import axios from "axios";
import { API_BASE_URL } from "../config/apiVariables";
import type { Question } from "../Question/type/QuestionType";
import questionsData from "../Question/data/questionData";

export const apiService = {

  async fetchQuestions(): Promise<Question[]> {
    if (!API_BASE_URL) {
      console.log("⚠️ Keine API-URL gesetzt. Nutze lokale Fragen.");
      return questionsData;
    }

    try {
      const response = await axios.get<Question[]>(`${API_BASE_URL}/questions`);

      return response.data;
    } catch (error) {
      console.error("❌ Fehler beim Abrufen der Fragen, verwende lokale Daten:", error);
      return questionsData;
    }
  },
};
