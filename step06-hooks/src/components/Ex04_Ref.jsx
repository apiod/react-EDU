import React, { useEffect, useRef } from "react";

function Ex04_Ref() {
  console.log("Ex04_Ref 랜더링");
  const inputRef = useRef();
  //undefined뜨는 이유는 input태그에 ref가 아직 안읽어졌기 때문에
  console.log(inputRef);

  useEffect(() => {
    // 랜더링된 이후에 실행이 되기 때문에 undefined가 안뜬다.
    console.log("useEffect");
    console.log(inputRef);
    inputRef.current.focus();
  }, []);
  return (
    <>
      <div>useRef로 Dom접근 쉽게하기</div>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          console.log(`${inputRef.current.value} 입력`);
        }}
      >
        클릭
      </button>
    </>
  );
}

export default Ex04_Ref;
