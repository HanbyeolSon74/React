import React from "react";
import { Select } from "antd";

const ColorSelector = ({ back, setBack, frontColor, setFontColor }) => {
  const backgroundOptions = [
    { value: "red", label: "빨간색" },
    { value: "yellow", label: "노란색" },
    { value: "blue", label: "파란색" },
  ];

  const fontOptions = [
    { value: "white", label: "흰색" },
    { value: "gray", label: "회색" },
    { value: "green", label: "초록색" },
  ];

  return (
    <div>
      배경색:
      <Select
        defaultValue={back}
        style={{ width: 120 }}
        onChange={setBack}
        options={backgroundOptions}
      />
      글자색:
      <Select
        defaultValue={frontColor}
        style={{ width: 120 }}
        onChange={setFontColor}
        options={fontOptions}
      />
    </div>
  );
};

export default ColorSelector;
