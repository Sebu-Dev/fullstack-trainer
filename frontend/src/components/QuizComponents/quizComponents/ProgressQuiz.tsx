// src/components/ProgressQuiz.tsx
import React, { useEffect } from "react";

import { QuizComponent } from "./QuizComponent";
import useQuizStore from "../../../store/QuizStore";
import { BackHomeButton } from "../../../ui-components/BackHomeButton";


export const ProgressQuiz: React.FC = () => {
  const { quizSet, generateProgressQuizSet, progressModeState, setProgressModeState } = useQuizStore();

  useEffect(() => {
    if (quizSet.questions.length === 0) generateProgressQuizSet();
  }, [generateProgressQuizSet]);

  const handleAnswer = (questionId: string, optionId: number) => {
    const answer = quizSet.answers.find(a => a.question.id === questionId);
    const isCorrect = answer?.achievedPoints === 4;
    setProgressModeState({
      ...progressModeState,
      [questionId]: {
        status: isCorrect ? "correct" : "incorrect",
        attempts: (progressModeState[questionId]?.attempts || 0) + 1,
      },
    });

    const allAnswered = quizSet.questions.every(q => progressModeState[q.id]?.status !== "unanswered");
    if (allAnswered) generateProgressQuizSet();
  };

  return (
    <div className="px-4 py-8 max-w-screen-md mx-auto">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Progress-Modus</h2>
      <div className="grid grid-cols-1 gap-4">
        {quizSet.questions.map(q => (
          <QuizComponent key={q.id} question={q} onAnswer={handleAnswer} />
        ))}
      </div>
      <BackHomeButton />
    </div>
  );
};