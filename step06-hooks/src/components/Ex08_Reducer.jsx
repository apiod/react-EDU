import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  console.log("-----------");
  switch (action.type) {
    case "UP":
      return state + action.data;
    case "DOWN":
      return state - action.data;
    default:
      return state;
  }
};
function Ex08_Reducer() {
  const [state, dispatch] = useReducer(reducer, 0);
  const onClickPlus = () => {
    dispatch({
      type: "UP",
      data: 1,
    });
  };
  const onClickMinus = () => {
    dispatch({
      type: "DOWN",
      data: 1,
    });
  };

  return (
    <>
      <div>Ex07_Reducer</div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </>
  );
}

export default Ex08_Reducer;
