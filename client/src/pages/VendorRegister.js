import React, { useState } from "react";

export default function VendorRegister() {
  const [form, setForm] = useState({
    storeName: "",
    locality: "",
    phone: "",
    email: "",
    printers: "",
    photo: ""
  });
  const [message, setMessage] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const submitVendor = () => {
    const vendors = JSON.parse(localStorage.getItem("vendors") || "[]");
    const zCode = `ZV-${form.locality.slice(0, 3).toUpperCase()}-${vendors.length + 1}`;

    const newVendor = {
      id: Date.now(),
      ...form,
      zCode,
      printers: form.printers.split(",").map((p) => p.trim())
    };

    localStorage.setItem("vendors", JSON.stringify([...vendors, newVendor]));
    setMessage(`Vendor registered successfully. Zvertex code: ${zCode}`);
  };

  return (
    <div style={container}>
      <div style={card}>
        <h1>Vendor Registration</h1>
        <input placeholder="Store Name" style={input} onChange={(e) => setForm({ ...form, storeName: e.target.value })} />
        <input placeholder="Locality" style={input} onChange={(e) => setForm({ ...form, locality: e.target.value })} />
        <input placeholder="Phone" style={input} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input placeholder="Email" style={input} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Printers list (comma separated)" style={input} onChange={(e) => setForm({ ...form, printers: e.target.value })} />
        <input type="file" accept="image/*" onChange={handleImage} style={input} />
        <button style={btn} onClick={submitVendor}>Register Vendor</button>
        {message && <p style={{ marginTop: "1rem", color: "green" }}>{message}</p>}
      </div>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f5f8fc",
  padding: "2rem"
};
const card = {
  width: "100%",
  maxWidth: "600px",
  background: "white",
  padding: "2rem",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
};
const input = {
  padding: "1rem",
  borderRadius: "10px",
  border: "1px solid #ccc"
};
const btn = {
  padding: "1rem",
  border: "none",
  borderRadius: "10px",
};