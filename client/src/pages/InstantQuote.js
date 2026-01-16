import { useState } from "react";
import api from "../services/api";

export default function InstantQuote() {
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

    const res = await api.post("/quote", form);
    setPrice(res.data.price);
  };

  return (
    <div style={{ padding: "2rem", minHeight: "80vh", backgroundColor: "#fff", color: "#001f3f" }}>
      <h2>3D Instant Quote</h2>
      <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.8rem", maxWidth: "400px" }}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <select onChange={e => setMaterial(e.target.value)} value={material}>
          <option>PLA</option>
          <option>Resin</option>
        </select>
        <select onChange={e => setColor(e.target.value)} value={color}>
          <option>Red</option>
          <option>Blue</option>
          <option>Green</option>
        </select>
        <select onChange={e => setSize(e.target.value)} value={size}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <select onChange={e => setTime(e.target.value)} value={time}>
          <option>Normal</option>
          <option>Fast</option>
          <option>Express</option>
        </select>
        <button onClick={submit} style={{
          padding: "0.6rem 1.2rem",
          backgroundColor: "#001f3f",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold"
        }}>Get Quote</button>
      </div>
      {price && <h3 style={{ marginTop: "1rem" }}>Estimated Price: ₹{price}</h3>}
    </div>
  );
}
