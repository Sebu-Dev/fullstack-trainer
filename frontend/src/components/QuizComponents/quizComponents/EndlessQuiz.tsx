// src/components/EndlessQuiz.tsx
import React, { useState, useEffect } from "react";
import { BaseButton } from "sebu-dev-react-lib";
import type { Question, QuizSet } from "../../../Question/type/QuestionType";
import { QuizService } from "../../../services/QuizService";
import { ScoringService } from "../../../services/ScoringService";
import useQuizStore from "../../../store/QuizStore";
import { BackHomeButton } from "../../../ui-components/BackHomeButton";
import { QuizComponent } from "./QuizComponent";
import { SolutionsQuizComponent } from "../resultComponents/SolutionsQuizComponent";

export const EndlessQuiz: React.FC = () => {
  const { generateEndlessNextQuestion, endlessModeState, setEndlessModeState, updateQuestionStats } = useQuizStore();
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedOptionIds, setSelectedOptionIds] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [localQuizSet, setLocalQuizSet] = useState<QuizSet | null>(null);

  useEffect(() => {
    if (!currentQuestion) {
      loadNextQuestion();
    }
  }, [currentQuestion]);

  const loadNextQuestion = () => {
    const nextQuestion = generateEndlessNextQuestion();
    if (nextQuestion) {
      const tempQuizSet = QuizService.generateQuizSet([nextQuestion], [], 1);
      setLocalQuizSet(tempQuizSet);
      setCurrentQuestion(nextQuestion);
    }
  };

  const handleAnswer = (questionId: string, optionId: number) => {
    setSelectedOptionIds((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleConfirm = () => {
    if (!currentQuestion || !localQuizSet || selectedOptionIds.length === 0) return;

    let updatedQuizSet = localQuizSet;
    selectedOptionIds.forEach((optionId) => {
      updatedQuizSet = QuizService.updateAnswer(updatedQuizSet, currentQuestion.id, optionId);
    });

    const answer = updatedQuizSet.answers.find((a) => a.question.id === currentQuestion.id);
    if (answer) {
      const points = ScoringService.calculateQuestionPoints(answer);
      ScoringService.updateStatsAfterAnswer(answer, updateQuestionStats);
    }

    if (endlessModeState.mode === "random") {
      setEndlessModeState({
        ...endlessModeState,
        answered: [...(endlessModeState.answered || []), currentQuestion.id],
      });
    } else {
      setEndlessModeState({
        ...endlessModeState,
        lastIndex: (endlessModeState.lastIndex || 0) + 1,
      });
    }

    setLocalQuizSet(updatedQuizSet); // Speichere das aktualisierte QuizSet für die Auswertung
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setSelectedOptionIds([]);
    setShowResult(false);
    setLocalQuizSet(null);
    setCurrentQuestion(null); // Trigger useEffect für neue Frage
  };

  return (
    <div className="px-4 py-8 max-w-screen-md mx-auto">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Endlos-Modus</h2>
      {currentQuestion ? (
        <div className="flex flex-col gap-4">
          {!showResult ? (
            <>
              <QuizComponent
                question={currentQuestion}
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
              <SolutionsQuizComponent question={currentQuestion} />
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