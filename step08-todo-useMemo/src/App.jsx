//eslint-disable-next-line
import { useReducer, useRef, useState, useCallback } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { createContext } from "react";
import { useMemo } from "react";

//랜더링이 될때 다시 실행되지 않아도 되기에 함수 밖에 선언한다.
const mockData = [
  { id: 0, isDone: false, content: "React study", date: new Date().getTime() },
  { id: 1, isDone: false, content: "친구만나기", date: new Date().getTime() },
  { id: 2, isDone: false, content: "낮잠자기", date: new Date().getTime() },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.data ? { ...todo, isDone: !todo.isDone } : todo,
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.data);
    default:
      return state;
  }
};

//eslint-disable-next-line
export const TodoContext = createContext();

//eslint-disable-next-line
export const TodoDispatchContext = createContext();

function App() {
  console.log("App loading..");
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3); //상태 관리

  //등록하기
  const onCreate = useCallback((content) => {
    //console.log(content);
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    dispatch({
      type: "CREATE",
      data: newTodo,
    });
  }, []);
  //수정하기
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId,
    });
  }, []);

  //삭제하기
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      data: targetId,
    });
  }, []);
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  });
  return (
    <div className="App">
      <Header />
      <TodoContext value={todos}>
        <TodoDispatchContext value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext>
      </TodoContext>
    </div>
  );
}

export default App;
