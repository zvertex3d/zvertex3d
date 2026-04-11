import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { searchAll } from "../services/api";
import Navbar from "../components/Navbar";

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
    <>
      <Navbar />

      <Container sx={{ mt: 4 }}>

        {/* HERO / SEARCH */}
        <Paper sx={{ p: 4, textAlign: "center", mb: 4 }}>
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

        {/* ABOUT */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5">About Us</Typography>
          <Typography>
            Zvertex provides high-quality 3D printing solutions including
            prototyping, batch production, and industrial parts using advanced materials.
          </Typography>
        </Box>

        {/* CONTACT */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5">Contact</Typography>
          <Typography>Email: support@zvertex.com</Typography>
          <Typography>Phone: +91-XXXXXXXXXX</Typography>
          <Typography>Location: Hyderabad, India</Typography>
        </Box>

        {/* QUICK ACTIONS */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate("/order")}
            >
              Place Order
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate("/vendor-register")}
            >
              Become a Vendor
            </Button>
          </Grid>
        </Grid>

      </Container>
    </>
  );
};

export default Home;