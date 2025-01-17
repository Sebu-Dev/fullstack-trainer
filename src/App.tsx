import { useState } from "react";
import { FilterQuestions } from "./components/Filter/FilterQuestions";
import { LandingPage } from "./components/pages/LandingPage";
import { CreateQuiz } from "./components/QuizComponents/CreateQuiz";
import { QuizComponent } from "./components/QuizComponents/QuizComponent";
import { SolutionsQuizComponent } from "./components/QuizComponents/SolutionsQuizComponent"; // Import der Result-Komponente
import useQuizStore from "./Question/zustand/QuizStore";
import {
  DangerButton,
  Layout,
} from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";
import "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib/dist/sebu-dev-react-lib.css";

const App = () => {
  const [resultsVisible, setResultsVisible] = useState(false);
  const { quizSet } = useQuizStore();

  const handleQuizSubmit = () => {
    setResultsVisible(true);
  };
  const ShowQuiz = () => {
    return (
      <>
        {resultsVisible ? (
          <div className="flex flex-wrap gap-8 mx-auto justify-center">
            {quizSet.map((question) => (
              <SolutionsQuizComponent key={question.id} question={question} />
            ))}
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-8 mx-auto justify-center">
              {quizSet.map((question) => (
                <QuizComponent key={question.id} question={question} />
              ))}
            </div>
            <div className="mt-4">
              <DangerButton
                label="Test abschicken"
                handleOnClick={handleQuizSubmit}
              />
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <Layout nav={false}>
      <LandingPage />
      <FilterQuestions />
      <CreateQuiz />
      <ShowQuiz />
    </Layout>
  );
};

export default App;
