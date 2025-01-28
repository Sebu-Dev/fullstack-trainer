import type { Question, QuizSet } from "../Question/type/QuestionType";
import { filterQuestions, shuffleArray } from "../utils/helpers";
import { ScoringService } from "./ScoringService";

export const QuizService = {
  generateQuizSet: (
    questions: Question[],
    categories: string[],
    questionCount: number
  ): QuizSet => {
    const filtered = filterQuestions(questions, categories);
    const selectedQuestions = shuffleArray(filtered).slice(0, questionCount);

    return {
      questions: selectedQuestions.map((question) => ({
        ...question,
        options: shuffleArray(question.options),
      })),
      answers: selectedQuestions.map((question) => ({
        question,
        userAnswers: question.options.map((option) => ({
          option,
          isSelected: false,
        })),
        achievedPoints: 0,
      })),
      totalPossiblePoints: selectedQuestions.length * 4,
      totalAchievedPoints: 0,
    };
  },

  updateAnswer: (
    quizSet: QuizSet,
    questionId: string,
    optionText: string
  ): QuizSet => {
    const updatedAnswers = quizSet.answers.map((answer) => {
      if (answer.question.id === questionId) {
        const updated = answer.userAnswers.map((ua) =>
          ua.option.text === optionText
            ? { ...ua, isSelected: !ua.isSelected }
            : ua
        );

        return {
          ...answer,
          userAnswers: updated,
          achievedPoints: ScoringService.calculateQuestionPoints({
            ...answer,
            userAnswers: updated,
          }),
        };
      }
      return answer;
    });

    return {
      ...quizSet,
      answers: updatedAnswers,
      totalAchievedPoints: ScoringService.calculateTotalPoints(updatedAnswers),
    };
  },
};
