import { Card } from "sebu-dev-react-lib";
import type { Question } from "../../../Question/type/QuestionType";
import useQuizStore from "../../../store/QuizStore";
import { QuestionDetails } from "../QuestionDetails";
import { QuestionImage } from "../QuestionImg";
import { CheckedAnswerList } from "./CheckedAnswerList";

interface SolutionsQuizComponentProps {
  question: Question;
  selectedOptionIds?: number[];
}

export const SolutionsQuizComponent = ({ question, selectedOptionIds }: SolutionsQuizComponentProps) => {
  const { quizSet, progressQuizSet, endlessQuizSet } = useQuizStore();
  const currentQuizSet = endlessQuizSet || progressQuizSet || quizSet; // Fallback to exam mode
  const achievedPoints = currentQuizSet.answers.find((a) => a.question.id === question.id)?.achievedPoints || 0;
  const maxPoints = 4;

  const calculateCardColor = () => {
    if (achievedPoints === maxPoints) return "bg-green-600/30";
    if (achievedPoints > 0) return "bg-yellow-500/20";
    return "bg-red-600/10";
  };

  return (
    <Card title={question.text} themeMode="light" className={`h-full ${calculateCardColor()}`}>
      <div className="flex flex-col items-start h-full">
        <div className="self-end mb-2 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">
          {achievedPoints}/{maxPoints} Punkte
        </div>
        <QuestionImage imageUrl={question.imageUrl} />
        <CheckedAnswerList question={question} selectedOptionIds={selectedOptionIds} />
        <QuestionDetails
          category={question.categories}
          difficultyLevel={question.difficulty}
          explanation={question.explanation}
        />
      </div>
    </Card>
  );
};