import {
  BaseButton,
  Popup,
} from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";

interface QuizIntroductionProps {
  handleOnClick: () => void;
}

export const QuizIntroduction = ({ handleOnClick }: QuizIntroductionProps) => {
  return (
    <Popup className="p-4 rounded-2xl justify-center bg-neutral-800/70 items-center shadow-lg flex ">
      <div className="flex flex-col text-pretty">
        <h2 className="text-2xl font-bold text-cyan-500 mb-4">Willkommen!</h2>
        <p className="text-gray-300 mb-4">
          <span className="hidden xl:inline">Teste dein Wissen! </span>
          Hier die Regeln:
        </p>
        <ul className="list-none list-inside mb-4 text-neutral-300">
          <li>
            <strong className="text-amber-700">Easy:</strong> 1 Punkt für alle
            richtigen Antworten, keine falsche markiert.
          </li>
          <li>
            <strong className="text-amber-700">Medium:</strong> 1 Punkt max. 0,5
            Punkte für 1 falsche Antwort, ab 2 falsch = 0 Punkte.
          </li>
          <li>
            <strong className="text-amber-700">Hard:</strong> 2 Punkte max. Jede
            richtige Antwort: +0,5 Punkte, jede falsche: -1 Punkt. Ab 2 falsche
            = 0 Punkte.
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
