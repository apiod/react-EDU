import React from "react";
import { useSearchParams } from "react-router-dom";

// admin?name=hee&age=20
function Admin() {
  const [params] = useSearchParams();
  console.log(params);

  return (
    <div>
      <h3>Admin입니다.</h3>
      <h4>
        {params.get("name")} / {params.get("age")}
      </h4>
    </div>
  );
}

export default Admin;
