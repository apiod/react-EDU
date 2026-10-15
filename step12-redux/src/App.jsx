// Redux store와 연결된 React 훅 import
import { useDispatch, useSelector } from "react-redux";

// 스타일 파일 import (선택 사항)
import "./App.css";

// store에서 정의한 액션 생성자(import한 slice 액션들)
import { down, incrementByAmount, up } from "./redux/store";
import Cart from "./components/Cart";

function App() {
  console.log("App lendering...");
  const no = useSelector(
    (state) => {
      // console.log(state);
      return state.count.no;
    },
    // { //변경사항이있는지 체크해서 콘솔에 표시하게 하는것
    //   devModeChecks: {
    //     stabilityCheck: "never",
    //     identityFunctionCheck: "never",
    //   },
    // },
  );
  const dispatch = useDispatch();
  // '빼기' 버튼 클릭 시 down 액션을 디스패치 (no - 1)
  const minusFn = () => {
    dispatch(down());
  };

  // '더하기' 버튼 클릭 시 up 액션을 디스패치 (no + 1)
  const plusFn = () => {
    dispatch(up());
  };

  return (
    <>
      <h1>React-Redux TEST</h1>

      {/* 카운트 UI 영역 */}
      <div className="Count">
        {/* 버튼 클릭 시 각각 액션을 디스패치 */}
        <button onClick={minusFn}>빼기</button>
        {/* 현재 Redux store에 저장된 상태 값 표시 */}
        <span> {no} </span>

        <button onClick={plusFn}>더하기</button>
        {/* 5만큼 증가시키는 커스텀 액션 실행 */}
        <button onClick={() => dispatch(incrementByAmount(5))}>5씩 증가</button>
      </div>
      <hr />

      <Cart />
    </>
  );
}

export default App;
