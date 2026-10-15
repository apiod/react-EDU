import React from "react";
import "../css/TodoItem.css";
import { onDelete, onUpdate } from "../redux/store";
import { useDispatch } from "react-redux";
function ExamTodoItem({ id, isDone, content, date }) {
  const dispatch = useDispatch();
  const onChangeCheckbox = () => {
    dispatch(onUpdate(id));
  };
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleString()}</div>
      <button
        onClick={() => {
          dispatch(onDelete(id));
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default ExamTodoItem;
