import React, { useState } from "react";

const FormContext = React.createContext();

export const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    price: "",
    downPaymentType: "",
    downPayment: "",
    interestRate: "",
    loanTerm: "",
    setForm: () => {},
  });

  return (
    <FormContext.Provider
      value={{
        form,
        setForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
