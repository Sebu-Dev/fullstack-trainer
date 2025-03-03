// src/components/AnswerList.tsx
import React from "react";
import { BaseButton } from "sebu-dev-react-lib";
import type { Question } from "../../../Question/type/QuestionType";
import useQuizStore from "../../../store/QuizStore";

interface AnswerListProps {
  question: Question;
  onAnswer?: (questionId: string, optionId: number) => void; // Angepasste Typisierung
}

export const AnswerList = ({ question, onAnswer }: AnswerListProps) => {
  const { quizSet, updateUserAnswer } = useQuizStore();

  const userAnswers = quizSet.answers.find(
    (answer) => answer.question.id === question.id
  )?.userAnswers;

  const handleAnswerSelect = (optionId: number) => {
    if (onAnswer) {
      // Für Progress- und Endlos-Modus: Übergibt questionId und optionId
      onAnswer(question.id, optionId);
    } else {
      // Für Prüfungsmodus: Standard-Update über den Store
      updateUserAnswer(question.id, optionId);
    }
  };

  return (
    <ul className="w-full space-y-2">
      {question.options.map((option) => {
        const isSelected = userAnswers?.find(
          (ua) => ua.option.id === option.id
        )?.isSelected ?? false;

        return (
          <li key={option.id} className="flex flex-col">
            <BaseButton
              handleOnClick={() => handleAnswerSelect(option.id)}
              hoverEffect={{ scale: 1.01 }}
              tapEffect={{ scale: 1.005 }}
              label={option.text}
              className={`w-full text-left ${
                isSelected ? "bg-cyan-500" : "bg-gray-600/70"
              }`}
            />
          </li>
        );
      })}
    </ul>
  );
};