import { useState, useEffect } from "react";
import { BaseButton } from "sebu-dev-react-lib";
import useQuizStore from "../../../store/QuizStore";
import { BackHomeButton } from "../../../ui-components/BackHomeButton";
import { SolutionsQuizComponent } from "../resultComponents/SolutionsQuizComponent";
import { QuizComponent } from "./QuizComponent";

export const EndlessQuiz: React.FC = () => {
  const {
    endlessQuizSet,
    endlessModeState,
    generateEndlessNextQuestion,
    updateEndlessAnswer,
    setEndlessModeState,
  } = useQuizStore();
  const [selectedOptionIds, setSelectedOptionIds] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!endlessQuizSet || endlessQuizSet.questions.length === 0) {
      const nextQuestion = generateEndlessNextQuestion();
      if (nextQuestion) {
        updateEndlessAnswer(nextQuestion.id, -1); // Initialize
      }
    }
  }, [endlessQuizSet, generateEndlessNextQuestion, updateEndlessAnswer]);

  // Adjusted to match QuizComponent's onAnswer signature
  const handleAnswer = (questionId: string, optionId: number) => {
    // questionId is not used here, but kept for type compatibility
    setSelectedOptionIds((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleConfirm = () => {
    if (!endlessQuizSet || selectedOptionIds.length === 0) return;
    selectedOptionIds.forEach((optionId) => {
      updateEndlessAnswer(endlessQuizSet.questions[0].id, optionId);
    });
    if (endlessModeState.mode === "sequential") {
      setEndlessModeState({
        ...endlessModeState,
        lastIndex: (endlessModeState.lastIndex || 0) + 1,
      });
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setSelectedOptionIds([]);
    setShowResult(false);
    const nextQuestion = generateEndlessNextQuestion();
    if (nextQuestion) {
      updateEndlessAnswer(nextQuestion.id, -1);
    }
  };

  return (
    <div className="px-4 py-8 max-w-screen-md mx-auto">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Endlos-Modus</h2>
      {endlessQuizSet && endlessQuizSet.questions.length > 0 ? (
        <div className="flex flex-col gap-4">
          {!showResult ? (
            <>
              <QuizComponent
                question={endlessQuizSet.questions[0]}
                onAnswer={handleAnswer}
                selectedOptionIds={selectedOptionIds}
              />
              <BaseButton
                handleOnClick={handleConfirm}
                className="w-full py-3 text-lg bg-cyan-500 hover:bg-cyan-600 text-white"
                disabled={selectedOptionIds.length === 0}
              >
                Antwort bestätigen
              </BaseButton>
            </>
          ) : (
            <div className="flex flex-col gap-4">
              <SolutionsQuizComponent
                question={endlessQuizSet.questions[0]}
                selectedOptionIds={selectedOptionIds}
              />
              <BaseButton
                handleOnClick={handleNextQuestion}
                className="w-full py-3 text-lg bg-purple-600 hover:bg-purple-700 text-white"
              >
                Nächste Frage
              </BaseButton>
            </div>
          )}
        </div>
      ) : (
        <p className="text-neutral-200">Keine Fragen mehr verfügbar.</p>
      )}
      <BackHomeButton />
    </div>
  );
};