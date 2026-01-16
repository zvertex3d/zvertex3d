import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Navbar({ mode, toggleTheme }) {
  return (
    <nav
      style={{
        background: "#1a2a44",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Link
        to="/"
        style={{
          color: "#fff",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textDecoration: "none"
        }}
      >
        Zvertex3D
      </Link>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/instant-quote" style={{ color: "#fff", marginRight: "1rem" }}>
          Instant Quote
        </Link>
        <Link to="/login" style={{ color: "#fff", marginRight: "1rem" }}>
          Login
        </Link>
        <Link to="/signup" style={{ color: "#fff", marginRight: "1rem" }}>
          Signup
        </Link>

        <IconButton onClick={toggleTheme} style={{ color: "#fff" }}>
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </div>
    </nav>
  );
}
