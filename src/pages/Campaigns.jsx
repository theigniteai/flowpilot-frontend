// src/pages/Campaigns.jsx
import React from "react";

export default function Campaigns() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Campaigns</h1>
      <div className="border rounded-xl p-6 shadow-md bg-white">
        <p className="text-gray-700">
          Create and manage your automated messaging campaigns across WhatsApp and email.
        </p>
        <div className="mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            + New Campaign
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-medium mb-2">Active Campaigns</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-3 flex justify-between items-center">
              <span>Email Follow-up Blast</span>
              <span className="text-sm text-green-600">Running</span>
            </li>
            <li className="py-3 flex justify-between items-center">
              <span>WhatsApp Re-engagement</span>
              <span className="text-sm text-gray-500">Scheduled</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
