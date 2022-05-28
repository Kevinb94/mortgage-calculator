export function EstimatedPayment(homePrice, downPayment, interestRate, loanTerm){
    let termDecimal = parseFloat(interestRate) / 100;
    let monthlyInterestRate = parseFloat(termDecimal / 12).toFixed(4);
    monthlyInterestRate = parseFloat(monthlyInterestRate);
    monthlyInterestRate = 1 + monthlyInterestRate;

    let paymentCount = loanTerm * 12;

    let exponent = Math.pow(monthlyInterestRate, -paymentCount).toFixed(4);
    exponent = parseFloat(exponent);
    exponent = 1 - exponent;
    exponent = 0.0036 / exponent;

    let monthlyPayment = exponent * homePrice;
    monthlyPayment =  Math.ceil( monthlyPayment );
    let monthlyInterestPayment = (monthlyPayment/100)*monthlyInterestRate;
    return { 
        monthlyPayment: monthlyPayment,
        montlyInterestPayment: monthlyInterestPayment,
        monthlyPrincipal: monthlyPayment - monthlyInterestPayment
    };
}