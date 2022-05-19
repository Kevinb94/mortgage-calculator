import React from "react";

export const FormContext = React.createContext({
  price: "",
  downPaymentType: "",
  downPayment: "",
  interestRate: "",
  loanTerm: "",
  setForm: () => {},
});
