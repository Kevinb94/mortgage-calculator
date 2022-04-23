// In desptop display the calculator and results component side by side
import React, { useState } from "react";
import Form from "../../components/form/form";
import Results from "../../components/results/results";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function MortgageCalculatorMobile() {
  const [formData, setFormData] = useState({});
  const [showResults, setShowResults] = useState(false);

  function toggleResults() {
    setShowResults(!showResults);
  }

  return (
    <>
      {showResults ? (
        <div style={{ heigh: "100%" }}>
          <ArrowBackIcon onClick={toggleResults} />
          <Results userInput={formData} />
        </div>
      ) : (
        <Form type="text" toggleShowResults={toggleResults} />
      )}
      ;
    </>
  );
}
