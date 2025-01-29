import { useNavigate } from "react-router-dom";
import { BaseButton } from "sebu-dev-react-lib";

export const CreateQuizButton = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <BaseButton
      handleOnClick={handleOnClick}
      className="bg-green-600/60 hover:bg-green-500/60"
    >
      Create Quiz
    </BaseButton>
  );
};
