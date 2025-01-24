import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useQuizStore from "../../../Question/store/QuizStore";
import { QuizComponent } from "./QuizComponent";
import { QuizIntroduction } from "./QuizIntroduction";
import { DangerButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

export const Quiz = () => {
  const { quizSet } = useQuizStore();
  const navigator = useNavigate();
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleQuizSubmit = () => {
    navigator("/quiz-result");
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 pb-5 relative z-0">
        {quizSet.questions.map((question) => (
          <QuizComponent key={question.id} question={question} />
        ))}
      </div>
      <div className="pb-16">
        <DangerButton
          label="Test abschicken"
          handleOnClick={handleQuizSubmit}
        />
      </div>

      {/* Popup Overlay */}
      {showPopup && <QuizIntroduction handleOnClick={handleClosePopup} />}
    </>
  );
};
