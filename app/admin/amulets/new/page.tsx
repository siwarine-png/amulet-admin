"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function NewAmuletPage() {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [material, setMaterial] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase
      .from("amulets")
      .insert({
        code,
        name,
        material,
        description,
      });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Saved");

    setCode("");
    setName("");
    setMaterial("");
    setDescription("");
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Add Amulet
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Code"
          className="border p-2 w-full"
        />

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2 w-full"
        />

        <input
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          placeholder="Material"
          className="border p-2 w-full"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="border px-4 py-2"
        >
          Save
        </button>
      </form>
    </div>
  );
}
