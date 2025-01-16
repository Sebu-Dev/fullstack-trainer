import type { AnswerOption, Question } from "../../Question/type/QuestionType";
import useQuizStore from "../../Question/zustand/QuizStore";
import { PrimaryButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";
interface AnswerListProps {
  question: Question;
}
export const AnswerList = ({ question }: AnswerListProps) => {
  const { selectedAnswers, toggleAnswer, setUserAnswer } = useQuizStore(
    (state) => ({
      selectedAnswers: state.userAnswers[question.id] || [],
      toggleAnswer: state.toggleAnswer,
      setUserAnswer: state.setUserAnswer,
    })
  );
  const handleAnswerSelect = (answer: AnswerOption) => {
    toggleAnswer(question.id, answer);
    setUserAnswer(question.id, selectedAnswers);
  };
  return (
    <ul className="w-full">
      {question.answerOptions.map((option, index) => (
        <li key={index} className="flex flex-col">
          <PrimaryButton
            handleOnClick={() => handleAnswerSelect(option)}
            hoverEffect={{ scale: 1.01 }}
            tapEffect={{ scale: 1.005 }}
            label={option.text}
            bgColor={selectedAnswers.includes(option) ? "bg-blue-500" : ""}
          />
        </li>
      ))}
    </ul>
  );
};
