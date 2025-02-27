interface QuestionDetailsProps {
  category?: string[];
  difficultyLevel?: string | undefined;
  explanation?: string | undefined;
  questionId?: string | undefined;
}
export const QuestionDetails = ({
  category,
  difficultyLevel,
  explanation,
}: QuestionDetailsProps) => {
  const categoryText = category?.join(", ");
  let className = "";
  switch (difficultyLevel) {
    case "easy": {
      className = " text-green-300";
      break;
    }
    case "medium": {
      className = " text-yellow-300";
      break;
    }
    case "hard": {
      className = " text-red-300";
      break;
    }
  }

  return (
    <div className="mt-4 text-sm text-gray-500 italic flex flex-col ">
      {category && <p>Kategorie: {categoryText}</p>}
      {difficultyLevel && (
        <p className={`${className}`}>Schwierigkeit: {difficultyLevel}</p>
      )}
      {explanation && (
        <p className="mt-4 text-base text-emerald-400">{explanation}</p>
      )}
    </div>
  );
};
