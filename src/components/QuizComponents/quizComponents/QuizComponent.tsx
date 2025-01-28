import type { Question } from "../../../Question/type/QuestionType";
import { QuestionDetails } from "../QuestionDetails";
import { QuestionImage } from "../QuestionImg";
import { AnswerList } from "./AnswerList";
import { Card } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

interface QuizComponentProps {
  question: Question;
}

export const QuizComponent = ({ question }: QuizComponentProps) => {
  return (
    <Card title={question.text} themeMode="light">
      <div className="flex flex-col items-start ">
        <QuestionImage imageUrl={question.imageUrl} />
        <AnswerList question={question} />
        <QuestionDetails
          category={question.category}
          difficultyLevel={question.difficulty}
        />
      </div>
    </Card>
  );
};
