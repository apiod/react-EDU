import { configureStore, createSlice } from "@reduxjs/toolkit";
//작은 단위(slice) 형태로 state정보를 정의
const countSlice = createSlice({
  name: "count",
  initialState: { no: 0 },
  reducers: {
    //첫번째 값으로 현재 상태(현재 값)
    up(state) {
      // console.log(state); //현재 값
      state.no = state.no + 1;
    },
    down(state) {
      state.no = state.no - 1;
    },

    incrementByAmount(state, action) {
      // incrementByAmount(state, { payload }) {
      // console.log(state);
      // console.log(action); // action객체 안에서 payload속성으로 값이 전달됨.
      // console.log(payload);
      state.no = state.no + action.payload;
    },
  },
});

//장바구니에 해당하는 상태변수 설정

const cartSlice = createSlice({
  name: "cart",
  initialState: [
    { id: 1, name: "수박", count: 3 },
    { id: 2, name: "딸기", count: 5 },
  ],
  reducers: {
    addCount: (state, action) => {
      let index = state.findIndex((item) => item.id === action.payload);
      state[index].count++;
    },
    sortByName: (state) => {
      state.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    addItem: (state, { payload }) => {
      state.push(payload);
    },
  },
});

//위 countSlice의 reducers에 정의된 함수를외부에서 사용할 수 있도록 export
export const { up, down, incrementByAmount } = countSlice.actions;
export const { addCount, sortByName, addItem } = cartSlice.actions;

//여러 slice들을 reducer에 등록하는 작업이 필요함
export default configureStore({
  reducer: {
    count: countSlice.reducer,
    cart: cartSlice.reducer,
  },
});
