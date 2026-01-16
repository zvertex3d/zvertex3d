import api from "../services/api";

export default function Login() {
  const login = async () => {
    const res = await api.post("/auth/login", {
      email: "admin@test.com",
      password: "1234"
    });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);
    alert("Logged in");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}
