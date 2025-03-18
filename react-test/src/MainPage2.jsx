import React, { use, useState } from "react";
import FruitSelector from "./Fruit";
import ColorSelector from "./Color";
import TextInput from "./Input";
import Display from "./Display";
import apple from "./img/apple.jpg";

const MainPage1 = () => {
  // 과일 value 저장
  const [fruit, setFruit] = useState(apple);
  // 배경
  const [back, setBack] = useState("red");
  // 글자색
  const [frontColor, setFontColor] = useState("white");
  // 텍스트
  const [text, setText] = useState("");

  // // 과일 옵션
  // const option1 = [
  //   {
  //     value: apple,
  //     label: "사과",
  //   },
  //   {
  //     value: banana,
  //     label: "바나나",
  //   },
  //   {
  //     value: grape,
  //     label: "포도",
  //   },
  // ];

  // // 배경색 옵션
  // const option2 = [
  //   {
  //     value: "red",
  //     label: "빨간색",
  //   },
  //   {
  //     value: "yellow",
  //     label: "노란색",
  //   },
  //   {
  //     value: "blue",
  //     label: "파란색",
  //   },
  // ];

  // // 글자색 옵션
  // const option3 = [
  //   { value: "white", label: "흰색" },
  //   { value: "gray", label: "회색" },
  //   { value: "green", label: "초록색" },
  // ];

  // const fruitChange = (value) => {
  //   setFruit(value);
  // };

  return (
    // <>
    //   <>
    //     <div>
    //       과일:
    //       <Select
    //         defaultValue={fruit}
    //         style={{
    //           width: 120,
    //         }}
    //         onChange={fruitChange}
    //         options={option1}
    //       />
    //       배경색 :
    //       <Select
    //         defaultValue={back}
    //         style={{
    //           width: 120,
    //         }}
    //         onChange={(value) => {
    //           setBack(value);
    //         }}
    //         options={option2}
    //       />
    //       글자색 :
    //       <Select
    //         defaultValue={frontColor}
    //         style={{
    //           width: 120,
    //         }}
    //         options={option3}
    //         onChange={(value) => {
    //           setFontColor(value);
    //         }}
    //       />
    //     </div>
    //     내용 :
    //     <Input
    //       style={{ width: 400 }}
    //       onChange={(e) => {
    //         setText(e.target.value);
    //       }}
    //     />
    //     <br />
    //     <img
    //       style={{
    //         width: 200,
    //         height: 200,
    //       }}
    //       src={fruit}
    //       alt="asd"
    //     />
    //     <div
    //       style={{
    //         padding: 10,
    //         width: 200,
    //         backgroundColor: back,
    //         color: frontColor,
    //       }}
    //     >
    //       {text}
    //     </div>
    //   </>
    // </>
    <>
      <FruitSelector fruit={fruit} setFruit={setFruit} />
      <ColorSelector
        back={back}
        setBack={setBack}
        frontColor={frontColor}
        setFontColor={setFontColor}
      />
      <TextInput text={text} setText={setText} />
      <Display fruit={fruit} text={text} back={back} frontColor={frontColor} />
    </>
  );
};

export default MainPage1;
