import "./MainStyle.css";
import React from "react";

// 번역
const OrangeComponent = (props) => {
  const { hello, translateHello } = props;

  return (
    <div className="orange-component">
      <button onClick={translateHello}>번역</button>
      <div>{hello}</div>
    </div>
  );
};

export default OrangeComponent;
