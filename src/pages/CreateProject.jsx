import React, { useState } from "react";

export default function CreateProject() {
  const [projectName, setProjectName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Project "${projectName}" created!`);
    setProjectName("");
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow rounded-xl p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Create New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Project Name</label>
          <input
            type="text"
            required
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Real Estate Leads - June"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create
        </button>
      </form>
    </div>
  );
}
