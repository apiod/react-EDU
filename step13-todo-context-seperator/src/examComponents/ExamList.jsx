import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import ExamTodoItem from "./ExamTodoItem";

function ExamList() {
  const todos = useSelector((state) => state.todos);

  const [search, setSearch] = useState("");

  const getFilterData = () => {
    if (search === "") return todos;

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()),
    );
  };

  const filterTodos = getFilterData(); // List 컴포넌트가 리랜더링 될때마다 호출된다(search state변경될때..)
  // console.log(filterTodos);
  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      {/* <div>
        <div>totalCount : {totalCount}</div>
        <div>doneCount : {doneCount}</div>
        <div>notDoneCount : {notDoneCount}</div>
      </div> */}

      <input
        placeholder="검색어를 입력해주세요."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="todos_wrapper">
        {
          // todos.map((todo)=>{
          filterTodos.map((todo) => {
            return <ExamTodoItem key={todo.id} {...todo} />;
          })
        }
      </div>
    </div>
  );
}

export default ExamList;
