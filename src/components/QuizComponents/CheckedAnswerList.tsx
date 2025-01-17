import type { AnswerOption, Question } from "../../Question/type/QuestionType";
import useQuizStore from "../../Question/zustand/QuizStore";
import { PrimaryButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

interface CheckedAnswerListProps {
  question: Question;
}

export const CheckedAnswerList = ({ question }: CheckedAnswerListProps) => {
  const { userAnswers } = useQuizStore();

  const isAnswerCorrect = (answer: AnswerOption) => {
    return answer.isCorrect;
  };

  const getButtonColor = (question: Question, option: AnswerOption) => {
    const userAnswersForQuestion = userAnswers[question.id] || [];

    const userSelectedAnswer = userAnswersForQuestion.includes(option);

    if (userSelectedAnswer) {
      if (isAnswerCorrect(option)) {
        return "bg-blue-500";
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
      {question.answerOptions.map((option, index) => (
        <li key={index} className="flex flex-col">
          <PrimaryButton
            handleOnClick={() => {}}
            label={option.text}
            bgColor={getButtonColor(question, option)}
          />
        </li>
      ))}
    </ul>
  );
};
