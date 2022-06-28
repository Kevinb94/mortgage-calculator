// In desptop display the calculator and results component side by side
import React, { useState, useContext } from "react";
import Form from "../../components/form/form";
import Results from "../../components/results/results";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormContext from "../../context/form-context";

export default function MortgageCalculatorMobile() {
  const [formData, setFormData] = useState({});
  const { showResults, setToggleResults } = useContext(FormContext);

  return (
    <>
      {showResults ? (
        <div style={{ heigh: "100%" }}>
          <ArrowBackIcon onClick={() => setToggleResults(!showResults)} />
          <Results userInput={formData} />
        </div>
      ) : (
        <Form type="text" />
      )}
      ;
    </>
  );
}
