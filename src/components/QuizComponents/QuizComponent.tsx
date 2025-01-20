import type { Question } from "../../Question/type/QuestionType";
import { AnswerList } from "./AnswerList";
import { QuestionDetails } from "./QuestionDetails";
import { QuestionImage } from "./QuestionImg";
import { Card } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

interface QuizCompontentProps {
  question: Question;
}

export const QuizComponent = ({ question }: QuizCompontentProps) => {
  return (
    <div className="my-auto h-full w-auto max-w-md">
      <Card title={question.questionText} themeMode="light">
        <div className="flex flex-col items-start">
          <QuestionImage imageUrl={question.imageUrl} />
          <AnswerList question={question} />
          <QuestionDetails
            category={question.category}
            difficultyLevel={question.difficultyLevel}
          />
        </div>
      </Card>
    </div>
  );
};
