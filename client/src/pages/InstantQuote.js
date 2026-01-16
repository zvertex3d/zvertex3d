import { useState } from "react";
import api from "../services/api";

export default function InstantQuote() {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      setError("");
      const formData = new FormData();
      const res = await api.post("/quote", formData);
      setPrice(res.data.price);
    } catch {
      setError("Server unavailable. Try again later.");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Instant Quote</h2>
      <button onClick={handleSubmit}>Get Quote</button>

      {price !== null && <h3>₹{price}</h3>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
