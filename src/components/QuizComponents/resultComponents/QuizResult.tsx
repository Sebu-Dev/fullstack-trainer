import useQuizStore from "../../../store/QuizStore";
import { SolutionsQuizComponent } from "./SolutionsQuizComponent";

export const QuizResult = () => {
  const { quizSet } = useQuizStore();

  return (
    <div className="flex flex-col items-center gap-8 mx-auto justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 pb-32">
        {quizSet.questions.map((question) => (
          <SolutionsQuizComponent key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};
