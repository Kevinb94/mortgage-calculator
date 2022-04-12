import React from "react";
import "./text-result.scss";

function TextResult(props) {
  return (
    <div className="text-result-container">
      <div className="text-result">
        <div className="label">{props.label}</div>
        <span>{props.amount}</span>
      </div>
    </div>
  );
}

export default TextResult;
