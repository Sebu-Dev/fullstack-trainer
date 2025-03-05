
import React from "react";
import { BaseButton } from "sebu-dev-react-lib";

interface ConfirmAnswersButtonProps {
  selectedOptionIds: Record<string, number[]>;
  onConfirm: () => void;
}

export const ConfirmAnswersButton: React.FC<ConfirmAnswersButtonProps> = ({
  selectedOptionIds,
  onConfirm,
}) => {
  const isDisabled = Object.values(selectedOptionIds).every(
    (arr) => arr.length === 0
  );

  return (
    <BaseButton
      handleOnClick={onConfirm}
      className="w-full py-3 text-lg bg-cyan-500 hover:bg-cyan-600 text-white"
      disabled={isDisabled}
    >
      Antworten bestätigen
    </BaseButton>
  );
};