import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useState } from "react";

const Order = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const validate = () => {
    const emailValid = /\S+@\S+\.\S+/.test(email);
    const phoneValid = /^[0-9]{10}$/.test(phone);
    return emailValid && phoneValid;
  };

  const handleSubmit = () => {
    if (!validate()) {
      alert("Enter valid email and phone");
      return;
    }

    alert("Order placed! Confirmation sent to email.");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>

        <Typography variant="h3">Place Order</Typography>

        <TextField fullWidth label="Email" sx={{ mb: 2 }}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <TextField fullWidth label="Phone" sx={{ mb: 3 }}
          onChange={(e)=>setPhone(e.target.value)}
        />

        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Confirm Order
        </Button>

      </Box>
    </Container>
  );
};

export default Order;