import { useState } from "react";
import api from "../services/api";

export default function InstantQuote() {
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState(null);

  const submit = async () => {
    const form = new FormData();
    form.append("file", file);
    const res = await api.post("/quote", form);
    setPrice(res.data.price);
  };

  return (
    <div>
      <h2>Instant Quote</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={submit}>Get Price</button>
      {price && <p>Price: ₹{price}</p>}
    </div>
  );
}
