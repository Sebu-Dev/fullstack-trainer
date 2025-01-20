import { Route, Routes } from "react-router-dom";
import { FilterQuestions } from "./components/Filter/FilterQuestions";
import { LandingPage } from "./components/pages/LandingPage";
import { Quiz } from "./components/QuizComponents/Quiz";
import { QuizResult } from "./components/QuizComponents/resultComponents/QuizResult";
import { ResultLanding } from "./components/QuizComponents/resultComponents/ResultLanding";
import { Layout } from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";
import "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib/dist/sebu-dev-react-lib.css";

const App = () => {
  return (
    <Layout nav={true}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/filter"
          element={
            <>
              <FilterQuestions />
            </>
          }
        />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz-result" element={<QuizResult />} />
        <Route path="/quiz-result-landing" element={<ResultLanding />} />
      </Routes>
    </Layout>
  );
};

export default App;
