import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      navigate(res.data.role === "vendor" ? "/vendor/dashboard" : "/dashboard");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div style={{ padding: "2rem", minHeight: "80vh", backgroundColor: "#fff", color: "#001f3f" }}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={submit} style={{
        backgroundColor: "#001f3f",
        color: "#fff",
        padding: "0.6rem 1.2rem",
        marginTop: "1rem",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}>Login</button>
    </div>
  );
}
