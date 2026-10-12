import "./App.css";
import Ex01_Effect from "./components/Ex01_Effect";
import Ex02_Effect from "./components/Ex02_Effect";
import Ex03_Memo from "./components/Ex03_Memo";
import Ex04_Ref from "./components/Ex04_Ref";
import Ex05_Ref from "./components/Ex05_Ref";

function App() {
  return (
    <>
      {/* 1. useEffect의 라이프사이클 */}
      {/* <Ex01_Effect/> */}
      {/*  */}
      {/* 2. useEffect를 이용한 자원정리 */}
      {/* <Ex02_Effect/> */}
      {/*  */}
      {/* 3. useMemo - 연산작업 기억시키기*/}
      {/* <Ex03_Memo /> */}
      {/*  */}
      {/* 4. use.Ref를 이용한 Dom접근 */}
      {/* <Ex04_Ref /> */}
      {/*  */}
      {/* 5. useRef vs useState 차이 */}
      <Ex05_Ref />
    </>
  );
}

export default App;
