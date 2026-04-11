import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { searchAll } from "../services/api";

const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const res = await searchAll(search);
      const data = Array.isArray(res?.data) ? res.data : [];
      navigate("/search", { state: data });
    } catch {
      navigate("/search", { state: [] });
    }
  };

  return (
    <Container sx={{ mt: 4 }}>

      {/* HERO / SEARCH */}
      <Paper sx={{ p: 4, textAlign: "center", mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Zvertex 3D Printing Services
        </Typography>

        <TextField
          fullWidth
          label="Search products, vendors, services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mt: 2 }}
        />

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleSearch}
        >
          Search
        </Button>

        <Button
          variant="outlined"
          sx={{ mt: 2, ml: 2 }}
          onClick={() => navigate("/vendor-register")}
        >
          Register Vendor
        </Button>
      </Paper>

      {/* FOOTER SECTION (SMALL ABOUT + CONTACT) */}
      <Box
        id="about"
        sx={{
          mt: 10,
          pt: 3,
          borderTop: "1px solid #ddd",
          textAlign: "center"
        }}
      >
        <Typography variant="subtitle1">About</Typography>
        <Typography variant="body2" color="text.secondary">
          Zvertex provides high-quality 3D printing solutions including prototyping,
          batch production, and industrial parts.
        </Typography>
      </Box>

      <Box
        id="contact"
        sx={{
          mt: 3,
          textAlign: "center"
        }}
      >
        <Typography variant="subtitle1">Contact</Typography>
        <Typography variant="body2" color="text.secondary">
          Email: support@zvertex.com | Phone: +91-XXXXXXXXXX
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hyderabad, India
        </Typography>
      </Box>

      {/* ACTION BUTTONS */}
      <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => navigate("/order")}
        >
          Place Order
        </Button>

        <Button
          fullWidth
          variant="outlined"
          onClick={() => navigate("/vendor-register")}
        >
          Become a Vendor
        </Button>
      </Box>

    </Container>
  );
};

export default Home;