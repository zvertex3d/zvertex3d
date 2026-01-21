import { useState } from "react";
import api from "../services/api";

export default function Signup() {
  const [form, set] = useState({ role: "CUSTOMER" });

  const submit = () => {
    if (!form.email || !form.phone) return alert("Email & Phone required");
    if (form.role === "BUSINESS") {
      if (!form.companyName || !form.location || !form.numPrinters || !form.dailyCapacity) {
        return alert("All business details are required");
      }
    }
    api.post("/auth/signup", form).then(() => alert("Registered"));
  };

  return (
    <div style={container}>
      <h1>Register</h1>

      <div style={roleContainer}>
        <label>
          <input
            type="radio"
            name="role"
            value="CUSTOMER"
            checked={form.role === "CUSTOMER"}
            onChange={() => set({ role: "CUSTOMER" })}
          />
          Customer
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="BUSINESS"
            checked={form.role === "BUSINESS"}
            onChange={() => set({ role: "BUSINESS" })}
          />
          Business
        </label>
      </div>

      <input placeholder="Name" onChange={e => set({ ...form, name: e.target.value })} style={input} />
      <input placeholder="Email*" required onChange={e => set({ ...form, email: e.target.value })} style={input} />
      <input placeholder="Phone*" required onChange={e => set({ ...form, phone: e.target.value })} style={input} />
      <input type="password" placeholder="Password" onChange={e => set({ ...form, password: e.target.value })} style={input} />

      {form.role === "BUSINESS" && (
        <>
          <input placeholder="Company Name*" onChange={e => set({ ...form, companyName: e.target.value })} style={input} />
          <input placeholder="Location*" onChange={e => set({ ...form, location: e.target.value })} style={input} />
          <input type="number" placeholder="Number of 3D Printers*" onChange={e => set({ ...form, numPrinters: e.target.value })} style={input} />
          <input type="number" placeholder="Daily Printing Capacity*" onChange={e => set({ ...form, dailyCapacity: e.target.value })} style={input} />
          <input placeholder="Website (if available)" onChange={e => set({ ...form, website: e.target.value })} style={input} />
        </>
      )}

      <button onClick={submit} style={btn}>Signup</button>
    </div>
  );
}

const container = {
  maxWidth: "500px",
  margin: "3rem auto",
  padding: "2rem",
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  textAlign: "center"
};

const roleContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  marginBottom: "1rem"
};

const input = {
  padding: "0.8rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
  width: "100%"
};

const btn = {
  padding: "0.8rem",
  borderRadius: "5px",
  border: "none",
  background: "#00BFFF",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer"
};
