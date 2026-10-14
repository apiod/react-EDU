import { configureStore, createSlice } from "@reduxjs/toolkit";
//작은 단위(slice) 형태로 state정보를 정의
const countSlice = createSlice({
  name: "count",
  initialState: { no: 0 },
  reducers: {
    //첫번째 값으로 현재 상태(현재 값)
    up(state) {
      console.log(state); //현재 값
      state.no = state.no + 1;
    },
    down(state) {
      state.no = state.no - 1;
    },
    incrementByAmount() {},
  },
});
//위 countSlice의 reducers에 정의된 함수를외부에서 사용할 수 있도록 export
export const { up, down, incrementByAmount } = countSlice.actions;

//여러 slice들을 reducer에 등록하는 작업이 필요함
export default configureStore({
  reducer: {
    count: countSlice.reducer,
  },
});
