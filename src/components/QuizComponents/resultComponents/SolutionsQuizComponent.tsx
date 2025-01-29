import { Card } from "sebu-dev-react-lib";
import type { Question } from "../../../Question/type/QuestionType";
import useQuizStore from "../../../store/QuizStore";
import { QuestionDetails } from "../QuestionDetails";
import { QuestionImage } from "../QuestionImg";
import { CheckedAnswerList } from "./CheckedAnswerList";

interface SolutionsQuizComponentProps {
  question: Question;
}

export const SolutionsQuizComponent = ({
  question,
}: SolutionsQuizComponentProps) => {
  const { getQuestionPoints } = useQuizStore();

  const achievedPoints = getQuestionPoints(question.id);
  const maxPoints = 4;

  const calculateCardColor = () => {
    if (achievedPoints === maxPoints) {
      return "bg-green-600/30"; // Vollständig korrekt
    } else if (achievedPoints > 0) {
      return "bg-yellow-500/20"; // Teilweise korrekt
    }
    return "bg-red-600/10"; // Keine Punkte
  };

  return (
    <Card
      title={question.text}
      themeMode="light"
      className={`h-full ${calculateCardColor()}`}
    >
      <div className="flex flex-col items-start h-full">
        {/* Punkte-Anzeige */}
        <div className="self-end mb-2 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm ">
          {achievedPoints}/{maxPoints} Punkte
        </div>

        {/* Frage-Inhalt */}

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
