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
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => navigate("/search")}>Marketplace</Button>
          <Button onClick={() => navigate("/order")}>Order</Button>
          <Button onClick={() => navigate("/vendor-register")}>Register</Button>
          <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>

          <Button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </Button>

          <Button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;