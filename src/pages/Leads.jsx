// src/pages/Leads.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare } from "lucide-react";

const dummyLeads = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 123-456-7890",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    phone: "+1 987-654-3210",
  },
  {
    id: 3,
    name: "Ayesha Khan",
    email: "ayesha@example.com",
    phone: "+971 55 123 4567",
  },
];

export default function Leads() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Leads</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummyLeads.map((lead) => (
          <Card key={lead.id} className="shadow border rounded-2xl">
            <CardContent className="p-4 space-y-3">
              <div className="font-semibold text-lg">{lead.name}</div>
              <div className="text-sm text-gray-500">{lead.email}</div>
              <div className="text-sm text-gray-500">{lead.phone}</div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline">
                  <Phone className="w-4 h-4 mr-1" /> Call
                </Button>
                <Button size="sm" variant="outline">
                  <MessageSquare className="w-4 h-4 mr-1" /> WhatsApp
                </Button>
                <Button size="sm" variant="outline">
                  <Mail className="w-4 h-4 mr-1" /> Email
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
