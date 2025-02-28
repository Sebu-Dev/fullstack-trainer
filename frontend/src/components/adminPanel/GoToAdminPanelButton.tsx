import { IconButton } from "sebu-dev-react-lib";
import withFeatureFlag from "../../hocs/withFeatureFlag";
import { useQuizNavigation } from "../../routes/useQuizNavigation";
import { MdOutlineAdminPanelSettings } from "react-icons/md";


 const GoToAdminPanelButton = () => {
  const { showAdminPanel } = useQuizNavigation();
  const handleAdminPanel = () => {
    showAdminPanel();
  };
  return (
    <>
      <IconButton
        handleOnClick={handleAdminPanel}
        animationHover
        className="bg-transparent"
        size="text-2xl"
        icon={<MdOutlineAdminPanelSettings />}
      ></IconButton>
    </>
  );
};
export default withFeatureFlag(GoToAdminPanelButton, "dev");
