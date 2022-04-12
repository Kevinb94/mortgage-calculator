import { Bar } from "react-chartjs-2";
import { Doughnut, Chart } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { height } from "@mui/system";
import React, { useState, useEffect } from "react";
import TextResult from "../text-result/text-result";
import styled from "styled-components";
import { Button } from "@mui/material";

import "./results.scss";

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
  const ChartDiv = styled.div`
    /* Adapt the colors based on primary prop */
  `;
  return (
    <div id="results-page">
      <div className="estimated-payment-info">
        <p>Estimated Payment</p>
        <h4>
          $1,575<span>/month</span>
        </h4>
      </div>

      {isCorrectDevice("mobile", props) ? (
        <ChartDiv className="chart-container">
          <Doughnut className="doughnut" data={data} options={options} />
        </ChartDiv>
      ) : null}

      {/* {isCorrectDevice("desktop", props) ? ( */}

      {/* ) : null} */}

      <div className="text-results">
        <TextResult amount={"200"} label={"Loan Amount"}></TextResult>
        <TextResult amount={"400"} label={"Down Payment"}></TextResult>
        <TextResult amount={"4.171%"} label={"Interest Rate"}></TextResult>
        <TextResult amount={"200"} label={"Loan Amount"}></TextResult>
      </div>
      {isCorrectDevice("mobile", props) ? (
        <div className="button-wrapper">
          <Button className="save-results-button" variant="contained">
            Save Results
          </Button>
        </div>
      ) : null}

      {isCorrectDevice("desktop", props) ? (
        <div className="chart-container desktop-chart-container">
          <p>Payment Breakdown</p>
          <Doughnut data={data} options={options} />
        </div>
      ) : null}
    </div>
  );

  function isCorrectDevice(deviceType, props) {
    if (props.device == deviceType) {
      return true;
    }
  }
}

export default Results;
