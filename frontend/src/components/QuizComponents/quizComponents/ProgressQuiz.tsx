import { useState } from "react";
import useQuizStore from "../../../store/QuizStore";
import { BackHomeButton } from "../../../ui-components/BackHomeButton";
import { NextSetButton } from "../../../ui-components/NextSetButton";

import { QuizLayout } from "./QuizLayout";
import { ConfirmAnswersButton } from "../../../ui-components/ConfirmAnswerButton";

export const ProgressQuiz: React.FC = () => {
  const {
    progressQuizSet,
    generateProgressQuizSet,
    updateProgressAnswer,
    progressModeState,
    setProgressModeState,
    selectedCategories,
    filterQuestions,
  } = useQuizStore();
  const [selectedOptionIds, setSelectedOptionIds] = useState<Record<string, number[]>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: string, optionId: number) => {
    setSelectedOptionIds((prev) => ({
      ...prev,
      [questionId]: prev[questionId]?.includes(optionId)
        ? prev[questionId].filter((id) => id !== optionId)
        : [...(prev[questionId] || []), optionId],
    }));
  };

  const handleConfirm = () => {
    progressQuizSet.questions.forEach((question) => {
      const optionIds = selectedOptionIds[question.id] || [];
      optionIds.forEach((optionId) => updateProgressAnswer(question.id, optionId));
    });

    const updatedProgressState = progressQuizSet.questions.reduce(
      (acc, question) => {
        const answer = progressQuizSet.answers.find((a) => a.question.id === question.id);
        const isCorrect = answer?.achievedPoints === 4;
        acc[question.id] = {
          status: isCorrect ? "correct" : "incorrect" as "correct" | "incorrect",
          attempts: (progressModeState[question.id]?.attempts || 0) + 1,
        };
        return acc;
      },
      {} as Record<string, { status: "unanswered" | "correct" | "incorrect"; attempts: number }>
    );

    setProgressModeState(updatedProgressState);
    setShowResult(true);
  };

  const handleNextSet = () => {
    setSelectedOptionIds({});
    setShowResult(false);

    const questionsInCategories = filterQuestions(selectedCategories);
    const allAnswered = questionsInCategories.every(
      (q) => progressModeState[q.id]?.status !== "unanswered"
    );
    if (allAnswered) {
      // setSelectedCategories([]); // Wechsle zu allen Fragen (auskommentiert wie im Original)
    }

    generateProgressQuizSet();
  };

  return (
    <QuizLayout
      questions={progressQuizSet.questions}
      selectedOptionIds={selectedOptionIds}
      showResult={showResult}
      onAnswer={handleAnswer}
      header={<h2 className="text-2xl font-bold text-cyan-400 mb-6">Progress-Modus</h2>}
      footer={
        <div className="mt-6 flex flex-col gap-4">
          {!showResult ? (
            <ConfirmAnswersButton
              selectedOptionIds={selectedOptionIds}
              onConfirm={handleConfirm}
            />
          ) : (
            <NextSetButton onNextSet={handleNextSet} />
          )}
          <BackHomeButton />
        </div>
      }
    />
  );
};