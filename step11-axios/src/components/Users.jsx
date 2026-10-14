import React, { useEffect, useReducer, useState } from "react";
import axiosInstance, { dataJson, adduser } from "../api/axiosInstance";

function Users() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const reducer = (prev, action) => {
    switch (action.type) {
      case "read":
        return action.data;
      case "add":
        return [...prev, action.data];
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
  const [users, dispatch] = useReducer(reducer, []);

  // addUsers
  const addUsers = async () => {
    const data = {
      name: name,
      email: email,
    };
    const re = await axiosInstance.post(`/users`, data);
    console.log(re);
    dispatch({
      type: "add",
      data: re,
    });
    setName("");
    setEmail("");
    readUsers();
  };
  // readUsers
  const readUsers = async () => {
    const re = await dataJson("users");
    dispatch({
      type: "read",
      data: re.data,
    });
  };
  useEffect(() => {
    readUsers();
  }, []);
  // updateUsers
  const updateUsers = async (targetID) => {
    const data = {
      name: name,
      email: email,
    };
    const re = await axiosInstance.put(`/users/${targetID}`, data);
    console.log(re);
    setName("");
    setEmail("");
    dispatch({
      type: "update",
      data: targetID,
    });
    readUsers();
  };
  // deleteUsers
  const deleteUsers = async (targetID) => {
    const re = await axiosInstance.delete(`/users/${targetID}`);
    console.log(re);
    dispatch({
      type: "delete",
      data: targetID,
    });
    readUsers();
  };
  const check = () => {
    readUsers();
    console.log(users);
  };

  return (
    <>
      <h1>Users</h1>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </div>
      <button onClick={addUsers}> 추가 </button>
      <button onClick={check}> 체크 </button>
      <ul>
        {users.map((v) => {
          return (
            <li key={v.id}>
              {v.id} / {v.name} / {v.email} /
              <button
                onClick={() => {
                  updateUsers(v.id);
                }}
              >
                {" "}
                수정{" "}
              </button>
              <button
                onClick={() => {
                  deleteUsers(v.id);
                }}
              >
                {" "}
                삭제{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Users;
