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
    if (!file) return alert("Upload file");

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
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto", color: "#001f3f" }}>
      <h2>Instant Quote</h2>

      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <select onChange={e => setMaterial(e.target.value)}><option>PLA</option><option>Resin</option></select>
      <select onChange={e => setColor(e.target.value)}><option>Red</option><option>Blue</option><option>Green</option></select>
      <select onChange={e => setSize(e.target.value)}><option>Small</option><option>Medium</option><option>Large</option></select>
      <select onChange={e => setTime(e.target.value)}><option>Normal</option><option>Fast</option><option>Express</option></select>

      <button onClick={submit} style={{ background: "#001f3f", color: "#fff", padding: "0.6rem", marginTop: "1rem" }}>
        Get Quote
      </button>

      {price && <h3>Estimated Price: ₹{price}</h3>}
    </div>
  );
}
