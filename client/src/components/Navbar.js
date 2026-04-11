import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Zvertex3D
        </Typography>

        <Box sx={{ marginLeft: "auto" }}>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/marketplace")}>Marketplace</Button>
          <Button color="inherit" onClick={() => navigate("/services")}>Services</Button>
          <Button color="inherit" onClick={() => navigate("/vendor-register")}>Register</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;