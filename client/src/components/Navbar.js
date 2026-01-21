import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={nav}>
      <Link to="/" style={logo}>Zvertex3D</Link>
      <div style={navLinks}>
        <Link to="/" style={link}>Home</Link>
        <Link to="/services" style={link}>Services</Link>
        <Link to="/about" style={link}>About</Link>
        <Link to="/contact" style={link}>Contact</Link>
        <Link to="/signup" style={linkBtn}>Register</Link>
        <Link to="/login" style={linkBtn}>Login</Link>
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
  color: "#fff",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const logo = {
  color: "#00BFFF",
  fontSize: "1.8rem",
  fontWeight: "700",
  textDecoration: "none",
};

const navLinks = {
  display: "flex",
  alignItems: "center",
  gap: "1.5rem"
};

const link = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
  transition: "0.3s",
};

const linkBtn = {
  ...link,
  padding: "0.5rem 1rem",
  borderRadius: "5px",
  background: "#00BFFF",
  color: "#0D1B2A",
};
