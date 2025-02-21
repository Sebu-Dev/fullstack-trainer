/**
 * Prüft, ob ein Feature aktiviert ist, basierend auf Umgebungsvariablen.
 * @param featureName Name des Features (z. B. "dev" für VITE_FEATURE_DEV)
 * @returns Boolean, ob das Feature aktiviert ist
 */
export const isFeatureEnabled = (featureName: string): boolean => {
    const envValue = import.meta.env[`VITE_FEATURE_${featureName.toUpperCase()}`];
    return envValue === "true" || envValue === true;
  };