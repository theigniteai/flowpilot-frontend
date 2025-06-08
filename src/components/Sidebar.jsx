import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, PlusSquare, LogOut, Users, Settings } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("flowpilot_user");
    navigate("/login");
  };

  const navItems = [
    { name: "Dashboard", icon: <Home size={18} />, path: "/" },
    { name: "Create Project", icon: <PlusSquare size={18} />, path: "/create-project" },
    { name: "Leads", icon: <Users size={18} />, path: "/leads" },
    { name: "Settings", icon: <Settings size={18} />, path: "/settings" },
  ];

  return (
    <aside className="w-64 h-full bg-white shadow-xl border-r p-5 hidden md:block">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">FlowPilot</h2>
      <nav className="space-y-3">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
      <button
        onClick={handleLogout}
        className="mt-10 flex items-center gap-2 text-sm text-red-500 hover:underline"
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
