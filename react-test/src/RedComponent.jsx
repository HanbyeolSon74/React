import "./MainStyle.css";
import React from "react";

// +/-
const RedComponent = (props) => {
  const { number, sumNumber, miNumber } = props;

  return (
    <div className="red-component">
      <button onClick={miNumber}>-</button>
      <div>{number}</div>
      <button onClick={sumNumber}>+</button>
    </div>
  );
};

export default RedComponent;
