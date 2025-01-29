import { useNavigate } from "react-router-dom";
import { CsvDownloadPopup } from "../components/CsvDownloadPopup";

export const DownloadPopupRoute = () => {
  const navigate = useNavigate();

  return (
    <CsvDownloadPopup
      toggleDownload={true}
      setToggleDownload={() => navigate(-1)}
    />
  );
};
