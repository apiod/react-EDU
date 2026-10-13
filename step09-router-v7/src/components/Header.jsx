import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();
  const btn1 = () => {
    //기능 작성
    //유효성체크...  성공하면 페이지  전환하고 아니면 메시지 출력
    nav("/");
  };
  const btn2 = () => {
    nav("user/king");
  };
  const btn3 = () => {
    nav("admin");
  };

  return (
    <div style={{ border: "3px solid black", padding: "10px" }}>
      <h3>메뉴구성</h3>
      <Link to="/"> HOME</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/user/cow"> USER</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/admin"> ADMIN</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/admin/manager"> MANAGER</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <hr />
      <button onClick={btn1}>클릭1</button>
      <button onClick={btn2}>클릭2</button>
      <button onClick={btn3}>클릭3</button>
    </div>
  );
}

export default Header;
