import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "sebu-dev-react-lib";
import useQuizStore from "../../store/QuizStore";
import { CsvDownloadButton } from "../CsvDownloadButton";
import { CsvDownloadPopup } from "../CsvDownloadPopup";
import { FilterSidebar } from "../Filter/FilterSidebar";
export const LandingPage = () => {
  const { generateQuizSet } = useQuizStore();
  const [toggleDownload, setToggleDownload] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const handleCategoryOnClick = () => {
    setIsSidebarOpen(true);
  };
  const handleStartQuizOnClick = () => {
    generateQuizSet();
    navigate("/quiz");
  };

  return (
    <div>
      <div className="">
        <CsvDownloadPopup
          toggleDownload={toggleDownload}
          setToggleDownload={setToggleDownload}
        >
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
              Vertiefe dein Wissen, teste deine Fähigkeiten und werde ein
              Experte. Wähle eine Kategorie oder erstelle dein eigenes Quiz!
            </p>
            <div className="flex ">
              <PrimaryButton
                animationHover
                hoverEffect={{ scale: 1.03 }}
                handleOnClick={handleCategoryOnClick}
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
        </CsvDownloadPopup>
      </div>
    </div>
  );
};
