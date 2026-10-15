import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 0,
      isDone: false,
      content: "React study",
      date: new Date().getTime(),
    },
    { id: 1, isDone: true, content: "친구만나기", date: new Date().getTime() },
    { id: 2, isDone: false, content: "낮잠자기", date: new Date().getTime() },
  ],
  reducers: {
    onCreate: (state, action) => {
      state.push(action.payload);
    },
    onUpdate: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    onDelete: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { onCreate, onUpdate, onDelete } = todoSlice.actions;

export default configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
