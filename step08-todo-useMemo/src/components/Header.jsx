import React, { memo } from "react";
import "./Header.css";

function Header() {
  console.log("Header ....");
  return (
    <div className="Header">
      <h3>오늘의 Plan🌼</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

// export default Header;

//memo함수에 컴포넌트를 전달해서 새로운 컴포넌트를 리턴하게 하는것을 고차 컴포넌트
// 이 고차컴포넌트를 기억시킨다
// 고차 컴포넌트의 props가 변경되지 않으면 컴포넌트를 다시 랜더링하지 않는다.
export default memo(Header);
