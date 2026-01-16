import api from "../services/api";

export default function Signup() {
  const signup = async () => {
    await api.post("/auth/signup", {
      email: "admin@test.com",
      password: "1234",
      role: "admin"
    });
    alert("Account created");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Signup</h2>
      <button onClick={signup}>Signup</button>
    </div>
  );
}
