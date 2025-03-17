import React from "react";
import "./MainStyle.css";

// 번역
const YellowComponent = (props) => {
  return (
    <div className="yellow-component">
      <div>{props.value("감자, 고구마")}</div>
    </div>
  );
};

export default YellowComponent;
