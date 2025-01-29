import { Route, Routes } from "react-router-dom";
import { Layout } from "sebu-dev-react-lib";
import { LandingPage } from "./components/pages/LandingPage";
import { Quiz } from "./components/QuizComponents/quizComponents/Quiz";
import { ResultLanding } from "./components/QuizComponents/resultComponents/ResultLanding";
import "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib/dist/sebu-dev-react-lib.css";

const App = () => {
  return (
    <Layout nav={true}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz-result" element={<ResultLanding />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
