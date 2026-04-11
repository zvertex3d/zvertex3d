import { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { registerVendor } from "../services/api";

const VendorRegister = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    services: ""
  });

  const handleSubmit = async () => {
    await registerVendor(form);
    alert("Registered!");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <h2>Vendor Registration</h2>

      <TextField
        fullWidth
        label="Store Name"
        sx={{ mb: 2 }}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <TextField
        fullWidth
        label="Location"
        sx={{ mb: 2 }}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />

      <TextField
        fullWidth
        label="Services (PLA, ABS, Resin...)"
        sx={{ mb: 2 }}
        onChange={(e) => setForm({ ...form, services: e.target.value })}
      />

      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default VendorRegister;