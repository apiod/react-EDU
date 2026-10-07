import "./App.css";
import Ex01_Export, { Ex01_Export2, num } from "./components/Ex01_Export";
import Libray from "./components/Ex02_Libray";
import Ex03_ButtonTest from "./components/Ex03_ButtonTest";

export function Header() {
  return (
    <>
      <h3>Header 영역</h3>
      <button> 클릭 </button>
    </>
  );
}

function App() {
  return (
    <>
      <h1>component개념 이해하기 {num}</h1>
      <Header />
      <Ex01_Export />
      <Ex01_Export2 />

      <Libray />
      <Ex03_ButtonTest />
    </>
  );
}

export default App;
