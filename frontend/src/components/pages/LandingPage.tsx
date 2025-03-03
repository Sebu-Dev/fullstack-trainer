import { useState } from "react";
import { Outlet } from "react-router-dom";
import { BaseButton, PrimaryButton, SecondaryButton } from "sebu-dev-react-lib";
import QuestionSyncButton from "../../api/useQuestionSync";
import { useQuizNavigation } from "../../routes/useQuizNavigation";
import useQuizStore from "../../store/QuizStore";
import { FilterSidebar } from "../Filter/FilterSidebar";
import QuestionUpload from "../../api/QuestionUpload";
import CsvDownloadButton from "../CsvDownloadButton";
export const LandingPage = () => {
  const { generateQuizSet } = useQuizStore();
  const [toggleDownload, setToggleDownload] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { startQuiz, startProgressQuiz, startEndlessQuiz } = useQuizNavigation();
  const handleCategoryClick = () => {
    setIsSidebarOpen(true);
  };

  const handleStartExamMode = () => {
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
              handleOnClick={handleStartExamMode}
              glowEffect
              className="py-3 text-lg"
            >
              Prüfungsmodus
            </PrimaryButton>
            <SecondaryButton
              animationHover
              hoverEffect={{ scale: 1.03 }}
              handleOnClick={startProgressQuiz}
              glowEffect
              className="py-3 text-lg"
            >
              Progress-Modus
            </SecondaryButton>
            <SecondaryButton
              animationHover
              hoverEffect={{ scale: 1.03 }}
              handleOnClick={startEndlessQuiz}
              glowEffect
              className="py-3 text-lg"
            >
              Endlos-Modus
            </SecondaryButton>
            <BaseButton
              handleOnClick={handleCategoryClick}
              className="py-3 text-lg bg-neutral-700/50 hover:bg-neutral-600/50"
            >
              Kategorien anpassen
            </BaseButton>
          </div>
        </div>
        <CsvDownloadButton setToggleDownload={setToggleDownload} />
        <QuestionSyncButton></QuestionSyncButton>
        <QuestionUpload></QuestionUpload>
      </div>
    </div>
  );
};
