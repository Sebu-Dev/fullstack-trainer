import { ReactNode } from "react";
import { QuizComponent } from "./QuizComponent";
import { SolutionsQuizComponent } from "../resultComponents/SolutionsQuizComponent";
import { Question } from "../../../Question/type/QuestionType";
import React from "react";

interface QuizLayoutProps {
  questions: Question[];
  selectedOptionIds: Record<string, number[]>;
  showResult?: boolean; 
  onAnswer?: (questionId: string, optionId: number) => void;
  header?: ReactNode;
  footer?: ReactNode;
  allAnswered?: boolean; 
  onNext?: () => void; 
}

export const QuizLayout: React.FC<QuizLayoutProps> = ({
  questions,
  selectedOptionIds,
  showResult = false,
  onAnswer,
  header,
  footer,
  allAnswered = false,
  onNext,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Bestimme die Anzahl der gleichzeitig angezeigten Fragen basierend auf Tailwind-Breakpoints
  const questionsPerPage = () => {
    if (window.innerWidth >= 1280) return 3; // xl: 3 Fragen
    if (window.innerWidth >= 1024) return 2; // lg: 2 Fragen
    return 1; // Mobil: 1 Frage
  };

  // Berechne die aktuell anzuzeigenden Fragen
  const displayedQuestions = allAnswered
    ? questions // Zeige alle Fragen, wenn alle beantwortet sind
    : questions.slice(currentIndex, currentIndex + questionsPerPage());

  const handleNext = () => {
    const nextIndex = currentIndex + questionsPerPage();
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    }
    if (onNext) onNext(); // Optionaler Callback für externe Logik
  };

  const isLastPage = currentIndex + questionsPerPage() >= questions.length;

  return (
    <div className="px-4 py-8 max-w-screen-xl mx-auto">
      {header}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 pb-5 relative z-0">
        {displayedQuestions.map((question) => (
          showResult ? (
            <SolutionsQuizComponent
              key={question.id}
              question={question}
              selectedOptionIds={selectedOptionIds[question.id] || []}
            />
          ) : (
            <QuizComponent
              key={question.id}
              question={question}
            />
          )
        ))}
      </div>
      {footer}
      {!allAnswered && !isLastPage && !showResult && (
        <button
          onClick={handleNext}
          className="mt-4 px-4 py-2 bg-cyan-400 text-white rounded hover:bg-cyan-500"
        >
          Weiter
        </button>
      )}
    </div>
  );
};