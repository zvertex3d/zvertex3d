import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      background: "#001f3f",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2 style={{ color: "#fff" }}>Zvertex3D</h2>
      <div>
        <Link to="/" style={link}>Home</Link>
        <a href="#services" style={link}>Services</a>
        <a href="#about" style={link}>About</a>
        <a href="#contact" style={link}>Contact</a>
        <Link to="/signup" style={link}>Register</Link>
        <Link to="/login" style={link}>Login</Link>
      </div>
    </nav>
  );
}

const link = { color: "#fff", marginRight: "1rem", textDecoration: "none" };
