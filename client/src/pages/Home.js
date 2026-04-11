import React, { useState } from "react";
import {
  Container, TextField, Button, Typography, Box, Paper
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
      <Paper sx={{ p: 4, textAlign: "center", mb: 6 }}>
        <Typography variant="h4">Zvertex Marketplace</Typography>

        <TextField
          fullWidth
          label="Search vendors, services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mt: 2 }}
        />

        <Button variant="contained" sx={{ mt: 2 }} onClick={handleSearch}>
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

      <Box id="about" sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="subtitle1">About</Typography>
        <Typography variant="body2">
          Marketplace for 3D printing vendors and services.
        </Typography>
      </Box>

      <Box id="contact" sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="subtitle1">Contact</Typography>
        <Typography variant="body2">
          support@zvertex.com
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;