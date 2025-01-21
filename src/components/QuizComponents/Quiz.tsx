import { useNavigate } from "react-router-dom";
import useQuizStore from "../../Question/store/QuizStore";
import { QuizComponent } from "./QuizComponent";
import { DangerButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

export const Quiz = () => {
  const { quizSet } = useQuizStore();
  const navigator = useNavigate();
  const handleQuizSubmit = () => {
    navigator("/quiz-result");
  };
  return (
    <>
      <div className="flex flex-wrap gap-8 mx-auto justify-center">
        {quizSet.map((question) => (
          <QuizComponent key={question.id} question={question} />
        ))}
      </div>
      <div className="mt-4">
        <DangerButton
          label="Test abschicken"
          handleOnClick={handleQuizSubmit}
        />
      </div>
    </>
  );
};
