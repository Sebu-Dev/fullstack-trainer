import {
  BaseButton,
  Card,
} from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";
interface QuizIntroductionProps {
  handleOnClick: () => void;
}
export const QuizIntroduction = ({ handleOnClick }: QuizIntroductionProps) => {
  return (
    <Card className="fixed bg-neutral-800 inset-1 flex items-center justify-center ">
      {" "}
      <h2 className="text-2xl font-bold text-cyan-500 mb-4">
        Willkommen zum Quiz!
      </h2>
      <p className="text-gray-700 mb-4">
        Teste dein Wissen in verschiedenen Schwierigkeitsgraden! Bevor wir
        starten, hier sind die Spielregeln:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>
          <strong>Easy:</strong> Du erhältst <strong>1 Punkt</strong>, wenn alle
          richtigen Antworten ausgewählt wurden und keine falsche Antwort
          markiert ist.
        </li>
        <li>
          <strong>Medium:</strong> Maximal <strong>1 Punkt</strong>. Wähle eine
          falsche Antwort, und du erhältst <strong>0,5 Punkte</strong>. Wählst
          du zwei oder mehr falsche Antworten, bekommst du
          <strong> 0 Punkte</strong>.
        </li>
        <li>
          <strong>Hard:</strong> Maximal <strong>2 Punkte</strong>. Für jede
          richtige Antwort gibt es <strong>+0,5 Punkte</strong>, aber jede
          falsche Antwort zieht <strong>-1 Punkt</strong> ab. Wenn du mehr als
          eine falsche Antwort auswählst, bekommst du <strong>0 Punkte</strong>.
        </li>
      </ul>
      <p className="text-gray-700">
        Überlege dir deine Antworten gut, und viel Erfolg beim Quiz! 😊
      </p>
      <div>
        <BaseButton handleOnClick={handleOnClick}>Ok</BaseButton>
      </div>
    </Card>
  );
};
