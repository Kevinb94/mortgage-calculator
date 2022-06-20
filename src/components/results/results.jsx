import { Bar } from "react-chartjs-2";
import { Doughnut, Chart } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { height } from "@mui/system";
import React, { useState, useEffect, useContext } from "react";
import TextResult from "../presentational/text-result/text-result";
import styled from "styled-components";
import { Button } from "@mui/material";
import { ThemeContext } from "../../context/theme-context";
import FormContext from "../../context/form-context";
import { EstimatedPayment } from "./calculateFunctions";

import "./results.scss";
const ChartDiv = styled.div`
  /* Adapt the colors based on primary prop */
`;

const ResultButton = styled.button`
  /* Adapt the colors based on primary prop */
  padding: 0.4em;
  color: ${(props) => (props.colors ? props.colors.resultButtonText : "black")};
  border: none;
  border-radius: 0.4em;
  background-color: ${(props) =>
    props.colors ? props.colors.resultButton : "black"};
`;

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ["Principal", "Interest", "HOA", "Taxes"],
  datasets: [
    {
      label: "Attendance for Week 1",
      data: [25, 24, 25, 25, 3],
      fontColor: "#fff",
      color: "#FFF",
      borderColor: ["rgba(255,206,86,0.2)"],
      backgroundColor: [
        "rgba(232,99,132,1)",
        "rgba(232,211,6,1)",
        "rgba(54,162,235,1)",
        "rgba(255,159,64,1)",
        "rgba(153,102,255,1)",
      ],
      pointBackgroundColor: "rgba(255,206,86,0.2)",
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "Doughnut Chart",
      color: "blue",
      font: {
        size: 34,
      },
      padding: {
        top: 30,
        bottom: 30,
      },
      responsive: true,
      animation: {
        animateScale: true,
      },
    },
    legend: {
      display: true,
      position: "bottom",
      fontColor: "#FFF",
      labels: {
        fontColor: "#FFF",
      },
    },
    dataLabels: {
      color: "#FFF",
      fontColor: "#FFF",
    },
  },

  legend: {
    labels: {
      fontColor: "#FFF", //set your desired color
    },
  },
  maintainAspectRatio: false,
};

function Results(props) {
  const [values, setValues] = useState({});
  const [donutData, setDonutData] = useState(data);
  const { form, setForm } = useContext(FormContext);

  useEffect(() => {
    // Update the document title using the browser API
    if (form.price) {
      let calculateValues = EstimatedPayment(
        form.price,
        form.downPayment,
        form.interestRate,
        form.loanTerm
      );

      let donut = {
        labels: ["Principal", "Interest", "Taxes", "HOA", "Insurance"],
        datasets: [
          {
            label: "Attendance for Week 1",
            data: [
              calculateValues.monthlyPrincipal,
              calculateValues.montlyInterestPayment,
              25,
              25,
              3,
            ],
            fontColor: "#fff",
            color: "#FFF",
            borderColor: ["rgba(255,206,86,0.2)"],
            backgroundColor: [
              "rgba(232,99,132,1)",
              "rgba(232,211,6,1)",
              "rgba(54,162,235,1)",
              "rgba(255,159,64,1)",
              "rgba(153,102,255,1)",
            ],
            pointBackgroundColor: "rgba(255,206,86,0.2)",
          },
        ],
      };
      setDonutData(donut);
      setValues(calculateValues);
    }
  }, [form]);

  return (
    <div id="results-page">
      <ThemeContext.Consumer>
        {({ colors }) => (
          <div style={{ color: colors.resultsText, height: "100%" }}>
            <div className="estimated-payment-info">
              <p>Estimated Payment</p>
              <h4>
                {form.price ? values.monthlyPayment : 0}
                <span>/month</span>
              </h4>
            </div>

            <ChartDiv className="chart-container mobile-chart-container">
              <Doughnut
                className="doughnut"
                data={donutData}
                options={options}
              />
            </ChartDiv>

            <div className="text-results">
              <TextResult
                amount={form.price ? form.price : null}
                label={"Loan Amount"}
                colors={colors}
              ></TextResult>
              <TextResult
                amount={form.downPayment ? form.downPayment : null}
                label={"Down Payment"}
                colors={colors}
              ></TextResult>
              <TextResult
                amount={form.interestRate ? `${form.interestRate}%` : ""}
                label={"Interest Rate"}
                colors={colors}
              ></TextResult>
              <TextResult
                amount={form.loanTerm ? `${form.loanTerm} years` : ""}
                label={"Loan term"}
                colors={colors}
              ></TextResult>
            </div>

            <div className="button-wrapper">
              <ResultButton
                className="save-results-button"
                variant="contained"
                colors={colors}
              >
                Save Results
              </ResultButton>
            </div>

            <div className="chart-container desktop-chart-container">
              <p>Payment Breakdown</p>
              <Doughnut data={donutData} options={options} />
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default Results;
