import useQuizStore from "../../../Question/store/QuizStore";
import { SolutionsQuizComponent } from "./SolutionsQuizComponent";

export const QuizResult = () => {
  const { quizSet } = useQuizStore();

  return (
    <div className="flex flex-col items-center gap-8 mx-auto justify-center">
      <div className="flex flex-wrap gap-8 pb-32">
        {quizSet.map((question) => (
          <SolutionsQuizComponent key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};
