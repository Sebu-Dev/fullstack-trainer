import { useNavigate } from "react-router-dom";

import { BaseButton } from "sebu-dev-react-lib";
import useQuizStore from "../store/QuizStore";

export const BackHomeButton = () => {
  const navigate = useNavigate();
  const resetQuizState = useQuizStore((state) => state.resetQuizState);

  const handleRestart = () => {
    resetQuizState();
    navigate("/", {});
  };

  return (
    <BaseButton
      className="w-full sm:w-auto py-3 px-8 text-lg bg-gradient-to-r from-cyan-400 to-cyan-700 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-800 font-bold"
      handleOnClick={handleRestart}
    >
      Neustarten
    </BaseButton>
  );
};
