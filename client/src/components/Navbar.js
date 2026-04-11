import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>

        {/* LEFT LOGO */}
        <Typography
          variant="h6"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Zvertex3D
        </Typography>

        {/* RIGHT MENU */}
        <Box sx={{ marginLeft: "auto" }}>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>

          <Button color="inherit" onClick={() => navigate("/order")}>
            Order
          </Button>

          <Button color="inherit" onClick={() => navigate("/vendor-register")}>
            Register
          </Button>

          <Button
            color="inherit"
            onClick={() => window.scrollTo({ top: 400, behavior: "smooth" })}
          >
            About
          </Button>

          <Button
            color="inherit"
            onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
          >
            Contact
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;