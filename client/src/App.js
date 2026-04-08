import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

function Services() {
  return (
    <div style={{ padding: "4rem", textAlign: "center" }}>
      <h1>Our 3D Printing Services</h1>
      <p>Industrial • Medical • Educational • Prototype Printing</p>
    </div>
  );
}

function Navbar() {
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
          fontWeight: "bold",
          fontSize: "2rem"
        }}
      >
        Zvertex3D
      </Link>

      <div style={{ display: "flex", gap: "1.5rem" }}>
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

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}