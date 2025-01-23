import useQuizStore from "../../../Question/store/QuizStore";
import type { Question } from "../../../Question/type/QuestionType";
import { QuestionDetails } from "../QuestionDetails";
import { QuestionImage } from "../QuestionImg";
import { CheckedAnswerList } from "./CheckedAnswerList";
import { Card } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";
interface SolutionsQuizComponentProps {
  question: Question;
}
export const SolutionsQuizComponent = ({
  question,
}: SolutionsQuizComponentProps) => {
  const { userAnswers } = useQuizStore();

  const calculateCardColor = () => {
    const userSelectedAnswers = userAnswers[question.id] || [];
    const correctAnswers = question.options.filter((opt) => opt.isCorrect);

    const isCorrect =
      correctAnswers.every((opt) => userSelectedAnswers.includes(opt)) &&
      userSelectedAnswers.every((opt) => opt.isCorrect);

    return isCorrect ? "bg-green-600/30" : "bg-red-600/10";
  };

  return (
    <Card
      key={question.id}
      title={question.text}
      themeMode="light"
      className={`h-full ${calculateCardColor()}`}
    >
      <div className="flex flex-col items-start">
        <QuestionImage imageUrl={question.imageUrl} />
        <CheckedAnswerList question={question} />
        <QuestionDetails
          category={question.category}
          difficultyLevel={question.difficulty}
          explanation={question.explanation}
          questionId={question.id}
        />
      </div>
    </Card>
  );
};
