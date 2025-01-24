import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useQuizStore from "../../../Question/store/QuizStore";
import { ScoringService } from "../../../services/ScoringService";
import { BaseButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

export const ResultLanding = () => {
  const { quizSet, getTotalPoints } = useQuizStore();
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();
  const totalPoints = getTotalPoints();
  const categoryPoints = ScoringService.calculateCategoryPoints(
    quizSet.answers
  );

  const handleOnClick = () => {
    setShowResult(true);
    navigate("checked-answers");
  };

  return (
    <div className="px-4 py-8 text-center">
      <h2 className="text-4xl font-bold mb-8 text-cyan-400 md:text-6xl lg:text-7xl">
        <span className="block lg:hidden">Quiz Ergebnis</span>
        <span className="hidden lg:block">Dein Quiz Ergebnis</span>
      </h2>

      <div className="space-y-4 text-xl md:text-2xl">
        <p>Gesamtpunkte: {totalPoints}</p>
        <p>Mögliche Punkte: {quizSet.totalPossiblePoints}</p>
        <p>Easy: {categoryPoints.easy} Punkte</p>
        <p>Medium: {categoryPoints.medium} Punkte</p>
        <p>Hard: {categoryPoints.hard} Punkte</p>
      </div>

      {!showResult && (
        <div className="mt-8 flex justify-center">
          <BaseButton
            handleOnClick={handleOnClick}
            className="w-full sm:w-auto py-3 px-8 text-lg bg-gradient-to-r from-cyan-400 to-cyan-700 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-800 font-bold"
          >
            Lösungen anzeigen
          </BaseButton>
        </div>
      )}

      {showResult && (
        <div className="mt-8">
          <Outlet />
        </div>
      )}
    </div>
  );
};
