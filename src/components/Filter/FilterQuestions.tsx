import { useEffect, useState } from "react";
import { BaseButton } from "sebu-dev-react-lib";
import questions from "../../QuestionList/Questions";

export const FilterQuestions = () => {
  const [allCategorys, setAllCategorys] = useState<string[]>([]);

  useEffect(() => {
    getAllCategorys();
  }, []);

  const getAllCategorys = () => {
    const uniqueCategories = new Set<string>();

    questions.forEach((question) => {
      question.category.forEach((categoryValue) => {
        uniqueCategories.add(categoryValue);
      });
    });

    setAllCategorys(Array.from(uniqueCategories));
  };

  return (
    <div>
      <h2>FilterQuestions</h2>
      <div className=" gap-4 flex">
        {allCategorys.map((category) => (
          <BaseButton
            label={category}
            className="bg-purple-700/40"
            key={category}
            handleOnClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          ></BaseButton>
        ))}
      </div>
    </div>
  );
};
