import useQuizStore from "../../../Question/store/QuizStore";
import type { Option, Question } from "../../../Question/type/QuestionType";
import { BaseButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

interface CheckedAnswerListProps {
  question: Question;
}

export const CheckedAnswerList = ({ question }: CheckedAnswerListProps) => {
  const { userAnswers } = useQuizStore();

  const isAnswerCorrect = (answer: Option) => {
    return answer.isCorrect;
  };

  const getButtonColor = (question: Question, option: Option) => {
    const userAnswersForQuestion = userAnswers[question.id] || [];

    const userSelectedAnswer = userAnswersForQuestion.includes(option);

    if (userSelectedAnswer) {
      if (isAnswerCorrect(option)) {
        return "bg-cyan-500";
      } else {
        return "bg-red-500";
      }
    }

    if (isAnswerCorrect(option)) {
      return "bg-green-400/60";
    }

    return "bg-gray-600";
  };

  return (
    <ul className="w-full">
      {question.options.map((option, index) => (
        <li key={index} className="flex flex-col">
          <BaseButton
            handleOnClick={() => {}}
            label={option.text}
            className={`max-h-20 text-[clamp(12px,_3vw,_14px)] hover:cursor-default ${getButtonColor(
              question,
              option
            )}`}
          />
        </li>
      ))}
    </ul>
  );
};
