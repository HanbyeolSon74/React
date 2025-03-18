import React, { useState } from "react";
import MainImage from "./MainImage";
import ImageThumbnail from "./Image1";

import apple1 from "./img/apple.jpg";
import apple2 from "./img/apple2.jpg";
import apple3 from "./img/apple3.jpg";

const LeftSection = () => {
  const [mainImage, setMainImage] = useState(apple1);

  // 이미지 배열로 관리
  const images = [
    { id: 1, src: apple1, alt: "apple1" },
    { id: 2, src: apple2, alt: "apple2" },
    { id: 3, src: apple3, alt: "apple3" },
  ];

  return (
    <div>
      <MainImage image={mainImage} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {images.map((image) => (
          <ImageThumbnail
            key={image.id}
            src={image.src}
            alt={image.alt}
            setMainImage={setMainImage}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftSection;
