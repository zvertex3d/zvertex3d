import { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (err) {
      alert("Login failed. Check server or credentials.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <input style={styles.input} placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input style={styles.input} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button style={styles.button} onClick={submit}>Login</button>
    </div>
  );
}

const styles = {
  container: { padding: "2rem", maxWidth: "400px", margin: "auto" },
  heading: { color: "#001f3f" },
  input: { width: "100%", padding: "0.6rem", marginBottom: "1rem" },
  button: {
    width: "100%",
    background: "#001f3f",
    color: "#fff",
    padding: "0.7rem",
    border: "none"
  }
};
