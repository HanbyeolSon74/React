import React, { useState } from "react";
import RedComponent from "./RedComponent";
import OrangeComponent from "./OrangeComponent";
import YellowComponent from "./YellowComponent";
import GreenComponent from "./GreenComponent";
import BlueComponent from "./BlueComponent";
import NavyComponent from "./NavyComponent";
import PurpleComponent from "./PurpleComponent";

const MainPage1 = () => {
  const [number, setNumber] = useState(0);
  const [hello, setHello] = useState("안녕하세요.");

  // 숫자 증가 함수
  const sumNumber = () => setNumber(number + 1);
  // 숫자 감소 함수
  const miNumber = () => setNumber(number - 1);

  // 번역 함수
  const translateHello = () => setHello("Hello");

  // prams
  const changeValue = (value) => {
    return value;
  };

  return (
    <div>
      <RedComponent number={number} sumNumber={sumNumber} miNumber={miNumber} />
      <OrangeComponent hello={hello} translateHello={translateHello} />
      <YellowComponent value={changeValue} />
      <GreenComponent />
      <BlueComponent />
      <NavyComponent />
      <PurpleComponent />
    </div>
  );
};

export default MainPage1;
