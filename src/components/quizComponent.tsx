import { Card } from "sebu-dev-react-lib";

type AnswerOption = {
  text: string;
  isCorrect: boolean;
};

type Question = {
  id: string;
  questionText: string;
  answerOptions: AnswerOption[];
  difficultyLevel?: "easy" | "medium" | "hard";
  category?: string;
  explanation?: string;
  imageUrl?: string;
};

interface QuizComponentProps {
  question: Question;
  onAnswerSelect: (selectedAnswer: AnswerOption) => void;
}

export const QuizComponent = ({
  question,
  onAnswerSelect,
}: QuizComponentProps) => {
  return (
    <Card title={question.questionText}>
      <div className="flex flex-col items-start">
        {/* Bild zur Frage */}
        {question.imageUrl && (
          <img
            src={question.imageUrl}
            alt="Question"
            className="w-full h-auto mb-4 rounded-md"
          />
        )}

        {/* Antwortoptionen */}
        <ul className="w-full">
          {question.answerOptions.map((option, index) => (
            <li key={index} className="my-2">
              <button
                onClick={() => onAnswerSelect(option)}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                {option.text}
              </button>
            </li>
          ))}
        </ul>

        {/* Kategorie und Schwierigkeitsgrad */}
        <div className="mt-4 text-sm text-gray-500 italic">
          {question.category && <p>Kategorie: {question.category}</p>}
          {question.difficultyLevel && (
            <p>Schwierigkeit: {question.difficultyLevel}</p>
          )}
        </div>

        {/* Erklärung */}
        {question.explanation && (
          <p className="mt-4 text-gray-700">{question.explanation}</p>
        )}
      </div>
    </Card>
  );
};
