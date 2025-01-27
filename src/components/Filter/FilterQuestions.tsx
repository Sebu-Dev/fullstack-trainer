import { useCallback, useMemo } from "react";
import useQuizStore from "../../Question/store/QuizStore";
import { BackButton } from "../../ui-components/BackButton";
import { CreateQuizButton } from "./CreateQuizButton";
import { BaseButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

export const FilterQuestions = () => {
  const {
    filterQuestions,
    selectedCategories,
    setSelectedCategories: setSelectedCategories,
    getAllCategories,
  } = useQuizStore();

  const allCategories = useMemo(() => getAllCategories(), [getAllCategories]);

  const toggleCategory = useCallback(
    (category: string) => {
      const updatedCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((cat) => cat !== category)
        : [...selectedCategories, category];

      setSelectedCategories(updatedCategories);
      filterQuestions(updatedCategories);
    },
    [selectedCategories, setSelectedCategories, filterQuestions]
  );

  return (
    <div>
      <h2>Filter Questions</h2>
      <div className="gap-4 flex">
        {allCategories.map((category: string) => {
          const isSelected = selectedCategories.includes(category);
          const buttonClass = `text-xs ${
            isSelected ? "bg-purple-400/40 font-bold" : "bg-purple-700/40"
          }`;
          return (
            <BaseButton
              label={category}
              key={category}
              className={`${buttonClass} hover:bg-purple-600/50`}
              handleOnClick={() => toggleCategory(category)}
            />
          );
        })}
      </div>
      <div className="flex justify-between">
        <CreateQuizButton />
        <BackButton />
      </div>
    </div>
  );
};
