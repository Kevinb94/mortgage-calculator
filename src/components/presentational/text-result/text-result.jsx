import React from "react";
import "./text-result.scss";
import styled from "styled-components";

const TextResultDiv = styled.div`
  /* Adapt the colors based on primary prop */
  border-bottom: 2px solid
    ${(props) => (props.colors ? props.colors.borderBottom : "red")};
`;

function TextResult(props) {
  return (
    <div className="text-result-container">
      <TextResultDiv className="text-result" colors={props.colors}>
        <div className="label">{props.label}</div>
        <span>{props.amount}</span>
      </TextResultDiv>
    </div>
  );
}

export default TextResult;
