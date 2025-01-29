import { useNavigate } from "react-router-dom";

import useQuizStore from "../store/QuizStore";
import { BaseButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

export const BackHomeButton = () => {
  const navigate = useNavigate();
  const resetQuizState = useQuizStore((state) => state.resetQuizState);

  const handleRestart = () => {
    resetQuizState();
    navigate("/fullstack-trainer", {});
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
