import React, { useState } from "react";

const FormContext = React.createContext();

export const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    price: "",
    downPaymentType: "",
    downPayment: "",
    interestRate: "",
    loanTerm: "",
    setForm: () => {}
  });
  const [results, setResults] = useState({
    monthlyPayment: 0,
    monthlyInterestPayment: 0,
    monthlyPrincipal: 0
  })
  const [showResults, setToggleResults] = useState(false)
  

  const getEstimatedPayment = () => {
    let {interestRate, downPayment, price, loanTerm } = form;
    console.log("Get Estimated Payment Function Triggerd");
    console.log(interestRate, downPayment, price)

    let termDecimal = parseFloat(interestRate) / 100;
    let monthlyInterestRate = parseFloat(termDecimal / 12).toFixed(4);
    monthlyInterestRate = parseFloat(monthlyInterestRate);
    monthlyInterestRate = 1 + monthlyInterestRate;

    let paymentCount = loanTerm * 12;

    let exponent = Math.pow(monthlyInterestRate, -paymentCount).toFixed(4);
    exponent = parseFloat(exponent);
    exponent = 1 - exponent;
    exponent = 0.0036 / exponent;

    let monthlyPayment = exponent * price;
    monthlyPayment =  Math.ceil( monthlyPayment );
    let monthlyInterestPayment = (monthlyPayment/100)*monthlyInterestRate;
    setResults({monthlyPayment,monthlyInterestPayment, monthlyPrincipal: monthlyPayment - monthlyInterestPayment})
  }

  return (
    <FormContext.Provider
      value={{
        form,
        showResults,
        setForm,
        getEstimatedPayment,
        setToggleResults
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
