import { useNavigate } from "react-router-dom";
import useQuizStore from "../../Question/zustand/QuizStore";
import { BaseButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

export const CreateQuizButton = () => {
  const { createQuiz } = useQuizStore();
  const { quizSet } = useQuizStore();

  const navigate = useNavigate();
  navigate("/");

  return (
    <BaseButton
      handleOnClick={() => createQuiz(quizSet)}
      className="bg-green-600/60"
    >
      Create Quiz
    </BaseButton>
  );
};
