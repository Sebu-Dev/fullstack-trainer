import { useState } from "react";
import { DangerButton } from "sebu-dev-react-lib";
import { useQuizNavigation } from "../../../routes/useQuizNavigation";
import useQuizStore from "../../../store/QuizStore";
import { BackButton } from "../../../ui-components/BackButton";
import { QuizIntroduction } from "./QuizIntroduction";
import { QuizLayout } from "./QuizLayout";

export const Quiz = () => {
  const { quizSet } = useQuizStore();
  const [showPopup, setShowPopup] = useState(true);
  const { showQuizResults } = useQuizNavigation();

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleQuizSubmit = () => {
    showQuizResults();
  };

  const SubmitButton = () => (
    <DangerButton label="Test abschicken" handleOnClick={handleQuizSubmit} />
  );

  return (
    <>
      <QuizLayout
        questions={quizSet.questions}
        selectedOptionIds={{}} 
        footer={
          <div className="flex justify-between pb-16">
            <SubmitButton />
            <BackButton />
          </div>
        }
      />
      {showPopup && <QuizIntroduction handleOnClick={handleClosePopup} />}
    </>
  );
};