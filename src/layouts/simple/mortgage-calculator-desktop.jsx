// In desptop display the calculator and results component side by side
import React, { useState } from "react";
import Form from "../../components/form/form";
import Results from "../../components/results/results";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function MortgageCalculatorDesktop() {
  const [formData, setFormData] = useState({});
  const [showResults, setShowResults] = useState(false);

  function toggleResults() {
    setShowResults(!showResults);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "70% 30%",
        width: "100%",
      }}
    >
      <Form type="text" />
      <Results userInput={formData} />
    </div>
  );
}
