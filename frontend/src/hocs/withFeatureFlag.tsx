// src/hocs/withFeatureFlag.tsx
import React from "react";

/**
 * Higher-Order Component, die eine Komponente nur rendert, wenn das angegebene Feature aktiviert ist.
 * @param WrappedComponent Die einzuhüllende Komponente
 * @param featureName Der Name des Features (z. B. "dev" für VITE_FEATURE_DEV)
 * @param fallback Optional: Fallback-UI, wenn das Feature deaktiviert ist
 */
const withFeatureFlag = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  featureName: string,
  fallback: React.ReactNode = <p className="text-gray-500">Diese Funktion ist in dieser Umgebung nicht verfügbar.</p>
) => {
  const FeatureFlagComponent: React.FC<P> = (props) => {
    const isEnabled = import.meta.env[`VITE_FEATURE_${featureName.toUpperCase()}`] === "true";

    return isEnabled ? <WrappedComponent {...props} /> : <>{fallback}</>;
  };

  // Setze den Display-Namen für bessere Debugging-Erfahrung
  FeatureFlagComponent.displayName = `WithFeatureFlag(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return FeatureFlagComponent;
};

export default withFeatureFlag;