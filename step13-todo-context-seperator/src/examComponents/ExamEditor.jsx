import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { onCreate } from "../redux/store";
function ExamEditor() {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const idRef = useRef(3);
  //엔터 입력시 제출
  const onKeyDown = (e) => {
    if (e.keyCode === 13) onSubmit();
  };

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (content === "") {
      console.log("content Empty");
      contentRef.current.focus();
      return;
    }
    let data = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    //부모(App.jsx)쪽에 있는 onCreate함수를 호출한다.
    dispatch(onCreate(data));
    // onCreate(content);
    setContent("");
    contentRef.current.focus();
  };
  return (
    <div className="Editor">
      <input
        type="text"
        placeholder="새로운 todo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        ref={contentRef}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}

export default ExamEditor;
