import {  useState } from "react";
import axios from "axios";
import withFeatureFlag from "../hocs/withFeatureFlag";
import { API_BASE_URL } from "../config/apiVariables";

const QuestionUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<any[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
      setMessage(null);
      setErrors([]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Bitte eine Datei auswählen.");
      setErrors([]);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(`${API_BASE_URL}/questions/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const result = response.data;

      if (result.validationErrors && result.validationErrors.length > 0) {
        setMessage(`Upload teilweise erfolgreich: ${result.saveResult.message}`);
        setErrors(result.validationErrors);
      } else {
        setMessage("Alle Fragen erfolgreich hochgeladen!");
        setErrors([]);
      }
    } catch (error: any) {
      if (error.response) {
        // Server hat eine Antwort gesendet (z. B. 400 mit SaveResultWithErrors)
        const result = error.response.data;
        setMessage(`Upload fehlgeschlagen: ${result.saveResult.message}`);
        setErrors(result.validationErrors || []);
      } else if (error.code === "ERR_NETWORK") {
        setMessage("Netzwerkfehler: Der Server ist nicht erreichbar.");
        setErrors([]);
      } else {
        setMessage("Unbekannter Fehler beim Hochladen: " + error.message);
        setErrors([]);
      }
      console.error("Upload-Fehler:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg w-96">
      <input
        type="file"
        accept="application/json"
        onChange={handleFileChange}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Hochladen
      </button>
      {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
      {errors.length > 0 && (
        <div className="mt-2 text-sm text-red-600">
          <p>Validierungsfehler:</p>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>
                <strong>{error.questionText || "Text fehlt"}</strong>: {error.errors.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default withFeatureFlag(QuestionUpload, "dev");