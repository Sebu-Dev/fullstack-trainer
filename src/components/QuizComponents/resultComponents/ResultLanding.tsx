import useQuizStore from "../../../Question/store/QuizStore";

export const ResultLanding = () => {
  const { calculatePoints } = useQuizStore();
  const { totalPoints, categoryPoints } = calculatePoints();
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-20 text-cyan-400 md:text-6xl lg:text-7xl">
        <span className="block lg:hidden">Quiz Ergebnis</span>
        <span className="hidden lg:block">Dein Quiz Ergebnis</span>
      </h2>

      <div className="  text-center text-xl md:text-2xl">
        <p>Gesamtpunkte: {totalPoints.toFixed(1)}</p>
        <p>Easy: {categoryPoints.easy.toFixed(1)} Punkte</p>
        <p>Medium: {categoryPoints.medium.toFixed(1)} Punkte</p>
        <p>Hard: {categoryPoints.hard.toFixed(1)} Punkte</p>
      </div>
    </div>
  );
};
