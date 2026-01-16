import { useState } from "react";
import api from "../services/api";

export default function QuoteForm() {
  const [file, setFile] = useState(null);
  const [material, setMaterial] = useState("PLA");
  const [color, setColor] = useState("Red");
  const [size, setSize] = useState("Small");
  const [time, setTime] = useState("Normal");
  const [price, setPrice] = useState(null);

  const submit = async () => {
    if (!file) return alert("Please upload a file");
    const form = new FormData();
    form.append("file", file);
    form.append("material", material);
    form.append("color", color);
    form.append("size", size);
    form.append("time", time);

    try {
      const res = await api.post("/quote", form);
      setPrice(res.data.price);
    } catch (err) {
      alert("Error generating quote");
    }
  };

  return (
    <div style={{ maxWidth: "450px", margin: "auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <select value={material} onChange={e => setMaterial(e.target.value)}>
        <option>PLA</option>
        <option>Resin</option>
      </select>
      <select value={color} onChange={e => setColor(e.target.value)}>
        <option>Red</option>
        <option>Blue</option>
        <option>Green</option>
      </select>
      <select value={size} onChange={e => setSize(e.target.value)}>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
      <select value={time} onChange={e => setTime(e.target.value)}>
        <option>Normal</option>
        <option>Fast</option>
        <option>Express</option>
      </select>
      <button style={{ background: "#001f3f", color: "#fff", padding: "0.6rem", border: "none", borderRadius: "4px" }} onClick={submit}>
        Get Quote
      </button>

      {price && <h3>Estimated Price: ₹{price}</h3>}
    </div>
  );
}
