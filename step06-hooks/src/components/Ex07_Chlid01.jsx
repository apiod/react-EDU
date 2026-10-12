import { use, useRef } from "react";
import Child02 from "./Ex07_Chlid02";
import { GlobalContext } from "./Ex07_Context01";

const Child01 = () => {
  const { setList, btnClick01, list } = use(GlobalContext);
  let idNo = useRef(4);
  return (
    <div style={{ border: "1px blue solid", padding: "10px" }}>
      <h3>Child01입니다.</h3>
      <button onClick={btnClick01}>눌려봐</button>
      <button
        onClick={() => {
          setList([...list, { id: idNo.current++, name: "태호" }]);
        }}
      >
        추가
      </button>

      <hr />
      <Child02 />
    </div>
  );
};

export default Child01;
