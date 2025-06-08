import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const user = localStorage.getItem("flowpilot_user");
    if (!user) navigate("/login");
  }, [navigate]);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
