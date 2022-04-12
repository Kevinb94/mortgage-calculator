// In mobile show the calculator first, then display the results
// component with a state variable like state.step = 'calculate'
import React, { useState } from "react";
import Form from "../components/container/form/form";
import Results from "../components/presentational/results/results";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./mobile.scss";

export default function MobileView() {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({});

  function formCompleted(data) {
    setFormData((existingData) => ({
      ...existingData,
      ...data,
    }));
    toggleResults();
  }

  function toggleResults() {
    setShowResults(!showResults);
  }

  return (
    <div className="mobile-view">
      {!showResults ? (
        <Form type="text" isMobile={true} toggleShowResults={toggleResults} />
      ) : (
        <div style={{ height: "100%" }}>
          <ArrowBackIcon onClick={toggleResults} />
          <Results userInput={formData} device={"mobile"}></Results>
        </div>
      )}
    </div>
  );
}
