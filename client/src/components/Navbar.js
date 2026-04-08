import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      {/* TOP CONTACT BAR */}
      <div style={topBar}>
        <span>📞 +91 8639684322</span>
        <span>📧 zvertex3d@gmail.com</span>
      </div>

      {/* MAIN NAVBAR */}
      <nav style={nav}>
        <Link to="/" style={logo}>
          Zvertex3D
        </Link>

        <div style={navLinks}>
          <Link to="/" style={link}>Home</Link>
          <Link to="/services" style={link}>Services</Link>
          <Link to="/upload" style={link}>Upload</Link>
        </div>
      </nav>
    </div>
  );
}

const topBar = {
  background: "#081420",
  color: "#ffffff",
  display: "flex",
  justifyContent: "flex-end",
  gap: "2rem",
  padding: "0.5rem 2rem",
  fontSize: "0.9rem",
  fontWeight: "500"
};

const nav = {
  background: "#0D1B2A",
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const logo = {
  color: "#00BFFF",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "2rem"
};

const navLinks = {
  display: "flex",
  gap: "1.5rem"
};

const link = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "600"
};