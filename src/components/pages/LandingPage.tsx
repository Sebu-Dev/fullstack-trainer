import { useState } from "react";
import { Outlet } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "sebu-dev-react-lib";
import { useQuizNavigation } from "../../routes/useQuizNavigation";
import useQuizStore from "../../store/QuizStore";
import { CsvDownloadButton } from "../CsvDownloadButton";
import { FilterSidebar } from "../Filter/FilterSidebar";
export const LandingPage = () => {
  const { generateQuizSet } = useQuizStore();
  const [toggleDownload, setToggleDownload] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { startQuiz } = useQuizNavigation();

  const handleCategoryClick = () => {
    ("handleCategoryClick");
    if (!isSidebarOpen) setIsSidebarOpen(true);
  };
  const handleStartQuizOnClick = () => {
    generateQuizSet();
    startQuiz();
  };

  return (
    <div>
      <div className="">
        <Outlet context={{ toggleDownload, setToggleDownload }} />
        <FilterSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div
          className="flex  flex-col items-center justify-center text-center -translate-y-[50px] lg:-translate-y-[80px]"
          style={{ minHeight: "calc(100vh - 228px)" }}
        >
          <h1 className="text-3xl font-bold text-cyan-300 mb-4 lg:text-5xl">
            Herzlich Willkommen beim Fullstack Trainer!
          </h1>
          <p className="text-lg mb-8">
            Vertiefe dein Wissen, teste deine Fähigkeiten und werde ein Experte.
            Wähle eine Kategorie oder erstelle dein eigenes Quiz!
          </p>
          <div className="flex ">
            <PrimaryButton
              animationHover
              hoverEffect={{ scale: 1.03 }}
              handleOnClick={handleCategoryClick}
              glowEffect
              className="text-md"
            >
              Kategorien
            </PrimaryButton>

            <SecondaryButton
              className="text-md"
              animationHover
              hoverEffect={{
                scale: 1,
              }}
              glowEffect
              handleOnClick={handleStartQuizOnClick}
            >
              Quiz starten
            </SecondaryButton>
          </div>
        </div>
        <CsvDownloadButton setToggleDownload={setToggleDownload} />
      </div>
    </div>
  );
};
