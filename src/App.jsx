import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";
import Layout from "./layout/Layout";
import Sidebar from "./components/Sidebar";
import Campaigns from "./pages/Campaigns";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="create-project" element={<CreateProject />} />
          {/* Future pages like /leads or /settings can go here */}
        </Route>
      </Routes>
    </Router>
  );
}
