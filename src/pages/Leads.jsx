// src/pages/Leads.jsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [leadInput, setLeadInput] = useState("");

  const handleAddLead = () => {
    if (leadInput.trim()) {
      setLeads([...leads, { name: leadInput, status: "New" }]);
      setLeadInput("");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lead Manager</h2>
      <Card className="mb-6">
        <CardContent className="flex flex-col md:flex-row items-center gap-4 p-4">
          <Input
            placeholder="Enter lead name or email"
            value={leadInput}
            onChange={(e) => setLeadInput(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleAddLead}>Add Lead</Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name/Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead, index) => (
                <TableRow key={index}>
                  <TableCell>{lead.name}</TableCell>
                  <TableCell>{lead.status}</TableCell>
                  <TableCell className="space-x-2">
                    <Button variant="outline" size="sm">Call</Button>
                    <Button variant="outline" size="sm">WhatsApp</Button>
                    <Button variant="outline" size="sm">Email</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leads;
