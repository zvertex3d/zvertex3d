import { useState } from "react";
import api from "../services/api";

export default function InstantQuote() {
  const [file, setFile] = useState(null);
  const [material, setMaterial] = useState("PLA");
  const [size, setSize] = useState("Small");
  const [speed, setSpeed] = useState("Normal");
  const [price, setPrice] = useState(null);

  const submit = async () => {
    if (!file) return alert("Upload STL/OBJ file");

    const form = new FormData();
    form.append("file", file);
    form.append("material", material);
    form.append("size", size);
    form.append("time", speed);

    const res = await api.post("/quote", form);
    setPrice(res.data.price);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>3D Instant Quote</h2>

      <input type="file" accept=".stl,.obj" onChange={e => setFile(e.target.files[0])} />

      <select onChange={e => setMaterial(e.target.value)}>
        <option>PLA</option>
        <option>Resin</option>
        <option>ABS</option>
      </select>

      <select onChange={e => setSize(e.target.value)}>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>

      <select onChange={e => setSpeed(e.target.value)}>
        <option>Normal</option>
        <option>Fast</option>
        <option>Express</option>
      </select>

      <button onClick={submit}>Calculate Price</button>

      {price && <h3>₹ {price}</h3>}
    </div>
  );
}
