import { useState } from "react";
import { DangerButton, InputField, Layout } from "sebu-dev-react-lib";
import "sebu-dev-react-lib/dist/sebu-dev-react-lib.css";
import { MainPage } from "./components/mainPage/MainPage";
import { QuizComponent } from "./components/quizComponent";
import questions from "./QuestionList/Questions";
import type { AnswerOption, Question } from "./types/QuestionType/QuestionType";

const App = () => {
  const [quizSet, setQuizSet] = useState<Question[]>(questions);
  const [category, setCategory] = useState<string>("");
  const createQuizByCategory = () => {
    if (category) {
      const filteredQuestions = questions.filter((question) =>
        question.category?.includes(category)
      );
      setQuizSet(filteredQuestions);
      console.log(filteredQuestions);
    }
  };

  return (
    <Layout>
      <MainPage></MainPage>
      <div className="grid lg:grid-cols-1 md:grid-cols-1 gap-8 justify-center">
        <DangerButton
          handleOnClick={createQuizByCategory}
          label="create Quiz"
        ></DangerButton>
        <InputField
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></InputField>
        {quizSet.map((question) => (
          <QuizComponent
            key={question.id}
            question={question}
            onAnswerSelect={function (selectedAnswer: AnswerOption): void {
              throw new Error("Function not implemented.");
            }}
          ></QuizComponent>
        ))}
      </div>
    </Layout>
  );
};

export default App;
