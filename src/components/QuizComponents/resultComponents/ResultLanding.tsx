import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom"; // Importiere useNavigate
import useQuizStore from "../../../Question/store/QuizStore";
import { BaseButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

export const ResultLanding = () => {
  const { calculatePoints } = useQuizStore();
  const { totalPoints, categoryPoints } = calculatePoints();
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

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
        <p>Gesamtpunkte: {totalPoints.toFixed(1)}</p>
        <p>Easy: {categoryPoints.easy.toFixed(1)} Punkte</p>
        <p>Medium: {categoryPoints.medium.toFixed(1)} Punkte</p>
        <p>Hard: {categoryPoints.hard.toFixed(1)} Punkte</p>
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
