import { useState } from "react";
import api from "../services/api";

export default function InstantQuote() {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState("");

  const submit = async () => {
    try {
      setError("");
      const res = await api.post("/quote", new FormData());
      setPrice(res.data.price);
    } catch {
      setError("Unable to connect to server.");
    }
  };

  return (
    <div style={{ padding: "2rem", color: "#001f3f" }}>
      <h2>Instant Quote</h2>
      <button onClick={submit}>Get Quote</button>
      {price !== null && <h3>₹{price}</h3>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
