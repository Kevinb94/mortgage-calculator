// In desptop display the calculator and results component side by side
import React, { useState } from "react";
import MortgageCalculatorDesktop from "./mortgage-calculator-desktop";
import MortgageCalculatorMobile from "./mortgage-calculator-mobile";
import MortgageCalculatorDetailed from "../detailed/mortgage-calculator-detailed.component";
import { FormContext } from "../../context/form-context";

export default function MortgageCalculator(props) {
  const [form, setForm] = useState({});
  const value = { form, setForm };
  return (
    <div className="mortgage-calculator">
      <FormContext.Provider value={value}>
        {props.getDeviceType() == "desktop" ? (
          <MortgageCalculatorDesktop></MortgageCalculatorDesktop>
        ) : (
          <MortgageCalculatorMobile></MortgageCalculatorMobile>
        )}
      </FormContext.Provider>
    </div>
  );
}
