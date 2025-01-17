import { useCallback, useEffect, useMemo, useState } from "react";
import useQuizStore from "../../Question/zustand/QuizStore";
import { BaseButton } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

export const FilterQuestions = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { questionList: questions, setQuizSet, quizSet } = useQuizStore();

  // Berechnung aller einzigartigen Kategorien
  const allCategories = useMemo(() => {
    const uniqueCategories = new Set<string>();
    quizSet?.forEach((question) => {
      question.category.forEach((category) => uniqueCategories.add(category));
    });
    return Array.from(uniqueCategories);
  }, [quizSet]);

  // Filtert die Fragen basierend auf den ausgewählten Kategorien
  const filterQuestionsByCategories = useCallback(
    (categories: string[]) => {
      const filteredQuestions = questions.filter((question) =>
        categories.every((category) => question.category.includes(category))
      );
      setQuizSet(filteredQuestions);
    },
    [questions, setQuizSet]
  );

  // Bearbeitung der Auswahl/Deselektion von Kategorien
  const handleCategorySelection = useCallback(
    (category: string) => {
      const updatedCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((cat) => cat !== category)
        : [...selectedCategories, category];

      setSelectedCategories(updatedCategories);
    },
    [selectedCategories]
  );

  // Überwacht Änderungen in den ausgewählten Kategorien und filtert die Fragen
  useEffect(() => {
    filterQuestionsByCategories(selectedCategories);
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
              className={buttonClass}
              handleOnClick={() => handleCategorySelection(category)}
            />
          );
        })}
      </div>
    </div>
  );
};
