import { useNavigate } from "react-router-dom";
import useQuizStore from "../store/QuizStore";
import { ROUTES } from "./routes";

export const useQuizNavigation = () => {
  const navigate = useNavigate();
  const resetAllQuizStates = useQuizStore((state) => state.resetAllQuizStates);

  const showMainPage = () => {
    navigate(ROUTES.HOME);
  };

  const startQuiz = () => {
    navigate(ROUTES.QUIZ);
  };

  const startProgressQuiz = () => {
    navigate(ROUTES.PROGRESS);
  };

  const startEndlessQuiz = () => {
    navigate(ROUTES.ENDLESS);
  };

  const showQuizResults = () => {
    navigate(ROUTES.QUIZ_RESULT);
  };

  const showDownload = () => {
    navigate(ROUTES.CSV);
  };

  const showSolution = () => {
    navigate(ROUTES.SOLUTION);
  };

  const restartQuiz = () => {
    resetAllQuizStates(); 
    navigate(ROUTES.HOME);
  };

  const showAdminPanel = () => {
    navigate(ROUTES.ADMIN);
  };

  return {
    showMainPage,
    startQuiz,
    showQuizResults,
    showDownload,
    showSolution,
    restartQuiz,
    showAdminPanel,
    startProgressQuiz,
    startEndlessQuiz,
  };
};