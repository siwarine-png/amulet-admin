"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function NewAmuletPage() {
const [canonicalName, setCanonicalName] = useState("");
const [category, setCategory] = useState("");
const [monk, setMonk] = useState("");

const [model, setModel] = useState("");
const [mold, setMold] = useState("");
const [material, setMaterial] = useState("");

const [templeHome, setTempleHome] = useState("");
const [templeIssuer, setTempleIssuer] = useState("");

const [yearBE, setYearBE] = useState("");
const [mintage, setMintage] = useState("");

const [history, setHistory] = useState("");

const [frontFile, setFrontFile] = useState<File | null>(null);
const [backFile, setBackFile] = useState<File | null>(null);

async function handleSubmit(e: React.FormEvent) {
e.preventDefault();


const { data: amulet, error } = await supabase
  .from("amulets")
  .insert({
    canonical_name: canonicalName,
    category,
    monk,
    model,
    mold,
    material,
    temple_home: templeHome,
    temple_issuer: templeIssuer,
    year_be: yearBE ? Number(yearBE) : null,
    mintage: mintage ? Number(mintage) : null,
    history,
  })
  .select()
  .single();

if (error) {
  alert(error.message);
  return;
}

console.log("Created amulet:", amulet);

alert("Saved");

setCanonicalName("");
setCategory("");
setMonk("");

setModel("");
setMold("");
setMaterial("");

setTempleHome("");
setTempleIssuer("");

setYearBE("");
setMintage("");

setHistory("");

setFrontFile(null);
setBackFile(null);


}

return ( <div className="max-w-3xl mx-auto p-6"> <h1 className="text-2xl font-bold mb-6">
  AMULET MVP V2 TEST 20260623
</h1>


  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      value={canonicalName}
      onChange={(e) => setCanonicalName(e.target.value)}
      placeholder="Canonical Name"
      className="border p-2 w-full"
      required
    />

    <input
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      placeholder="Category"
      className="border p-2 w-full"
      required
    />

    <input
      value={monk}
      onChange={(e) => setMonk(e.target.value)}
      placeholder="Monk"
      className="border p-2 w-full"
      required
    />

    <input
      value={model}
      onChange={(e) => setModel(e.target.value)}
      placeholder="Model"
      className="border p-2 w-full"
    />

    <input
      value={mold}
      onChange={(e) => setMold(e.target.value)}
      placeholder="Mold"
      className="border p-2 w-full"
    />

    <input
      value={material}
      onChange={(e) => setMaterial(e.target.value)}
      placeholder="Material"
      className="border p-2 w-full"
    />

    <input
      value={templeHome}
      onChange={(e) => setTempleHome(e.target.value)}
      placeholder="Temple Home"
      className="border p-2 w-full"
    />

    <input
      value={templeIssuer}
      onChange={(e) => setTempleIssuer(e.target.value)}
      placeholder="Temple Issuer"
      className="border p-2 w-full"
    />

    <input
      value={yearBE}
      onChange={(e) => setYearBE(e.target.value)}
      placeholder="Year BE"
      className="border p-2 w-full"
    />

    <input
      value={mintage}
      onChange={(e) => setMintage(e.target.value)}
      placeholder="Mintage"
      className="border p-2 w-full"
    />

    <textarea
      value={history}
      onChange={(e) => setHistory(e.target.value)}
      placeholder="History"
      className="border p-2 w-full min-h-32"
    />

    <div>
      <label className="block mb-1">
        Front Image
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setFrontFile(
            e.target.files?.[0] || null
          )
        }
      />
    </div>

    <div>
      <label className="block mb-1">
        Back Image
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setBackFile(
            e.target.files?.[0] || null
          )
        }
      />
    </div>

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
