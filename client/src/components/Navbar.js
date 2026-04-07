import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={nav}>
      <Link to="/" style={logo}>
        Zvertex3D
      </Link>

      <div style={navLinks}>
        <Link to="/" style={link}>
          Home
        </Link>
        <Link to="/services" style={link}>
          Services
        </Link>
        <Link to="/about" style={link}>
          About
        </Link>
        <Link to="/contact" style={link}>
          Contact
        </Link>
        <Link to="/upload" style={uploadBtn}>
          Upload Design
        </Link>
        <Link to="/login" style={loginBtn}>
          Login
        </Link>
      </div>
    </nav>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 3rem",
  background: "#0D1B2A",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  boxShadow: "0 2px 10px rgba(0,0,0,0.15)"
};

const logo = {
  color: "#00BFFF",
  textDecoration: "none",
  fontSize: "1.8rem",
  fontWeight: "700"
};

const navLinks = {
  display: "flex",
  gap: "1.5rem",
  alignItems: "center",
  flexWrap: "wrap"
};

const link = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1rem"
};

const uploadBtn = {
  textDecoration: "none",
  background: "#00BFFF",
  color: "#0D1B2A",
  padding: "0.7rem 1.2rem",
  borderRadius: "8px",
  fontWeight: "700"
};

const loginBtn = {
  textDecoration: "none",
  background: "#ffffff",
  color: "#0D1B2A",
  padding: "0.7rem 1.2rem",
  borderRadius: "8px",
  fontWeight: "700"
};