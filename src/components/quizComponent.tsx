import { BaseButton, Card, PrimaryButton } from "sebu-dev-react-lib";
import type {
  AnswerOption,
  Question,
} from "../types/QuestionType/QuestionType";

interface QuizComponentProps {
  question: Question;
  onAnswerSelect: (selectedAnswer: AnswerOption) => void;
}

const AnswerList = ({
  answerOptions,
  onAnswerSelect,
}: {
  answerOptions: AnswerOption[];
  onAnswerSelect: (selectedAnswer: AnswerOption) => void;
}) => (
  <ul className="w-full">
    {answerOptions.map((option, index) => (
      <li key={index} className="flex flex-col">
        <PrimaryButton
          handleOnClick={() => onAnswerSelect(option)}
          hoverEffect={{ scale: 1.01 }}
          tapEffect={{ scale: 1.005 }}
          label={option.text}
        />
      </li>
    ))}
  </ul>
);

const QuestionImage = ({ imageUrl }: { imageUrl?: string }) =>
  imageUrl ? (
    <img
      src={imageUrl}
      alt="Question"
      className="w-full h-auto mb-4 rounded-md"
    />
  ) : null;

const QuestionDetails = ({
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

export const QuizComponent = ({
  question,
  onAnswerSelect,
}: QuizComponentProps) => {
  return (
    <div className="  w-1/2">
      <Card title={question.questionText} themeMode="light" visualEffect="blur">
        <div className="flex flex-col items-start">
          <BaseButton
            className="bg-red-500"
            handleOnClick={function (): void {}}
          ></BaseButton>
          <QuestionImage imageUrl={question.imageUrl} />
          <AnswerList
            answerOptions={question.answerOptions}
            onAnswerSelect={onAnswerSelect}
          />
          <QuestionDetails
            category={question.category}
            difficultyLevel={question.difficultyLevel}
            explanation={question.explanation}
          />
        </div>
      </Card>
    </div>
  );
};
