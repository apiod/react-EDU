import { useState } from "react";
import "./App.css";
import Ex01_Count from "./components/Ex01_Count";

function App() {
  return (
    <>
      {/* useState를 이용한 숫자 증가, 감소 */}
      <Ex01_Count />
    </>
  );
}

export default App;
