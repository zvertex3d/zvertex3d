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
    if (!file) {
      alert("Please upload a file");
      return;
    }

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
      alert("Failed to generate quote");
    }
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        padding: "2rem",
        backgroundColor: "#ffffff",
        color: "#001f3f",
        maxWidth: "500px",
        margin: "0 auto"
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Instant Quote</h2>

      <input type="file" onChange={e => setFile(e.target.files[0])} />

      <select value={material} onChange={e => setMaterial(e.target.value)}>
        <option value="PLA">PLA</option>
        <option value="Resin">Resin</option>
      </select>

      <select value={color} onChange={e => setColor(e.target.value)}>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>

      <select value={size} onChange={e => setSize(e.target.value)}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <select value={time} onChange={e => setTime(e.target.value)}>
        <option value="Normal">Normal</option>
        <option value="Fast">Fast</option>
        <option value="Express">Express</option>
      </select>

      <button
        onClick={submit}
        style={{
          marginTop: "1rem",
          backgroundColor: "#001f3f",
          color: "#fff",
          padding: "0.6rem",
          border: "none",
          borderRadius: "4px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Get Quote
      </button>

      {price && (
        <h3 style={{ marginTop: "1rem" }}>
          Estimated Price: ₹{price}
        </h3>
      )}
    </div>
  );
}
