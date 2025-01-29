import { useNavigate } from "react-router-dom";
import { FilterSidebar } from "../components/Filter/FilterSidebar";

export const SidebarRoute = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay für Klick außerhalb */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 z-40"
        onClick={() => navigate(-1)}
      />
      {/* Sidebar selbst */}
      <FilterSidebar isOpen={true} onClose={() => navigate(-1)} />
    </>
  );
};
