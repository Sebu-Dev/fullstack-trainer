import { useEffect, useState } from "react";
import { QuizComponent } from "./components/QuizComponents/QuizComponent";
import { SolutionsQuizComponent } from "./components/QuizComponents/SolutionsQuizComponent"; // Import der Result-Komponente
import { MainPage } from "./mainPage/MainPage";
import type { Question } from "./Question/type/QuestionType";
import useQuizStore from "./Question/zustand/QuizStore";
import {
  DangerButton,
  Layout,
} from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";
import "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib/dist/sebu-dev-react-lib.css";

const App = () => {
  const [quizSet, setQuizSet] = useState<Question[]>([]);
  const [resultsVisible, setResultsVisible] = useState(false);
  const { questionList } = useQuizStore();

  useEffect(() => {
    const shuffled = [...questionList].sort(() => Math.random() - 0.5);
    setQuizSet(shuffled.slice(0, 10));
  }, [questionList]);

  const handleQuizSubmit = () => {
    setResultsVisible(true);
  };

  return (
    <Layout>
      <MainPage />
      <div className="pt-4 grid flex-row flex-wrap justify-center gap-8 mx-auto">
        {resultsVisible ? (
          <SolutionsQuizComponent />
        ) : (
          quizSet.map((question) => (
            <QuizComponent key={question.id} question={question} />
          ))
        )}
        <DangerButton
          label="Test abschicken"
          handleOnClick={handleQuizSubmit}
        />
      </div>
    </Layout>
  );
};

export default App;
