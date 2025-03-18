import React, { useState } from "react";
import { Select, Button, Rate } from "antd";

const { Option } = Select;

const RightSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptionPrice, setSelectedOptionPrice] = useState(0);
  // 별점 카운팅 가능
  //   const [rating, setRating] = useState(0);

  const basePrice = 34500;
  const productName = "맛있는 사과";
  const reviews = 2905;
  const rating = 5;
  const deliveryInfo = "이 상품은 내일 도착, 무료배송";
  const options = [
    { label: "기본(+0원)", price: 0 },
    { label: "선물 포장(+3,000원)", price: 3000 },
    { label: "고급 포장(+11,000원)", price: 11000 },
  ];

  const totalPrice = basePrice * quantity + selectedOptionPrice;

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 400,
      }}
    >
      <h2>{productName}</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* <Rate allowHalf value={rating} onChange={setRating} /> */}
        <Rate disabled allowHalf defaultValue={rating} />
        <span style={{ fontSize: "14px", color: "blue" }}>
          ({reviews}개 상품평)
        </span>
      </div>

      <hr />

      <h3 style={{ color: "red", fontWeight: "bold" }}>
        {basePrice.toLocaleString()}원 (박스당)
      </h3>
      <hr />

      <p style={{ color: "green", fontSize: "14px" }}>{deliveryInfo}</p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          gap: "10px",
        }}
      >
        <Button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
          -
        </Button>
        <span style={{ margin: "0 10px", fontSize: "16px" }}>{quantity}</span>
        <Button onClick={() => setQuantity((prev) => prev + 1)}>+</Button>

        <Select
          defaultValue={options[0].label}
          style={{ width: "100%" }}
          onChange={(value) => setSelectedOptionPrice(Number(value))}
        >
          {options.map((option, index) => (
            <Option key={index} value={option.price}>
              {option.label}
            </Option>
          ))}
        </Select>

        <Button onClick={() => alert("기능 준비 중 입니다")}>장바구니</Button>
        <Button onClick={() => alert("기능 준비 중 입니다")}>바로 구매</Button>
      </div>

      <h3 style={{ marginTop: "80px", color: "red", fontWeight: "bold" }}>
        총 : {totalPrice.toLocaleString()}원
      </h3>
    </div>
  );
};

export default RightSection;
