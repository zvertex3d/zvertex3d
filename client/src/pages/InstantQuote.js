import { useState } from "react";
import api from "../services/api";

export default function InstantQuote() {
  const [file, setFile] = useState(null);
  const [material, setMaterial] = useState("PLA");
  const [color, setColor] = useState("White");
  const [size, setSize] = useState("Small");
  const [time, setTime] = useState("Normal");
  const [price, setPrice] = useState(null);
  const [error, setError] = useState("");

  const submit = async () => {
    if (!file) {
      setError("Please upload a file");
      return;
    }

    try {
      setError("");
      const form = new FormData();
      form.append("file", file);
      form.append("material", material);
      form.append("color", color);
      form.append("size", size);
      form.append("time", time);

      const res = await api.post("/quote", form);
      setPrice(res.data.price);
    } catch (err) {
      setError("Server unavailable. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Instant Quote</h2>

      <input type="file" onChange={e => setFile(e.target.files[0])} />

      <select style={styles.input} onChange={e => setMaterial(e.target.value)}>
        <option>PLA</option>
        <option>Resin</option>
      </select>

      <select style={styles.input} onChange={e => setColor(e.target.value)}>
        <option>White</option>
        <option>Navy Blue</option>
        <option>Black</option>
      </select>

      <select style={styles.input} onChange={e => setSize(e.target.value)}>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>

      <select style={styles.input} onChange={e => setTime(e.target.value)}>
        <option>Normal</option>
        <option>Fast</option>
        <option>Express</option>
      </select>

      <button style={styles.button} onClick={submit}>
        Get Quote
      </button>

      {price !== null && (
        <h3 style={styles.price}>Estimated Price: ₹{price}</h3>
      )}

      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "500px",
    margin: "auto",
    background: "#ffffff"
  },
  heading: { color: "#001f3f" },
  input: {
    width: "100%",
    margin: "0.5rem 0",
    padding: "0.6rem"
  },
  button: {
    background: "#001f3f",
    color: "#ffffff",
    padding: "0.7rem",
    border: "none",
    width: "100%",
    marginTop: "1rem",
    cursor: "pointer"
  },
  price: {
    color: "#001f3f",
    marginTop: "1rem"
  },
  error: {
    color: "red",
    marginTop: "1rem"
  }
};
