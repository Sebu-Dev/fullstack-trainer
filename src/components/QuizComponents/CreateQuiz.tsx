import useQuizStore from "../../Question/zustand/QuizStore";
import { shuffleArray } from "../../utils/helpers";
import { BaseButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

export const CreateQuiz = () => {
  const { createQuiz } = useQuizStore();
  const { quizSet, setQuizSet } = useQuizStore();

  const handleCreateQuiz = () => {
    const shuffled = shuffleArray(quizSet);
    const newQuizSet = shuffled.slice(0, 5);
    setQuizSet(newQuizSet);
    createQuiz(newQuizSet);
  };

  return (
    <BaseButton handleOnClick={handleCreateQuiz} className="bg-green-600/60">
      Create Quiz
    </BaseButton>
  );
};
