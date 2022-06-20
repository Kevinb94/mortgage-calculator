// In desptop display the calculator and results component side by side
import React, { useState } from "react";
import MortgageCalculatorDesktop from "./mortgage-calculator-desktop";
import MortgageCalculatorMobile from "./mortgage-calculator-mobile";

export default function MortgageCalculator(props) {
  return (
    <div className="mortgage-calculator">
      {props.getDeviceType() == "desktop" ? (
        <MortgageCalculatorDesktop></MortgageCalculatorDesktop>
      ) : (
        <MortgageCalculatorMobile></MortgageCalculatorMobile>
      )}
    </div>
  );
}
