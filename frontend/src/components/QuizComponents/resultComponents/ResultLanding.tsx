// src/components/ResultLanding.tsx
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { BaseButton } from "sebu-dev-react-lib";
import { useQuizNavigation } from "../../../routes/useQuizNavigation";
import { ScoringService } from "../../../services/ScoringService";
import useQuizStore from "../../../store/QuizStore";
import { BackHomeButton } from "../../../ui-components/BackHomeButton";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const ResultLanding = () => {
  const { quizSet, getTotalPoints, questionStats } = useQuizStore();
  const [showResult, setShowResult] = useState(false);
  const totalPoints = getTotalPoints();
  const categoryPoints = ScoringService.calculateCategoryPoints(quizSet.answers);
  const { showSolution } = useQuizNavigation();

  const chartData = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [{ label: "Punkte", data: [categoryPoints.easy, categoryPoints.medium, categoryPoints.hard], backgroundColor: "rgba(75, 192, 192, 0.6)" }],
  };

  return (
    <div className="px-4 py-8 text-center max-w-screen-md mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-cyan-400">Dein Quiz Ergebnis</h2>
      <div className="space-y-4 text-lg md:text-xl">
        <p>Gesamtpunkte: {totalPoints} / {quizSet.totalPossiblePoints}</p>

      </div>
      <div className="mt-8">
        <Bar data={chartData} options={{ responsive: true }} />
      </div>
      {!showResult && (
        <BaseButton
          handleOnClick={() => { setShowResult(true); showSolution(); }}
          className="mt-4 w-full sm:w-auto py-3 px-8 text-lg bg-gradient-to-r from-cyan-400 to-cyan-700 hover:from-cyan-500 hover:to-cyan-800"
        >
          Lösungen anzeigen
        </BaseButton>
      )}
      {showResult && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-purple-400">Statistiken pro Frage</h3>
          <ul className="mt-4 space-y-2">
            {quizSet.questions.map(q => (
              <li key={q.id} className="text-neutral-200">
                {q.text}: {questionStats[q.id]?.correctCount || 0} richtig, {questionStats[q.id]?.incorrectCount || 0} falsch, Teilpunkte: {questionStats[q.id]?.partialPoints?.join(", ") || "keine"}
              </li>
            ))}
          </ul>
          <BackHomeButton />
        </div>
      )}
    </div>
  );
};