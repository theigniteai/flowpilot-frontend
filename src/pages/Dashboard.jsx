import React from "react";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("flowpilot_user"));

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome, {user?.name || "Agent"} 👋
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="text-sm text-gray-500">Total Projects</h2>
          <p className="text-2xl font-bold text-blue-600">4</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="text-sm text-gray-500">Active Leads</h2>
          <p className="text-2xl font-bold text-green-600">93</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="text-sm text-gray-500">WhatsApp Replies</h2>
          <p className="text-2xl font-bold text-purple-600">31</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow border">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <ul className="text-sm space-y-3">
          <li>📞 Called lead “Adeel Ahmed” — 2 mins ago</li>
          <li>📨 Sent WhatsApp to “Fatima Khan” — 15 mins ago</li>
          <li>📝 Created project “Palm Jumeirah Offers” — 1 hour ago</li>
        </ul>
      </div>
    </div>
  );
}
