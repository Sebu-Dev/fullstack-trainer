import { BaseButton, Popup } from "sebu-dev-react-lib";

interface QuizIntroductionProps {
  handleOnClick: () => void;
}

export const QuizIntroduction = ({ handleOnClick }: QuizIntroductionProps) => {
  return (
    <Popup className="p-4 rounded-2xl justify-center bg-neutral-800/70 items-center shadow-lg flex ">
      <div className="flex flex-col text-pretty">
        <h2 className="text-2xl font-bold text-cyan-500 mb-4">Willkommen!</h2>
        <p className="text-gray-300 mb-4 ">
          <span>Hier die Regeln:</span>
        </p>
        <ul className="list-none list-inside mb-4 text-sm lg:text-xl text-neutral-300">
          <li>
            <strong className="text-amber-700">Punktevergabe: </strong>
            Es können mehrere Antworten richtig sein.
          </li>
          <li>
            <strong className="text-amber-700">4 Punkte:</strong> Alle Antworten
            Korrekt.
          </li>
          <li>
            <strong className="text-amber-700">2 Punkte:</strong> Ein Fehler
            wurde gemacht.
          </li>
          <li>
            <strong className="text-amber-700">0 Punkte:</strong> mehr als Ein
            Fehler.
          </li>
        </ul>
        <p className="text-gray-300">Viel Erfolg beim Quiz! 😊</p>
        <div className="flex justify-center pt-8">
          <BaseButton
            className="bg-cyan-500 hover:bg-cyan-500/50"
            handleOnClick={handleOnClick}
          >
            Bestätigen
          </BaseButton>
        </div>
      </div>
    </Popup>
  );
};
