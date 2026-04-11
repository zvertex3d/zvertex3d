import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Zvertex3D
        </Typography>

        <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
        <Button color="inherit" onClick={() => navigate("/order")}>Order</Button>
        <Button color="inherit" onClick={() => navigate("/vendor-register")}>Vendor</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;