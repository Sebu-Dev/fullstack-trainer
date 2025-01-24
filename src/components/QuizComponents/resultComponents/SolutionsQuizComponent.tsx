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
  const { quizSet } = useQuizStore();

  const calculateCardColor = () => {
    const answer = quizSet.answers.find((a) => a.question.id === question.id);
    const allCorrect = answer?.userAnswers.every(
      (ua) => ua.isSelected === ua.option.isCorrect
    );

    return allCorrect ? "bg-green-600/30" : "bg-red-600/10";
  };

  return (
    <Card
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
        />
      </div>
    </Card>
  );
};
