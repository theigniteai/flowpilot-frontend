import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [fileName, setFileName] = useState("");

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const csvText = event.target.result;
      const lines = csvText.split("\n").filter(Boolean);
      const parsedLeads = lines.map((line) => {
        const [name, phone, email] = line.split(",");
        return { name, phone, email };
      });
      setLeads(parsedLeads);
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Leads Management</h1>

      <Card className="mb-6">
        <CardContent className="p-4 space-y-4">
          <Input type="file" accept=".csv" onChange={handleCSVUpload} />
          {fileName && (
            <p className="text-sm text-gray-600">Uploaded: {fileName}</p>
          )}
        </CardContent>
      </Card>

      {leads.length > 0 && (
        <div className="bg-white shadow rounded-xl border overflow-x-auto">
          <table className="min-w-full text-sm table-auto">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-4 py-2 text-left font-semibold">Name</th>
                <th className="px-4 py-2 text-left font-semibold">Phone</th>
                <th className="px-4 py-2 text-left font-semibold">Email</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{lead.name}</td>
                  <td className="px-4 py-2">{lead.phone}</td>
                  <td className="px-4 py-2">{lead.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {leads.length === 0 && (
        <p className="text-gray-500 text-sm">No leads uploaded yet.</p>
      )}
    </div>
  );
}
