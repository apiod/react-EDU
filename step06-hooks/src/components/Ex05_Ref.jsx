import React, { useRef, useState } from "react";

function Ex05_Ref() {
  console.log("Ex05_Ref 랜더링...");
  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  return (
    <>
      <div>useRef vs useState 차이</div>
      <p>
        useRef: {countRef.current}
        <button> ref Up</button>
      </p>
      <hr />
      <p>
        useState: {count}
        <button> state Up</button>
      </p>
    </>
  );
}

export default Ex05_Ref;
