import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function CreateProject() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Project:", formData);
    alert("Project Created Successfully!");
    // TODO: Integrate with backend API
    setFormData({
      name: "",
      description: "",
      location: "",
      budget: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-xl border">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Create New Project</h1>
      <form onSubmit={handleSubmit} className="s
