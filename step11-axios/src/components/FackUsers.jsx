import axios from "axios";
import React, { useState } from "react";

function FackUsers() {
  const [users, setUsers] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/users`;
  const selectAllByUsers = async () => {
    const re = await fetch(url, {
      // method: "get",
      // body: JSON.stringify({ id: "11" }),
    });
    const reJson = await re.json();
    setUsers(reJson);
    console.log(reJson);
  };
  //axios사용
  const selectAllByUsers2 = async () => {
    const re = await axios.get(url);
    console.log(re.data);
  };
  return (
    <>
      <h1>fetch() 함수 - http요청</h1>
      <button onClick={selectAllByUsers}> 데이터 가져오기</button>
      <button onClick={selectAllByUsers2}> 데이터 가져오기2</button>
      {users?.map((user) => (
        <h5 key={user.id}>
          {user.id} / {user.name} / {user.address.street}
        </h5>
      ))}
    </>
  );
}

export default FackUsers;
