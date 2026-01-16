import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const navigate = useNavigate();

  const submit = async () => {
    await api.post("/auth/signup", { name, email, password, role });
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem", background: "#fff", color: "#001f3f" }}>
      <h2>Signup</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <select onChange={e => setRole(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="vendor">Vendor</option>
      </select>
      <button onClick={submit} style={{ background: "#001f3f", color: "#fff" }}>Signup</button>
    </div>
  );
}
