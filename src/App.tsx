import { Layout } from "sebu-dev-react-lib";
import "sebu-dev-react-lib/dist/sebu-dev-react-lib.css";
import { QuizComponent } from "./components/quizComponent";

const App = () => {
  return (
    <Layout>
      <QuizComponent
        question={{
          id: "1",
          questionText: "Magst du React?",
          answerOptions: [
            { text: "Ja", isCorrect: true },
            { text: "Nein", isCorrect: false },
          ],
          difficultyLevel: "easy",
          category: "Programmierung",
          explanation:
            "React ist eine beliebte Bibliothek für Frontend-Entwicklung.",
          imageUrl: undefined, // Optional: Kann auch weggelassen werden
        }}
        onAnswerSelect={(selectedAnswer) => {
          console.log("Gewählte Antwort:", selectedAnswer);
        }}
      />
    </Layout>
  );
};

export default App;
