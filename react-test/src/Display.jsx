import React from "react";

const Display = ({ fruit, text, back, frontColor }) => {
  return (
    <div>
      <img style={{ width: 200, height: 200 }} src={fruit} alt="과일 이미지" />
      <div
        style={{
          padding: 10,
          width: 200,
          backgroundColor: back,
          color: frontColor,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Display;
