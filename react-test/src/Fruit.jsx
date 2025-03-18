import React from "react";
import { Select } from "antd";
import apple from "./img/apple.jpg";
import banana from "./img/banana.jpg";
import grape from "./img/grape.jpg";

const FruitSelector = ({ fruit, setFruit }) => {
  const options = [
    { value: apple, label: "사과" },
    { value: banana, label: "바나나" },
    { value: grape, label: "포도" },
  ];

  return (
    <div>
      과일:
      <Select
        defaultValue={fruit}
        style={{ width: 120 }}
        onChange={setFruit}
        options={options}
      />
    </div>
  );
};

export default FruitSelector;
