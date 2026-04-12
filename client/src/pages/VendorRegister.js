import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useState } from "react";

const VendorRegister = () => {
  const [form, setForm] = useState({
    name: "",
    printers: "",
    address: ""
  });

  const handleSubmit = () => {
    const vendors = JSON.parse(localStorage.getItem("vendors") || "[]");
    vendors.push(form);
    localStorage.setItem("vendors", JSON.stringify(vendors));
    alert("Registered Successfully!");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>

        <Typography variant="h3" gutterBottom>
          Vendor Registration
        </Typography>

        <TextField
          fullWidth
          label="Store Name"
          sx={{ mb: 2 }}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <TextField
          fullWidth
          label="Printers"
          sx={{ mb: 2 }}
          onChange={(e) => setForm({ ...form, printers: e.target.value })}
        />

        <TextField
          fullWidth
          label="Address"
          sx={{ mb: 3 }}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Submit
        </Button>

      </Box>
    </Container>
  );
};

export default VendorRegister;