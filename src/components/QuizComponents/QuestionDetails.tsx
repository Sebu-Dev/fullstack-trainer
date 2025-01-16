export const QuestionDetails = ({
  category,
  difficultyLevel,
  explanation,
}: {
  category: string | string[];
  difficultyLevel?: string;
  explanation?: string;
}) => (
  <div className="mt-4 text-sm text-gray-500 italic">
    {category && <p>Kategorie: {category}</p>}
    {difficultyLevel && <p>Schwierigkeit: {difficultyLevel}</p>}
    {explanation && <p className="mt-4 text-gray-700">{explanation}</p>}
  </div>
);
