import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>USER전용 페이지</h1>
      <h4>{params?.id}님 접속</h4>
    </div>
  );
}

export default User;
