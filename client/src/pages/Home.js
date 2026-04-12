import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  TextField,
  MenuItem
} from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState(null);

  const handleUpload = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setPrice(Math.floor(Math.random() * 2000) + 500);
  };

  return (
    <Container maxWidth="lg">

      {/* HERO */}
      <Box sx={{ textAlign: "center", mt: 8, mb: 6 }}>
        <Typography variant="h1">Browse everything.</Typography>

        <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
          All 3D Printing solutions under one platform
        </Typography>

        {/* UPLOAD SECTION */}
        <Box sx={{ maxWidth: 500, margin: "auto" }}>

          <Button variant="contained" component="label" fullWidth sx={{ mb: 2 }}>
            Upload Model Image
            <input hidden type="file" onChange={handleUpload} />
          </Button>

          <TextField fullWidth select label="Size (inches)" sx={{ mb: 2 }}>
            {[2,4,6,8,10].map(v => <MenuItem key={v}>{v}</MenuItem>)}
          </TextField>

          <TextField fullWidth select label="Color" sx={{ mb: 2 }}>
            {["Red","Blue","Black","White"].map(v => <MenuItem key={v}>{v}</MenuItem>)}
          </TextField>

          <TextField fullWidth select label="Material" sx={{ mb: 2 }}>
            {["PLA","PETG","ABS","Carbon Fiber","Other"].map(v => <MenuItem key={v}>{v}</MenuItem>)}
          </TextField>

          <TextField fullWidth select label="Delivery Time (Days)" sx={{ mb: 2 }}>
            {[2,4,6,8].map(v => <MenuItem key={v}>{v}</MenuItem>)}
          </TextField>

        </Box>
      </Box>

      {/* PREVIEW */}
      {file && (
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <img src={file} alt="preview" style={{ maxWidth: "300px" }} />

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