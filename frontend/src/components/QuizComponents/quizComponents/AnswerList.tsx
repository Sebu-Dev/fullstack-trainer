
import { BaseButton } from "sebu-dev-react-lib";
import type { Question } from "../../../Question/type/QuestionType";
import useQuizStore from "../../../store/QuizStore";

interface AnswerListProps {
  question: Question;
  selectedOptionIds?: number[]; 
  onAnswer?: (questionId: string, optionId: number) => void;
}

export const AnswerList = ({ question, selectedOptionIds, onAnswer }: AnswerListProps) => {
  const { quizSet, updateUserAnswer } = useQuizStore();

  const userAnswers = quizSet.answers.find(
    (answer) => answer.question.id === question.id
  )?.userAnswers;

  const handleAnswerSelect = (optionId: number) => {
    if (onAnswer) {
      onAnswer(question.id, optionId);
    } else {
      updateUserAnswer(question.id, optionId);
    }
  };

  return (
    <ul className="w-full space-y-2">
      {question.options.map((option) => {
        const isSelected =
          selectedOptionIds?.includes(option.id) ??
          userAnswers?.find((ua) => ua.option.id === option.id)?.isSelected ??
          false;

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