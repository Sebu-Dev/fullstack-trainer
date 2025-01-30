import { Route, Routes } from "react-router-dom";
import { Layout } from "sebu-dev-react-lib";
import "sebu-dev-react-lib/dist/sebu-dev-react-lib.css";
import { CsvDownloadPopup } from "./components/CsvDownloadPopup";
import { LandingPage } from "./components/pages/LandingPage";
import { Quiz } from "./components/QuizComponents/quizComponents/Quiz";
import { QuizResult } from "./components/QuizComponents/resultComponents/QuizResult";
import { ResultLanding } from "./components/QuizComponents/resultComponents/ResultLanding";
import { ROUTES } from "./routes/routes";

const App = () => {
  return (
    <Layout nav={true}>
      <Routes>
        <Route path={ROUTES.HOME} element={<LandingPage />}>
          <Route path={ROUTES.CSV} element={<CsvDownloadPopup />} />
        </Route>
        <Route path={ROUTES.QUIZ} element={<Quiz />} />
        <Route path={ROUTES.QUIZ_RESULT} element={<ResultLanding />}>
          <Route path={ROUTES.SOLUTION} element={<QuizResult />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
