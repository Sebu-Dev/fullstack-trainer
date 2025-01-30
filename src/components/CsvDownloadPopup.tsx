import { useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import { Popup, PrimaryButton } from "sebu-dev-react-lib";
import { QuizCsvConverter } from "../csv/csvUtils";
import useQuizStore from "../store/QuizStore";
interface CsvDownloadPopupProps {
  setToggleDownload: (togglePopup: boolean) => void;
  toggleDownload: boolean;
}

export const CsvDownloadPopup = () => {
  const { setToggleDownload, toggleDownload } =
    useOutletContext<CsvDownloadPopupProps>();
  const { quizSet, questionList } = useQuizStore();

  const handleQuestionListCsvDownload = () => {
    downloadCsv(csvContent.questionListCsv);
    setToggleDownload(false);
  };

  const handleQuizSetCsvDownload = () => {
    downloadCsv(csvContent.quizSetCsv);
    setToggleDownload(false);
  };

  const csvContent = useMemo(() => {
    const topic = "fullstack";
    return {
      quizSetCsv: QuizCsvConverter.convertToCsv(quizSet.questions, topic),
      questionListCsv: QuizCsvConverter.convertToCsv(questionList, topic),
    };
  }, [quizSet, questionList]);

  const downloadCsv = (csv: BlobPart) => {
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "quiz.csv";
    link.click();
  };
  return (
    <div>
      {toggleDownload && (
        <Popup
          bgOpacity="bg-opacity-5"
          backdropBlur="backdrop-blur-md"
          bgColor="bg-transparent"
        >
          <p> Welche Fragen möchtest du Herunterladen?</p>
          <div className="flex">
            <PrimaryButton
              animationHover
              animationOnClick
              handleOnClick={() => handleQuestionListCsvDownload()}
            >
              Alle Fragen
            </PrimaryButton>
            <PrimaryButton
              animationHover
              animationOnClick
              handleOnClick={handleQuizSetCsvDownload}
            >
              Nur Quizset
            </PrimaryButton>
          </div>
        </Popup>
      )}
    </div>
  );
};
