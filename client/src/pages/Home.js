import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  MenuItem
} from "@mui/material";
import { useState, useEffect } from "react";
import ModelViewer from "../components/ModelViewer";

const Home = () => {
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState(0);

  const [form, setForm] = useState({
    size: "",
    material: "",
    delivery: ""
  });

  const handleUpload = (e) => {
    const fileObj = e.target.files[0];
    setFile(URL.createObjectURL(fileObj));
  };

  const calculatePrice = () => {
    let base = 200;

    base += Number(form.size) * 50;

    if (form.material === "ABS") base += 200;
    if (form.material === "Carbon Fiber") base += 500;

    base += Number(form.delivery) * 20;

    setPrice(base);
  };

  useEffect(() => {
    if (form.size && form.material && form.delivery) {
      calculatePrice();
    }
  }, [form]);

  return (
    <Container maxWidth="lg">

      <Box sx={{ textAlign: "center", mt: 8, mb: 6 }}>
        <Typography variant="h1">Browse everything.</Typography>

        <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
          All 3D Printing solutions under one platform
        </Typography>

        <Box sx={{ maxWidth: 500, margin: "auto" }}>

          <Button variant="contained" component="label" fullWidth sx={{ mb: 2 }}>
            Upload Model File
            <input hidden type="file" onChange={handleUpload} />
          </Button>

          <TextField
            fullWidth
            select
            label="Size (inches)"
            sx={{ mb: 2 }}
            onChange={(e) => setForm({ ...form, size: e.target.value })}
          >
            {[2,4,6,8].map(v => (
              <MenuItem key={v} value={v}>{v}</MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            select
            label="Material"
            sx={{ mb: 2 }}
            onChange={(e) => setForm({ ...form, material: e.target.value })}
          >
            {["PLA","PETG","ABS","Carbon Fiber"].map(v => (
              <MenuItem key={v} value={v}>{v}</MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            select
            label="Delivery Time"
            sx={{ mb: 2 }}
            onChange={(e) => setForm({ ...form, delivery: e.target.value })}
          >
            {[2,4,6].map(v => (
              <MenuItem key={v} value={v}>{v} Days</MenuItem>
            ))}
          </TextField>

        </Box>
      </Box>

      {file && (
        <Box sx={{ textAlign: "center", mb: 6 }}>

          <ModelViewer fileUrl={file} />

          <Typography variant="h5" sx={{ mt: 2 }}>
            Approx Price: ₹{price}
          </Typography>

          <Button variant="contained" href="/order" sx={{ mt: 2 }}>
            Proceed to Order
          </Button>

        </Box>
      )}

    </Container>
  );
};

export default Home;