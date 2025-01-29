import { Route, Routes } from "react-router-dom";
import { Layout } from "sebu-dev-react-lib";
import "sebu-dev-react-lib/dist/sebu-dev-react-lib.css";
import { LandingPage } from "./components/pages/LandingPage";
import { Quiz } from "./components/QuizComponents/quizComponents/Quiz";
import { ResultLanding } from "./components/QuizComponents/resultComponents/ResultLanding";
import { DownloadPopupRoute } from "./routes/DownloadPopupRoute";
import { SidebarRoute } from "./routes/SidebarRoute";

const App = () => {
  return (
    <Layout nav={true}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sidebar" element={<SidebarRoute />} />
        <Route path="/download" element={<DownloadPopupRoute />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz-result" element={<ResultLanding />} />
        <Route path="/solution" element={<ResultLanding />} />
      </Routes>
    </Layout>
  );
};

export default App;
