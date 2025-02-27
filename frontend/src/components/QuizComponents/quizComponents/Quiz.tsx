import { useState } from "react";
import { DangerButton } from "sebu-dev-react-lib";
import { useQuizNavigation } from "../../../routes/useQuizNavigation";
import useQuizStore from "../../../store/QuizStore";
import { BackButton } from "../../../ui-components/BackButton";
import { QuizComponent } from "./QuizComponent";
import { QuizIntroduction } from "./QuizIntroduction";

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

  const SubmitButton = () => {
    return (
      <DangerButton label="Test abschicken" handleOnClick={handleQuizSubmit} />
    );
  };

  return (
    <>
      <div className="flex justify-between">
        <SubmitButton />
        <BackButton />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 pb-5 relative z-0">
        {quizSet.questions.map((question) => (
          <QuizComponent key={question.id} question={question} />
        ))}
      </div>
      <div className="pb-16">
        <SubmitButton />
      </div>

      {/* Popup Overlay */}
      {showPopup && <QuizIntroduction handleOnClick={handleClosePopup} />}
    </>
  );
};
