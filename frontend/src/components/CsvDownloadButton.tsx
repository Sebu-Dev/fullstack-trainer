import { FaFileDownload } from "react-icons/fa";
import { IconButton } from "sebu-dev-react-lib";
import { useQuizNavigation } from "../routes/useQuizNavigation";

interface CsvDownloadButtonProps {
  setToggleDownload: (togglePopup: boolean) => void;
}
export const CsvDownloadButton = ({
  setToggleDownload,
}: CsvDownloadButtonProps) => {
  const { showDownload } = useQuizNavigation();
  const handleToggleDownload = () => {
    setToggleDownload(true);
    showDownload();
  };
  return (
    <>
      <IconButton
        handleOnClick={handleToggleDownload}
        animationHover
        className="bg-transparent"
        size="text-2xl"
        icon={<FaFileDownload />}
      ></IconButton>
    </>
  );
};
