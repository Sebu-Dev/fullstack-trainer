import { useCallback, useMemo, useState } from "react";
import questionsData from "../../Question/Questions";
import useQuizStore from "../../Question/zustand/QuizStore";
import { BaseButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

export const FilterQuestions = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { questionList: questions, setQuestions } = useQuizStore();

  const allCategories = useMemo(() => {
    const uniqueCategories = new Set<string>();
    questions.forEach((question) => {
      question.category.forEach((categoryValue) => {
        uniqueCategories.add(categoryValue);
      });
    });

    return Array.from(uniqueCategories);
  }, [questions]);

  const filterQuestionsByCategories = useCallback(
    (categories: string[]) => {
      const filteredQuestions = questionsData.filter((question) =>
        categories.every((category: string) =>
          question.category.includes(category)
        )
      );

      setQuestions(filteredQuestions);
    },
    [setQuestions]
  );

  const handleCategorySelection = useCallback(
    (category: string) => {
      const updatedSelectedCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((cat) => cat !== category)
        : [...selectedCategories, category];

      setSelectedCategories(updatedSelectedCategories);
      filterQuestionsByCategories(updatedSelectedCategories);
    },
    [selectedCategories, filterQuestionsByCategories]
  );

  return (
    <div>
      <h2>FilterQuestions</h2>
      <div className="gap-4 flex">
        {allCategories.map((category) => {
          const backgroundColor = selectedCategories.includes(category)
            ? " bg-purple-400/40 "
            : " bg-purple-700/40 ";
          const fontBold = selectedCategories.includes(category)
            ? "font-bold"
            : "";
          return (
            <BaseButton
              label={category}
              className={`text-xs ${backgroundColor} ${fontBold}`}
              key={category}
              handleOnClick={() => handleCategorySelection(category)}
            />
          );
        })}
      </div>
    </div>
  );
};
