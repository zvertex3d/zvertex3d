import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0D1B2A, #00BFFF)",
        color: "white",
        textAlign: "center",
        padding: "2rem"
      }}
    >
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Welcome to Zvertex3D
        </h1>

        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Professional 3D Printing and Prototyping Services
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button onClick={() => navigate("/services")} style={btn}>
            Explore Services
          </button>

          <button onClick={() => navigate("/upload")} style={btn}>
            Upload Design
          </button>
        </div>
      </div>
    </div>
  );
}

const btn = {
  padding: "1rem 2rem",
  border: "none",
  borderRadius: "8px",
  background: "white",
  color: "#0D1B2A",
  fontWeight: "700",
  cursor: "pointer"
};