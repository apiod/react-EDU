import { createContext, useState } from "react";
import Child01 from "./Ex07_Chlid01";

//모든 현재 컴포넌트에 하위에 있는 컴포넌트에 사용 할 수 있도록 내보내기
// eslint-disable-next-line
export const GlobalContext = createContext();

const Context01 = () => {
  const [list, setList] = useState([
    { id: 1, name: "희정" },
    { id: 2, name: "나영" },
    { id: 3, name: "효리" },
  ]);

  const btnClick01 = () => {
    console.log("btnClick01 호출됨...");
  };

  const btnClick02 = () => {
    console.log("btnClick02 호출됨...");
  };

  return (
    <GlobalContext value={{ list: list, setList, btnClick01, btnClick02 }}>
      <div style={{ border: "1px red solid", padding: "10px" }}>
        <h1>useContext TEST</h1>
        <h3 onClick={btnClick01}>클릭</h3>
        {list.map((user) => (
          <div key={user.id}>
            {" "}
            {user.id} : {user.name}{" "}
          </div>
        ))}
        <Child01 />
      </div>
    </GlobalContext>
  );
};

export default Context01;
