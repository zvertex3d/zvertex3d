import React from "react";

export default function Login() {
  return (
    <div style={box}>
      <h1>Login</h1>
      <input placeholder="Email" style={input} />
      <input type="password" placeholder="Password" style={input} />
      <button style={btn}>Login</button>
    </div>
  );
}

const box = {
  maxWidth: "400px",
  margin: "4rem auto",
  padding: "2rem",
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
};

const input = {
  padding: "1rem",
  border: "1px solid #ccc",
  borderRadius: "8px"
};

const btn = {
  padding: "1rem",
  border: "none",
  borderRadius: "8px",
  background: "#00BFFF",
  color: "white",
  fontWeight: "700"
};