import axios from "axios";
import { FaFile } from "react-icons/fa";
import { IconButton } from "sebu-dev-react-lib";
import questionData from "../Question/data/questionData";
import withFeatureFlag from "../hocs/withFeatureFlag";
import { API_BASE_URL } from "../config/apiVariables";

const QuestionSyncButton = () => {
  const questionList = questionData;

  const mapDifficultyToEnum = (difficulty: string | undefined): string => {
    switch (difficulty?.toLowerCase()) {
      case "easy":
        return "EASY";
      case "medium":
        return "MEDIUM";
      case "hard":
        return "HARD";
      default:
        return "EASY"; // Standardwert
    }
  };

  const scanDuplicates = () => {
    const textMap = new Map();
    questionList.forEach((question) => {
      const text = question.text;
      textMap.set(text, (textMap.get(text) || 0) + 1);
    });

    textMap.forEach((count, text) => {
      if (count > 1) {
        console.log(`Doppelter Eintrag: "${text}" (${count} Mal)`);
      }
    });
  };

  const handleSync = async () => {
    scanDuplicates();
    if (questionList.length === 0) {
      console.warn("Keine Fragen zum Synchronisieren.");
      alert("Keine Fragen zum Synchronisieren.");
      return;
    }

    // Keine festgelegte ID, da sie vom Backend generiert wird
    const preparedQuestions = questionList.map(({ id, ...question }) => ({
      text: question.text,
      difficulty: mapDifficultyToEnum(question.difficulty),
      categories: question.categories,
      options: question.options,
      explanation: question.explanation || null,
      imageUrl: question.imageUrl || null,
      maxPoints: question.maxPoints || null,
    }));

    try {
      const response = await axios.post(`${API_BASE_URL}/questions/bulk`, preparedQuestions);
      const result = response.data;

      if (result.validationErrors && result.validationErrors.length > 0) {
        console.log("Einige Fragen konnten nicht gespeichert werden:");
        result.validationErrors.forEach((error: any) => {
          console.log(`Frage: "${error.questionText}", Fehler: ${error.errors.join(", ")}`, error.questionDto);
        });
        alert(`Fragen teilweise gespeichert. ${result.validationErrors.length} Fehler. Details in der Konsole.`);
      } else {
        console.log("Alle Fragen erfolgreich gespeichert:", result.saveResult.message);
        alert("Alle Fragen erfolgreich in die Datenbank geladen!");
      }
    } catch (error) {
      console.error("Fehler beim Senden der Fragen:", error);
      alert("Fehler beim Synchronisieren der Fragen. Überprüfen Sie die Konsole.");
    }
  };

  return (
    <IconButton
      handleOnClick={handleSync}
      animationHover
      className="bg-transparent"
      size="text-2xl"
      icon={<FaFile />}
    />
  );
};
export default withFeatureFlag(QuestionSyncButton, "dev");
