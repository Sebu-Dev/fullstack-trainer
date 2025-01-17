interface QuestionDetailsPorps {
  category?: string[];
  difficultyLevel?: string | undefined;
  explanation?: string | undefined;
  questionId?: string | undefined;
}
export const QuestionDetails = ({
  category,
  difficultyLevel,
  explanation,
  questionId,
}: QuestionDetailsPorps) => (
  <div className="mt-4 text-sm text-gray-500 italic">
    {category && <p>Kategorie: {category}</p>}
    {difficultyLevel && <p>Schwierigkeit: {difficultyLevel}</p>}
    {explanation && (
      <p className="mt-4 text-base text-emerald-400">{explanation}</p>
    )}
    {questionId && <p className="mt-4 text-xs text-red-950">{questionId}</p>}
  </div>
);
