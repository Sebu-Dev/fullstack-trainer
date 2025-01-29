import { FaFileDownload } from "react-icons/fa";
import { IconButton } from "sebu-dev-react-lib";

interface CsvDownloadButtonProps {
  setToggleDownload: (togglePopup: boolean) => void;
}
export const CsvDownloadButton = ({
  setToggleDownload,
}: CsvDownloadButtonProps) => {
  const handleToggleDownload = () => {
    setToggleDownload(true);
  };
  return (
    <>
      <IconButton
        handleOnClick={handleToggleDownload}
        size="text-2xl"
        icon={<FaFileDownload />}
      ></IconButton>
    </>
  );
};
