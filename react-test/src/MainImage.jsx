import React from "react";

const MainImage = ({ image }) => {
  return (
    <img
      src={image}
      alt="메인 이미지"
      style={{
        width: "300px",
        height: "300px",
        border: "2px solid black",
        borderRadius: "5px",
      }}
    />
  );
};

export default MainImage;
