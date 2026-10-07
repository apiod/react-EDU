import React from "react";
import { useState } from "react";

function Ex01_Count() {
  const [stack, setStack] = useState(0);
  const plus = () => {
    setStack(stack + 1);
  };
  const minus = () => {
    setStack(stack - 1);
  };
  return (
    <div>
      <h2>숫자증가</h2>
      <button onClick={minus}>빼기</button>
      <span> 숫자{stack} </span>
      <button
        onClick={() => {
          setStack(stack + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default Ex01_Count;
