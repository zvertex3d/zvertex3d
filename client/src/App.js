import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function Services() {
  return <div style={pageStyle}>Services Page</div>;
}

function Upload() {
  return <div style={pageStyle}>Upload Design Page</div>;
}

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

const pageStyle = {
  padding: "4rem",
  fontSize: "2rem",
  textAlign: "center"
};