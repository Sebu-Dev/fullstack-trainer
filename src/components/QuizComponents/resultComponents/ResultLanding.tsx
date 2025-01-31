import { useState } from "react";
import { Outlet } from "react-router-dom";
import { BaseButton } from "sebu-dev-react-lib";
import { useQuizNavigation } from "../../../routes/useQuizNavigation";
import { ScoringService } from "../../../services/ScoringService";
import useQuizStore from "../../../store/QuizStore";
import { BackHomeButton } from "../../../ui-components/BackHomeButton";

export const ResultLanding = () => {
  const { quizSet, getTotalPoints } = useQuizStore();
  const [showResult, setShowResult] = useState(false);
  const totalPoints = getTotalPoints();
  const categoryPoints = ScoringService.calculateCategoryPoints(
    quizSet.answers,
  );
  const { showSolution } = useQuizNavigation();

  const handleOnClick = () => {
    setShowResult(true);
    showSolution();
  };

  return (
    <div className="px-4 py-8 text-center">
      {/* Titel */}
      <h2 className="text-4xl font-bold mb-8 text-cyan-400 md:text-6xl lg:text-7xl">
        <span className="block lg:hidden">Quiz Ergebnis</span>
        <span className="hidden lg:block">Dein Quiz Ergebnis</span>
      </h2>

      {/* Ergebnisse */}
      <div className="space-y-4 text-xl md:text-2xl">
        <p>Gesamtpunkte: {totalPoints}</p>
        <p>Mögliche Punkte: {quizSet.totalPossiblePoints}</p>
        <p>Easy: {categoryPoints.easy} Punkte</p>
        <p>Medium: {categoryPoints.medium} Punkte</p>
        <p>Hard: {categoryPoints.hard} Punkte</p>
      </div>

      {/* "Lösungen anzeigen" Button */}
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

      {/* Ergebnisanzeige */}
      {showResult && (
        <div className="mt-8">
          <BackHomeButton />
        </div>
      )}
      <Outlet />

      {/* Optional: Back Button unten */}
    </div>
  );
};
