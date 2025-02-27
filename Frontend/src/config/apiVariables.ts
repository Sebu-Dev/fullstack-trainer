export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const API_USERNAME = import.meta.env.VITE_API_USERNAME;
export const API_PASSWORD = import.meta.env.VITE_API_PASSWORD;
export const BUILD_TIME= import.meta.env.VITE_BUILD_TIME;

// Falls eine der Variablen nicht existiert, wird eine Warnung ausgegeben
if (!API_BASE_URL) {
  console.warn("⚠️ API_BASE_URL ist nicht gesetzt. Lokale Daten werden verwendet.");
}
if (!API_USERNAME) {
  console.warn("⚠️ API_USERNAME ist nicht gesetzt.");
}
if (!API_PASSWORD) {
  console.warn("⚠️ API_PASSWORD ist nicht gesetzt.");
}
