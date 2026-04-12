import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useState } from "react";

const VendorRegister = () => {
  const [form, setForm] = useState({
    name: "",
    printers: "",
    address: "",
    phone: "",
    email: "",
    photo: ""
  });

  const handleSubmit = () => {
    if (!form.name || !form.printers || !form.address || !form.phone || !form.email || !form.photo) {
      alert("All fields required");
      return;
    }

    const vendors = JSON.parse(localStorage.getItem("vendors") || "[]");
    vendors.push(form);
    localStorage.setItem("vendors", JSON.stringify(vendors));

    alert("Registered Successfully!");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>

        <Typography variant="h3">Vendor Registration</Typography>

        <TextField fullWidth label="Store Name" sx={{ mb: 2 }}
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <TextField fullWidth label="Printers" sx={{ mb: 2 }}
          onChange={(e)=>setForm({...form,printers:e.target.value})}
        />

        <TextField fullWidth label="Address" sx={{ mb: 2 }}
          onChange={(e)=>setForm({...form,address:e.target.value})}
        />

        <TextField fullWidth label="Phone" sx={{ mb: 2 }}
          onChange={(e)=>setForm({...form,phone:e.target.value})}
        />

        <TextField fullWidth label="Email" sx={{ mb: 2 }}
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <Button variant="contained" component="label" fullWidth sx={{ mb: 2 }}>
          Upload Store Photo
          <input hidden type="file" onChange={(e)=>setForm({...form,photo:URL.createObjectURL(e.target.files[0])})}/>
        </Button>

        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Submit
        </Button>

      </Box>
    </Container>
  );
};

export default VendorRegister;