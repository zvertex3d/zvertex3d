import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box
} from "@mui/material";
import { registerVendor } from "../services/api";

const VendorRegister = () => {
  const [form, setForm] = useState({
    name: "",
    printers: "",
    address: "",
    phone: "",
    email: ""
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);

    // store preview URL (you can later replace with S3 upload)
    setForm({ ...form, photo: url });
  };

  const submit = async () => {
    try {
      await registerVendor(form);
      alert("Request submitted. Wait for approval.");
    } catch (err) {
      alert("Registration failed. Backend issue.");
    }
  };

  return (
    <Container maxWidth="sm">

      <Typography variant="h4" sx={{ mt: 5, mb: 3 }}>
        Vendor Registration
      </Typography>

      <TextField
        label="Name"
        fullWidth
        sx={{ mb: 2 }}
        onChange={(e) => handleChange("name", e.target.value)}
      />

      <TextField
        label="Printers"
        fullWidth
        sx={{ mb: 2 }}
        onChange={(e) => handleChange("printers", e.target.value)}
      />

      <TextField
        label="Address"
        fullWidth
        sx={{ mb: 2 }}
        onChange={(e) => handleChange("address", e.target.value)}
      />

      <TextField
        label="Phone"
        fullWidth
        sx={{ mb: 2 }}
        onChange={(e) => handleChange("phone", e.target.value)}
      />

      <TextField
        label="Email"
        fullWidth
        sx={{ mb: 2 }}
        onChange={(e) => handleChange("email", e.target.value)}
      />

      {/* IMAGE UPLOAD */}
      <Button variant="outlined" component="label">
        Upload Store Image
        <input hidden type="file" onChange={handleImage} />
      </Button>

      {/* PREVIEW */}
      {preview && (
        <Box sx={{ mt: 2 }}>
          <Typography>Preview:</Typography>
          <img
            src={preview}
            style={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              borderRadius: 10
            }}
          />
        </Box>
      )}

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3 }}
        onClick={submit}
      >
        Submit
      </Button>

    </Container>
  );
};

export default VendorRegister;