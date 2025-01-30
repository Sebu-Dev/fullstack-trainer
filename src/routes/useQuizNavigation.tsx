import { useNavigate } from "react-router-dom";
import useQuizStore from "../store/QuizStore";
import { ROUTES } from "./routes";

export const useQuizNavigation = () => {
  const navigate = useNavigate();
  const resetQuizState = useQuizStore((state) => state.resetQuizState);

  const showMainPage = () => {
    navigate(ROUTES.HOME);
  };

  const startQuiz = () => {
    navigate(ROUTES.QUIZ); // Stellt sicher, dass das Quiz gestartet wird
  };

  const showQuizResults = () => {
    navigate(ROUTES.QUIZ_RESULT); // Zeigt die Quiz-Ergebnisse
  };

  const showDownload = () => {
    navigate(ROUTES.CSV); // Zeigt die CSV-Download-Seite
  };

  const showSolution = () => {
    navigate(ROUTES.SOLUTION); // Zeigt die Lösung des Quizzes
  };

  const restartQuiz = () => {
    resetQuizState();
    navigate(ROUTES.HOME);
  };

  return {
    showMainPage,
    startQuiz,
    showQuizResults,
    showDownload,
    showSolution,
    restartQuiz,
  };
};
