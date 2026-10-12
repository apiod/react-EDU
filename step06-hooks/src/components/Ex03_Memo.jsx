import React, { useMemo, useState } from "react";

function Ex03_Memo() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  let len = list.length + 1;
  const [age, setAge] = useState(0);

  // 이렇게 사용하면 다른값도 변할때 같이 렌더링이 된다는 단점이 있다.
  // 이를 해결하기 위해서는 useMemo를 사용한다.
  //   const getSumResult = () => {
  //     console.log("getSumResult call...");
  //     let sum = 0;
  //     list.forEach((no) => {
  //       sum += no;
  //     });
  //     return sum;
  //   };

  //의존성 배열에 값이 변경될때만 실행이된다.
  const memeResult = useMemo(() => {
    console.log("memeResult call...");
    let sum = 0;
    list.forEach((no) => {
      sum += no;
    });
    return sum;
  }, [list]);
  return (
    <>
      <div>useMemo Test</div>
      {list.map((no, i) => (
        <h5 key={i}>{no}</h5>
      ))}
      {/* <h3>합계 : {getSumResult()}</h3> */}
      <h3>합계 : {memeResult}</h3>
      <button onClick={() => setList([...list, len])}>리스트 추가</button>
      <hr />
      <h3>나이: {age}</h3>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        나이 클릭
      </button>
    </>
  );
}

export default Ex03_Memo;
