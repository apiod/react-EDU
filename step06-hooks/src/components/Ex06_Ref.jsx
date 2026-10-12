import React, { useRef, useState } from "react";
let no = 0;
function Ex06_Ref() {
  console.log("Ex06_Ref 랜더링...");
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  return (
    <>
      <div>useRef vs useState vs let차이</div>
      <p>
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
          state Up
        </button>
      </p>
      <hr />
      <p>
        let: {no}
        <button
          onClick={() => {
            no = no + 1;
            console.log(no);
          }}
        >
          let Up
        </button>
      </p>
    </>
  );
}

export default Ex06_Ref;
