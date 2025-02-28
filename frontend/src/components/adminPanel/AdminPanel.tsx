// src/components/AdminPanel.tsx
import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Card } from "sebu-dev-react-lib";
import withFeatureFlag from "../../hocs/withFeatureFlag";
import { Question } from "../../Question/type/QuestionType";
import useQuizStore from "../../store/QuizStore";

// Registriere Chart.js-Komponenten
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const AdminPanel: React.FC = () => {
  const { questionList, loadQuestions } = useQuizStore();
  const [categoryStats, setCategoryStats] = useState<{ [key: string]: number }>({});
  const threshold = 10; // Schwelle für Hauptkategorien

  // Lade Fragen, falls noch nicht geladen
  useEffect(() => {
    if (questionList.length === 0) {
      loadQuestions();
    }
  }, [questionList, loadQuestions]);

  // Analysiere Kategorien
  useEffect(() => {
    const stats: { [key: string]: number } = {};
    questionList.forEach((question: Question) => {
      question.categories.forEach((cat) => {
        stats[cat] = (stats[cat] || 0) + 1;
      });
    });
    setCategoryStats(stats);
  }, [questionList]);

  // Hauptkategorien (≥10 Fragen) und Sonstiges
  const mainCategories = Object.entries(categoryStats)
    .filter(([_, count]) => count >= threshold)
    .map(([cat]) => cat);
  const otherCount = Object.entries(categoryStats)
    .filter(([_, count]) => count < threshold)
    .reduce((sum, [_, count]) => sum + count, 0);

  // Balkendiagramm (alle Kategorien)
  const barChartData = {
    labels: Object.keys(categoryStats),
    datasets: [
      {
        label: "Anzahl Fragen",
        data: Object.values(categoryStats),
        backgroundColor: "rgba(34, 211, 238, 0.6)", // Cyan-400
        borderColor: "rgba(34, 211, 238, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Ermöglicht Anpassung an Container
    plugins: {
      legend: { position: "top" as const, labels: { color: "#e5e7eb" } }, // Neutral-200
      title: { display: true, text: "Fragen pro Kategorie", color: "#e5e7eb" },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Anzahl Fragen", color: "#e5e7eb" },
        ticks: { color: "#e5e7eb" },
      },
      x: {
        title: { display: true, text: "Kategorien", color: "#e5e7eb" },
        ticks: {
          color: "#e5e7eb",
          maxRotation: 45, // Dreht Labels bei Bedarf
          minRotation: 45,
          autoSkip: true, // Überspringt Labels bei wenig Platz
        },
      },
    },
  };

  // Donut-Diagramm (Hauptkategorien + Sonstiges)
  const doughnutChartData = {
    labels: [...mainCategories, "Sonstige"],
    datasets: [
      {
        label: "Fragen",
        data: [
          ...mainCategories.map((cat) => categoryStats[cat]),
          otherCount,
        ],
        backgroundColor: [
          "rgba(34, 211, 238, 0.8)", // Cyan-400
          "rgba(147, 51, 234, 0.8)", // Purple-600
          "rgba(6, 182, 212, 0.8)", // Cyan-500
          "rgba(167, 139, 250, 0.8)", // Purple-400
          "rgba(8, 145, 178, 0.8)", // Cyan-600
          "rgba(107, 33, 168, 0.8)", // Purple-700
          "rgba(75, 85, 99, 0.8)", // Gray-600 für Sonstiges
        ],
        borderColor: "#1f2937", // Neutral-800
        borderWidth: 1,
      },
    ],
  };

  const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Ermöglicht Anpassung an Container
    plugins: {
      legend: { position: "top" as const, labels: { color: "#e5e7eb" } },
      title: { display: true, text: "Hauptkategorien (≥10 Fragen)", color: "#e5e7eb" },
    },
  };

  // Kategorien mit wenigen Fragen (<10)
  const lowCountCategories = Object.entries(categoryStats)
    .filter(([_, count]) => count < threshold)
    .map(([cat, count]) => `${cat} (${count} Fragen)`);

  return (
    <div className="p-4 sm:p-6 max-w-full sm:max-w-6xl mx-auto text-neutral-200">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-cyan-400">
        Admin Panel: Fragenanalyse
      </h1>

      {/* Flexbox für responsives Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Balkendiagramm */}
        <Card title="Alle Kategorien" className="flex-1 bg-neutral-900/50 min-h-[400px]">
          <div className="p-4 h-full">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </Card>

        {/* Donut-Diagramm */}
        <Card title="Hauptkategorien" className="flex-1 bg-neutral-900/50 min-h-[400px]">
          <div className="p-4 h-full max-w-md mx-auto">
            <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          </div>
        </Card>
      </div>

      {/* Kategorien mit wenigen Fragen */}
      {lowCountCategories.length > 0 && (
        <Card title="Kategorien mit wenigen Fragen" className="mt-8 bg-neutral-900/50">
          <div className="p-4">
            <p className="text-neutral-400 mb-2">
              Folgende Kategorien haben weniger als {threshold} Fragen:
            </p>
            <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {lowCountCategories.map((cat, index) => (
                <li key={index} className="text-purple-400">{cat}</li>
              ))}
            </ul>
          </div>
        </Card>
      )}
    </div>
  );
};

export default withFeatureFlag(AdminPanel, "dev");