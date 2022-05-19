import { Bar } from "react-chartjs-2";
import { Doughnut, Chart } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { height } from "@mui/system";
import React, { useState, useEffect, useContext } from "react";
import TextResult from "../presentational/text-result/text-result";
import styled from "styled-components";
import { Button } from "@mui/material";
import { ThemeContext } from "../../context/theme-context";
import { FormContext } from "../../context/form-context";

import "./results.scss";
const ChartDiv = styled.div`
  /* Adapt the colors based on primary prop */
`;

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ["Mon", "Tue", "Wed", "Thurs", "Fri"],
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
  const { form, setForm } = useContext(FormContext);
  return (
    <div id="results-page">
      <ThemeContext.Consumer>
        {({ colors }) => (
          <div style={{ color: colors.lightText, height: "100%" }}>
            <div className="estimated-payment-info">
              <p>Estimated Payment</p>
              <h4>
                $1,575<span>/month</span>
              </h4>
              {form.downPayment}
            </div>

            <ChartDiv className="chart-container mobile-chart-container">
              <Doughnut className="doughnut" data={data} options={options} />
            </ChartDiv>

            <div className="text-results">
              <TextResult amount={"200"} label={"Loan Amount"}></TextResult>
              <TextResult amount={"400"} label={"Down Payment"}></TextResult>
              <TextResult
                amount={"4.171%"}
                label={"Interest Rate"}
              ></TextResult>
              <TextResult amount={"200"} label={"Loan Amount"}></TextResult>
            </div>

            <div className="button-wrapper">
              <Button className="save-results-button" variant="contained">
                Save Results
              </Button>
            </div>

            <div className="chart-container desktop-chart-container">
              <p>Payment Breakdown</p>
              <Doughnut data={data} options={options} />
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default Results;
