import { BaseButton } from "sebu-dev-react-lib";
import { useQuizNavigation } from "../routes/useQuizNavigation";

export const BackHomeButton = () => {
  const { restartQuiz } = useQuizNavigation();

  return (
    <BaseButton
      className="w-full sm:w-auto py-3 px-8 text-lg bg-gradient-to-r from-cyan-400 to-cyan-700 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-800 font-bold"
      handleOnClick={restartQuiz}
    >
      Neustarten
    </BaseButton>
  );
};
