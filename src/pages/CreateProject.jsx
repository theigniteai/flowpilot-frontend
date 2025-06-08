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
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          placeholder="Project Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Textarea
          name="description"
          placeholder="Short Description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          required
        />
        <Input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <Input
          name="budget"
          type="number"
          placeholder="Budget (AED)"
          value={formData.budget}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full">
          Create Project
        </Button>
      </form>
    </div>
  );
}
