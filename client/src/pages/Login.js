import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    navigate(res.data.role === "vendor" ? "/vendor/dashboard" : "/dashboard");
  };

  return (
    <div style={{ padding: "2rem", background: "#fff", color: "#001f3f" }}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={submit} style={{ background: "#001f3f", color: "#fff" }}>Login</button>
    </div>
  );
}
