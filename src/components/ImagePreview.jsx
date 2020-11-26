import React from "react";

function ImagePreview(props) {
  const style = {
    section: {
      padding: "20px",
    },
    image: {
      maxWidth: "650px",
      maxHeight: "380px",
      objectFit: "cover",
    },
  };
  const image = props.image ? URL.createObjectURL(props.image) : "";
  return (
    <div className="preview-container" style={style.section}>
      <h3 className="section-title">Vista Previa</h3>
      <img src={image} alt={props.imageName} style={style.image} />
    </div>
  );
}

export default ImagePreview;
