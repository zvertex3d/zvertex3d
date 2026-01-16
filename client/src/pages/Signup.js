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
    try {
      await api.post("/auth/signup", { name, email, password, role });
      alert(`${role} registered successfully!`);
      navigate("/login");
    } catch (err) {
      alert(err.response.data.error || "Error registering");
    }
  };

  return (
    <div style={{ padding: "2rem", minHeight: "80vh", backgroundColor: "#fff", color: "#001f3f" }}>
      <h2>Signup</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="vendor">Vendor</option>
      </select>
      <button onClick={submit} style={{
        backgroundColor: "#001f3f",
        color: "#fff",
        padding: "0.6rem 1.2rem",
        marginTop: "1rem",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}>Signup</button>
    </div>
  );
}
