import type { Question } from "../../Question/type/QuestionType";
import { CheckedAnswerList } from "./CheckedAnswerList";
import { QuestionDetails } from "./QuestionDetails";
import { QuestionImage } from "./QuestionImg";
import { Card } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";
interface SolutionsQuizComponentProps {
  question: Question;
}
export const SolutionsQuizComponent = ({
  question,
}: SolutionsQuizComponentProps) => {
  return (
    <div className="my-auto h-full w-auto max-w-md">
      <Card key={question.id} title={question.questionText} themeMode="light">
        <div className="flex flex-col items-start">
          <QuestionImage imageUrl={question.imageUrl} />
          <CheckedAnswerList question={question} />
          <QuestionDetails
            category={question.category}
            difficultyLevel={question.difficultyLevel}
            explanation={question.explanation}
            questionId={question.id}
          />
        </div>
      </Card>
    </div>
  );
};
