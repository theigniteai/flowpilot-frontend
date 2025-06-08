import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Settings() {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const savedUser = localStorage.getItem("flowpilot_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("flowpilot_user", JSON.stringify(user));
    alert("Profile updated successfully.");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">User Settings</h1>

      <Card>
        <CardContent className="space-y-4 p-4">
          <Input
            name="name"
            placeholder="Your Name"
            value={user.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="Your Email"
            value={user.email}
            onChange={handleChange}
          />
          <Button onClick={handleSave} className="w-full">
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
