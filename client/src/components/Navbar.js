import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={nav}>
      <button style={logoBtn}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Zvertex3D
        </Link>
      </button>
      <div>
        <Link to="/" style={link}>Home</Link>
        <Link to="/services" style={link}>Services</Link>
        <Link to="/about" style={link}>About</Link>
        <Link to="/contact" style={link}>Contact</Link>
        <Link to="/signup" style={link}>Register</Link>
        <Link to="/login" style={link}>Login</Link>
      </div>
    </nav>
  );
}

const nav = {
  background: "#001f3f",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};
const link = { color: "#fff", marginRight: "1rem", textDecoration: "none" };
const logoBtn = { background: "transparent", border: "none", fontSize: "1.5rem" };
