import React from "react";
import "./Ex03_ButtonImg.css";

function Ex03_ButtonImg({ src, title, btnClick }) {
  return (
    <div className="divBtn">
      <img src={src} art={title} />
      <button onClick={btnClick}>{title}</button>
    </div>
  );
}

export default Ex03_ButtonImg;
