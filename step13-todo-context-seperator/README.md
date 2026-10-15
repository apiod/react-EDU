# redux TodoList

기존 useContext를 이용한 TodoList를  
redux를 이용한 todoList로 변환

```javascript
<APP/> //은 기존 useContext
<Exam/> //은 redux를 이용한 것
```

```javascript
//store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";
const Slice명 = createSlice({
  name: "todos",
  initialState: 초기 값,
  reducers: {
    구현함수명:() => {
    },
    구현함수명1: (state,action) => {
        state//현재 값
        action.payload //인자 값
    }
    ...}
})
export const{구현함수명} =Slice명.actions;
export default configureStore({
  reducer: {
    todos: Slice명.reducer,
  },
});
```

```javascript
import { 구현함수명 } from "../redux/store";

const dispatch = useDispatch();
dispatch(구현함수명(인자값)); //
```
