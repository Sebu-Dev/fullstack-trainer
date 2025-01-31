import { motion } from "framer-motion";

import { useCallback, useMemo, useRef } from "react";
import { BaseButton, SecondaryButton } from "sebu-dev-react-lib";
import { useClickOutside } from "../../hooks/useClickOutside";
import useQuizStore from "../../store/QuizStore";
interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FilterSidebar = ({ isOpen, onClose }: FilterSidebarProps) => {
  const {
    getAllCategories,
    selectedCategories,
    setSelectedCategories,
    filterQuestions,
  } = useQuizStore();

  const allCategories = useMemo(() => getAllCategories(), [getAllCategories]);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useClickOutside(sidebarRef, () => {
    ("useClickOutside");
    if (isOpen) onClose();
  });
  const toggleCategory = useCallback(
    (category: string) => {
      const updatedCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((cat) => cat !== category)
        : [...selectedCategories, category];

      setSelectedCategories(updatedCategories);
      filterQuestions(updatedCategories);
    },
    [selectedCategories, setSelectedCategories, filterQuestions],
  );
  return (
    <motion.div
      ref={sidebarRef}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: isOpen ? 0 : -300, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 h-full w-64 bg-white-800/60 backdrop-blur-md shadow-lg z-50 flex flex-col "
    >
      {/* Bereich für die Kategorien mit Scroll-Funktion */}
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 bg-neutral-900/60 backdrop-blur-sm">
          <h2 className="text-lg text-center  font-semibold text-cyan-300 ">
            Kategorien
          </h2>
        </div>

        {/* Kategorienliste */}
        <div className=" overflow-y-auto flex-1">
          {allCategories.map((category) => (
            <BaseButton
              key={category}
              animationHover
              animationOnClick
              glowEffect
              className={`cursor-pointer mb-2 ${selectedCategories.includes(category) ? "bg-cyan-500" : "bg-cyan-500/50"}`}
              handleOnClick={() => toggleCategory(category)}
            >
              {category}
            </BaseButton>
          ))}
        </div>

        {/* Fixierter Button am unteren Rand */}
        <div className="p-4 border-t border-neutral-700 bg-neutral-900/60">
          <SecondaryButton handleOnClick={onClose} glowEffect>
            Quizset erstellen
          </SecondaryButton>
        </div>
      </div>
    </motion.div>
  );
};
