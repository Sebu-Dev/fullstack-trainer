import { useEffect } from "react";

/**
 * Hook, um Klicks außerhalb eines Elements zu erkennen und eine Aktion auszuführen.
 * @param ref - React-Ref des überwachten Elements
 * @param callback - Funktion, die bei einem Außenklick ausgeführt wird
 */
export function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  callback: (e: MouseEvent) => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    }

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref, callback]);
}
