import React from "react";

const ImageThumbnail = ({ src, alt, setMainImage }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "80px",
        height: "80px",
        border: "2px solid black",
        cursor: "pointer",
        borderRadius: "5px",
      }}
      onClick={() => setMainImage(src)}
      onMouseEnter={() => setMainImage(src)}
    />
  );
};

export default ImageThumbnail;
