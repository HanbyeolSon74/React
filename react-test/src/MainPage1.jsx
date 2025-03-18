import React from "react";
import LeftSection from "./Left";
import RightSection from "./Right";

const MainPage2 = () => {
  return (
    <div
      style={{
        maxwidth: 1280,
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: 100,
      }}
    >
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default MainPage2;
