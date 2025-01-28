const CsvDownload = () => {
  const blob = new Blob([CsvDownload], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "quiz.csv";
  link.click();
};

return (
  <div>
    <button onClick={handleCategoryOnClick}>Filter</button>
    <button onClick={handleStartQuizOnClick}>Start Quiz</button>

    {/* CSV als Download anbieten */}
    <button onClick={downloadCsv}>Download CSV</button>
  </div>
);
