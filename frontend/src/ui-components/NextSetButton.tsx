
import React from "react";
import { BaseButton } from "sebu-dev-react-lib";

interface NextSetButtonProps {
  onNextSet: () => void;
}

export const NextSetButton: React.FC<NextSetButtonProps> = ({ onNextSet }) => {
  return (
    <BaseButton
      handleOnClick={onNextSet}
      className="w-full py-3 text-lg bg-purple-600 hover:bg-purple-700 text-white"
    >
      Nächstes Set
    </BaseButton>
  );
};