import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#0D1B2A",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Link
        to="/"
        style={{
          color: "#00BFFF",
          textDecoration: "none",
          fontSize: "1.5rem",
          fontWeight: "bold"
        }}
      >
        Zvertex3D
      </Link>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/upload" style={linkStyle}>Upload</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "600"
};