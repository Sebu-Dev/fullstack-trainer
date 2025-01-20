import useQuizStore from "../../Question/store/QuizStore";
import type { AnswerOption, Question } from "../../Question/type/QuestionType";
import { BaseButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

interface AnswerListProps {
  question: Question;
}
export const AnswerList = ({ question }: AnswerListProps) => {
  const { userAnswers } = useQuizStore();
  const selectedAnswers = userAnswers[question.id] || [];
  const { toggleAnswer } = useQuizStore();

  const handleAnswerSelect = (answer: AnswerOption) => {
    toggleAnswer(question.id, answer);
  };

  return (
    <ul className="w-full">
      {question.answerOptions.map((option, index) => (
        <li key={index} className="flex flex-col">
          <BaseButton
            handleOnClick={() => handleAnswerSelect(option)}
            hoverEffect={{ scale: 1.01 }}
            tapEffect={{ scale: 1.005 }}
            label={option.text}
            className={
              selectedAnswers.includes(option)
                ? "bg-cyan-500"
                : "bg-gray-600/70"
            }
          />
        </li>
      ))}
    </ul>
  );
};
