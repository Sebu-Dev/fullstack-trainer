
import { Card } from "sebu-dev-react-lib";
import type { Question } from "../../../Question/type/QuestionType";
import { QuestionDetails } from "../QuestionDetails";
import { QuestionImage } from "../QuestionImg";
import { AnswerList } from "./AnswerList";
import useQuizStore from "../../../store/QuizStore";

interface QuizComponentProps {
  question: Question;
  onAnswer?: (questionId: string, optionId: number) => void;
  selectedOptionIds?: number[]; 
}

export const QuizComponent = ({ question, onAnswer, selectedOptionIds }: QuizComponentProps) => {
  const { updateUserAnswer } = useQuizStore();

  const handleAnswer = (questionId: string, optionId: number) => {
    if (onAnswer) {
      onAnswer(questionId, optionId);
    } else {
      updateUserAnswer(questionId, optionId);
    }
  };

  return (
    <Card
      title={question.text}
      themeMode="light"
      className="w-full max-w-md mx-auto bg-neutral-900/50"
    >
      <div className="flex flex-col items-start gap-4 p-4">
        <QuestionImage imageUrl={question.imageUrl} />
        <AnswerList question={question} onAnswer={handleAnswer} selectedOptionIds={selectedOptionIds} />
        <QuestionDetails category={question.categories} difficultyLevel={question.difficulty} />
      </div>
    </Card>
  );
};