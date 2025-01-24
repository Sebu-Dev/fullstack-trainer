import { useCallback, useEffect, useMemo } from "react";
import useQuizStore from "../../Question/store/QuizStore";
import { BackButton } from "../../ui-components/BackButton";
import { CreateQuizButton } from "./CreateQuizButton";
import { BaseButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

export const FilterQuestions = () => {
  const {
    quizset: quizSet,
    filterQuestionsByCategories,
    selectedCategories,
    setSelectedCategories: setStoreSelectedCategories,
  } = useQuizStore();

  // Berechnung aller einzigartigen Kategorien
  const allCategories = useMemo(() => {
    const uniqueCategories = new Set<string>();
    quizSet?.forEach((question) => {
      question.category.forEach((category) => uniqueCategories.add(category));
    });
    return Array.from(uniqueCategories);
  }, [quizSet]);

  // Bearbeitung der Auswahl/Deselektion von Kategorien
  const handleCategorySelection = useCallback(
    (category: string) => {
      const updatedCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((cat) => cat !== category)
        : [...selectedCategories, category];

      // Setze die Kategorien im Store
      setStoreSelectedCategories(updatedCategories);
    },
    [selectedCategories, setStoreSelectedCategories]
  );

  // Überwacht Änderungen in den ausgewählten Kategorien und filtert die Fragen
  useEffect(() => {
    filterQuestionsByCategories();
  }, [selectedCategories, filterQuestionsByCategories]);

  return (
    <div>
      <h2>Filter Questions</h2>
      <div className="gap-4 flex">
        {allCategories.map((category) => {
          const isSelected = selectedCategories.includes(category);
          const buttonClass = `text-xs ${
            isSelected ? "bg-purple-400/40 font-bold" : "bg-purple-700/40"
          }`;
          return (
            <BaseButton
              label={category}
              key={category}
              className={` ${buttonClass} hover:bg-purple-600/50`}
              handleOnClick={() => handleCategorySelection(category)}
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
