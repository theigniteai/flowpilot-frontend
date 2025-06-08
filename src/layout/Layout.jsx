
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <header className="bg-gray-800 text-white p-4 rounded-md mb-4">
        <h1 className="text-xl font-bold">FlowPilot Dashboard</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
