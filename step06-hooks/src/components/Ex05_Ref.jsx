import React, { useRef, useState } from "react";

function Ex05_Ref() {
  console.log("Ex05_Ref 랜더링...");
  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  return (
    <>
      <div>useRef vs useState 차이</div>
      <p>
        {/* eslint-disable-next-line */}
        useRef: {countRef.current}
        <button
          onClick={() => {
            countRef.current = countRef.current + 1;
          }}
        >
          {" "}
          ref Up
        </button>
      </p>
      <hr />
      <p>
        useState: {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {" "}
          state Up
        </button>
      </p>
    </>
  );
}

export default Ex05_Ref;
