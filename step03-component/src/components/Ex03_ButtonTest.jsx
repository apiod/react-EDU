import React from "react";
import Ex03_ButtonImg from "./Ex03_ButtonImg";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import search from "../assets/search.png";
import { Header } from "../App";

function Ex03_ButtonTest() {
  const btnClick = (e) => {
    console.log(e.target);
    console.log(e.target.innerText + "클릭~");

    e.target.style.border;
  };

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <Ex03_ButtonImg src={location} title="위치" btnClick={btnClick}>
        <Header />
      </Ex03_ButtonImg>
      <Ex03_ButtonImg src={mail} title="메일" btnClick={btnClick} />
      <Ex03_ButtonImg src={search} title="검색" btnClick={btnClick} />
    </div>
  );
}

export default Ex03_ButtonTest;
