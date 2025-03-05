import { Route, Routes } from "react-router-dom";
import { Layout, Navbar } from "sebu-dev-react-lib";
import "sebu-dev-react-lib/dist/sebu-dev-react-lib.css";
import { CsvDownloadPopup } from "./components/CsvDownloadPopup";
import { LandingPage } from "./components/pages/LandingPage";
import { Quiz } from "./components/QuizComponents/quizComponents/Quiz";
import { QuizResult } from "./components/QuizComponents/resultComponents/QuizResult";
import { ResultLanding } from "./components/QuizComponents/resultComponents/ResultLanding";

import { ROUTES } from "./routes/routes";
import { useEffect } from "react";
import useQuizStore from "./store/QuizStore";
import AdminPanel from "./components/adminPanel/AdminPanel";
import GoToAdminPanelButton from "./components/adminPanel/GoToAdminPanelButton";
import { EndlessQuiz } from "./components/QuizComponents/quizComponents/EndlessQuiz";
import { ProgressQuiz } from "./components/QuizComponents/quizComponents/ProgressQuiz";

const App = () => {
  const loadQuestions = useQuizStore((state) => state.loadQuestions);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  return (
    <Layout nav={false}>
      <Navbar>
        <GoToAdminPanelButton />
      </Navbar>
      <Routes>
        <Route path={ROUTES.ADMIN} element={<AdminPanel />} />
        <Route path={ROUTES.HOME} element={<LandingPage />}>
          <Route path={ROUTES.CSV} element={<CsvDownloadPopup />} />
        </Route>
        <Route path={ROUTES.QUIZ} element={<Quiz />} />
        <Route path={ROUTES.QUIZ_RESULT} element={<ResultLanding />}>
          <Route path={ROUTES.SOLUTION} element={<QuizResult />} />
        </Route>
        <Route path={ROUTES.PROGRESS} element={<ProgressQuiz />} /> {/* Neue Route */}
        <Route path={ROUTES.ENDLESS} element={<EndlessQuiz />} />   {/* Neue Route */}
      </Routes>
    </Layout>
  );
};

export default App;