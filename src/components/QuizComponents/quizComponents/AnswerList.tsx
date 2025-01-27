import useQuizStore from "../../../Question/store/QuizStore";
import type { Question } from "../../../Question/type/QuestionType";
import { BaseButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

interface AnswerListProps {
  question: Question;
}

export const AnswerList = ({ question }: AnswerListProps) => {
  const { quizSet, updateUserAnswer } = useQuizStore();

  const userAnswers = quizSet.answers.find(
    (answer) => answer.question.text === question.text
  )?.userAnswers;

  const handleAnswerSelect = (optionText: string) => {
    updateUserAnswer(question.id, optionText);
  };

  return (
    <ul className="w-full">
      {question.options.map((option, index) => {
        const isSelected = userAnswers?.find(
          (ua) => ua.option.text === option.text
        )?.isSelected;

        return (
          <li key={index} className="flex flex-col">
            <BaseButton
              handleOnClick={() => handleAnswerSelect(option.text)}
              hoverEffect={{ scale: 1.01 }}
              tapEffect={{ scale: 1.005 }}
              label={option.text}
              className={isSelected ? "bg-cyan-500" : "bg-gray-600/70"}
            />
          </li>
        );
      })}
    </ul>
  );
};
