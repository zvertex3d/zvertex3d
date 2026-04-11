import React from "react";
import {
  Container, Typography, Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Zvertex3D Platform</Typography>

      <Button
        variant="contained"
        sx={{ mt: 3 }}
        onClick={() => navigate("/vendor-register")}
      >
        Register Vendor
      </Button>

      <Button
        variant="outlined"
        sx={{ mt: 3, ml: 2 }}
        onClick={() => navigate("/order")}
      >
        Place Order
      </Button>
    </Container>
  );
};

export default Home;