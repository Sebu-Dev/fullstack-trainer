import { useMemo, type ReactNode } from "react";
import { QuizCsvConverter } from "../csv/csvUtils";
import useQuizStore from "../Question/store/QuizStore";
import {
  Popup,
  PrimaryButton,
} from "/Users/vwbspk0/Desktop/VsCode/npm-packages/sebu-dev-react-lib";
interface CsvDownloadPopupProps {
  setToggleDownload: (togglePopup: boolean) => void;
  toggleDownload: boolean;
  children: ReactNode;
}

export const CsvDownloadPopup = ({
  children,
  setToggleDownload,
  toggleDownload,
}: CsvDownloadPopupProps) => {
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
    console.log(quizSet);
    console.log(questionList);
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
      {children}
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
