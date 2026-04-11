import React, { useState } from "react";
import { TextField, Button, MenuItem, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import { placeOrder } from "../services/api";

const Order = () => {
  const [data, setData] = useState({});

  const materials = ["PLA","PETG","Carbon Fiber","ABS","Aluminium","Others"];

  const submit = async () => {
    const formData = new FormData();
    Object.keys(data).forEach(k => formData.append(k, data[k]));
    await placeOrder(formData);
    alert("Order placed");
  };

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <input type="file" onChange={(e)=>setData({...data,file:e.target.files[0]})} />

        <TextField fullWidth label="Color" onChange={(e)=>setData({...data,color:e.target.value})} />

        <TextField fullWidth label="Size (mm)" onChange={(e)=>setData({...data,size:e.target.value})} />

        <TextField
          select
          fullWidth
          label="Material"
          onChange={(e)=>setData({...data,material:e.target.value})}
        >
          {materials.map(m => <MenuItem key={m} value={m}>{m}</MenuItem>)}
        </TextField>

        <Button sx={{ mt: 2 }} variant="contained" onClick={submit}>
          Place Order
        </Button>
      </Container>
    </>
  );
};

export default Order;