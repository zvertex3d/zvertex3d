import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

export default function Order() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    material: "PLA",
    color: "Red",
    size: "Small",
    time: "Normal"
  });

  const submit = async () => {
    if (!localStorage.getItem("token")) {
      alert("Login required");
      return navigate("/login");
    }

    const data = new FormData();
    data.append("file", state.file);
    Object.entries(form).forEach(([k, v]) => data.append(k, v));

    await api.post("/order", data);
    alert("Order placed successfully");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Order Details</h2>
      {["material","color","size","time"].map(f => (
        <select key={f} onChange={e => setForm({...form, [f]: e.target.value})}>
          <option>PLA</option><option>Resin</option>
        </select>
      ))}
      <br /><br />
      <button onClick={submit}>Place Order</button>
    </div>
  );
}
