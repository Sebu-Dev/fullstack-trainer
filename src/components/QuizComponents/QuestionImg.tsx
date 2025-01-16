export const QuestionImage = ({ imageUrl }: { imageUrl?: string }) =>
  imageUrl ? (
    <img
      src={imageUrl}
      alt="Question"
      className="w-full h-auto mb-4 rounded-md"
    />
  ) : null;
