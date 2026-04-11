import { useState } from "react";
import {
  Container, Button, TextField, MenuItem
} from "@mui/material";
import { placeOrder } from "../services/api";

const Order = () => {
  const [file, setFile] = useState(null);
  const [material, setMaterial] = useState("");

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("material", material);

    await placeOrder(formData);
    alert("Order placed!");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <h2>Place Order</h2>

      <Button
        variant="outlined"
        component="label"
        sx={{ mb: 2 }}
      >
        Upload File
        <input type="file" hidden onChange={(e) => setFile(e.target.files[0])} />
      </Button>

      <TextField
        select
        fullWidth
        label="Material"
        sx={{ mb: 2 }}
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
      >
        <MenuItem value="PLA">PLA</MenuItem>
        <MenuItem value="ABS">ABS</MenuItem>
        <MenuItem value="Resin">Resin</MenuItem>
      </TextField>

      <Button variant="contained" onClick={handleSubmit}>
        Place Order
      </Button>
    </Container>
  );
};

export default Order;