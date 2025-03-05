
import { BaseButton } from "sebu-dev-react-lib";
import type { Option, Question } from "../../../Question/type/QuestionType";
import useQuizStore from "../../../store/QuizStore";

interface CheckedAnswerListProps {
  question: Question;
  selectedOptionIds?: number[]; 
}

export const CheckedAnswerList = ({ question, selectedOptionIds }: CheckedAnswerListProps) => {
  const { quizSet } = useQuizStore();

  const getAnswerState = (option: Option) => {
    const answer = quizSet.answers.find((a) => a.question.id === question.id);
    const userAnswer = answer?.userAnswers.find((ua) => ua.option.id === option.id);
    const isSelected = selectedOptionIds?.includes(option.id) ?? userAnswer?.isSelected ?? false;
    const isCorrect = option.correct;

    if (isSelected) {
      return isCorrect ? "bg-cyan-500" : "bg-red-500"; // Ausgewählt korrekt/falsch
    }
    return isCorrect ? "bg-green-400/60" : "bg-gray-600"; // Nicht ausgewählt, korrekt/falsch
  };

  return (
    <ul className="w-full space-y-2">
      {question.options.map((option) => (
        <li key={option.id} className="flex flex-col">
          <BaseButton
            label={option.text}
            className={`text-sm w-full text-left ${getAnswerState(option)}`}
            hoverEffect={{ scale: 1 }}
            tapEffect={{ scale: 1 }}
            disabled // Deaktiviert, da nur zur Anzeige
          />
        </li>
      ))}
    </ul>
  );
};