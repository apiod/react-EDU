import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// function Test() {
//   return (
//     <>
//       <h3>컴포넌트시작</h3>
//     </>
//   );
// }

// const Test2 = function () {
//   return (
//     <>
//       <h3>두 번째 컴포넌트</h3>
//     </>
//   );
// };
createRoot(document.getElementById("root")).render(
  // <>
  //   <Test />
  //   <Test2 />
  // </>,

  <App />,
);
