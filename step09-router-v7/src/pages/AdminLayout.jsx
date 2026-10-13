import React from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div style={{ backgroundColor: "skyblue" }}>
      <h3>관리자의 전용 영역</h3>
      <Outlet />
    </div>
  );
}

export default AdminLayout;
