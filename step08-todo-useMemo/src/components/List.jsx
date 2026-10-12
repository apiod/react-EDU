import React, { useState, useMemo, use } from "react";
import TodoItem from "./TodoItem";
import "./List.css";
import { TodoContext } from "../App";
function List() {
  const todos = use(TodoContext);
  //console.log(todos);
  console.log("List ....");
  const [search, setSearch] = useState("");

  //검색어에 해당하는 todo정보 또는 모든 todo를 리턴하는 함수 작성
  const getFilterData = () => {
    if (search === "") return todos;
    else
      return todos.filter((todo) =>
        todo.content.toLowerCase().includes(search.toLowerCase()),
      );
  };

  const filterTodos = getFilterData();
  // const getAnalyedData = () => {
  //   console.log("getAnalyedData call....");

  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;

  //   return { totalCount: totalCount, doneCount: doneCount, notDoneCount };
  // };

  // const { totalCount, doneCount, notDoneCount } = getAnalyedData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyedData call....");

    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>totalCount : {totalCount}</div>
        <div>doneCount : {doneCount}</div>
        <div>notDoneCount : {notDoneCount}</div>
      </div>
      <input
        placeholder="검색어를 입력해주세요."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="todos_wrapper">
        {
          //todos.map((todo)=><TodoItem key={todo.id} {...todo} />)
          filterTodos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))
        }
      </div>
    </div>
  );
}

export default List;
