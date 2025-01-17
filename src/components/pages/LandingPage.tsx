import {
  PrimaryButton,
  SecondaryButton,
} from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";
export const LandingPage = () => {
  return (
    <div className="flex relativ flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold text-cyan-300 mb-4">
        Herzlich Willkommen beim Fullstack Trainer!
      </h1>
      <p className="text-lg mb-8">
        Vertiefe dein Wissen, teste deine Fähigkeiten und werde ein Experte.
        Wähle eine Kategorie oder erstelle dein eigenes Quiz!
      </p>
      <div className="flex space-x-4">
        <PrimaryButton
          animationHover
          hoverEffect={{ scale: 1.03 }}
          handleOnClick={() => {}}
          glowEffect
        >
          Kategorien auswählen
        </PrimaryButton>
        <SecondaryButton
          animationHover
          hoverEffect={{
            scale: 1,
          }}
          glowEffect
          handleOnClick={() => {}}
        >
          Quiz starten
        </SecondaryButton>
      </div>
    </div>
  );
};
