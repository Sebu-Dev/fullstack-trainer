import { useNavigate } from "react-router-dom";
import { BaseButton } from "sebu-dev-react-lib";

export const BackButton = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <BaseButton
      className="bg-slate-400/10 hover:bg-slate-300/10"
      handleOnClick={navigateBack}
    >
      Zurück
    </BaseButton>
  );
};
