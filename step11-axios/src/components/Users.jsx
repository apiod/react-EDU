import React, { useEffect, useReducer } from "react";
import axiosInstance from "../api/axiosInstance";

function Users() {
  const reducer = (prev, action) => {
    switch (action.type) {
      case "add":
        return [...prev, action.data];
      case "read":
      case "update":
        return prev;
      case "delete":
        return prev.filter((user) => {
          user.targetID !== action.targetID;
        });
      default:
        return prev;
    }
  };
  const [users, dispatch] = useReducer(reducer, {});
  useEffect(() => {
    readUsers;
  }, []);
  // addUsers
  const addUsers = ({ id, name, username, email }) => {
    const data = {
      id,
      name,
      username,
      email,
    };
    dispatch({
      type: "add",
      data,
    });
  };
  // readUsers
  const readUsers = () => {
    dispatch({
      type: "read",
    });
  };
  // updateUsers
  const updateUsers = (targetID) => {
    dispatch({
      type: "update",
      data: targetID,
    });
  };
  // deleteUsers
  const deleteUsers = (targetID) => {
    dispatch({
      type: "delete",
      data: targetID,
    });
  };

  return (
    <>
      <div>Users</div>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="userName" />
      <input type="email" placeholder="email" />
      <button onClick={addUsers}> 추가 </button>
      <button onClick={updateUsers}> 수정 </button>
      <button onClick={deleteUsers}> 삭제 </button>
    </>
  );
}

export default Users;
