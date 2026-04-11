import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VendorRegister from "./pages/VendorRegister";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
      </Routes>
    </BrowserRouter>
  );
}