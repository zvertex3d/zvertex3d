import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={footer}>
      <div style={left}>
        <h3>Quick Links</h3>
        <Link to="/" style={link}>Home</Link>
        <Link to="/services" style={link}>Services</Link>
        <Link to="/about" style={link}>About</Link>
        <Link to="/contact" style={link}>Contact</Link>
      </div>
      <div style={right}>
        <h3>Contact</h3>
        <p>Suryanagar, Hayathnagar, Hyderabad, India</p>
        <p>📞 +91 8639684322</p>
        <p>📧 zvertex3d@gmail.com</p>
      </div>
    </footer>
  );
}

const footer = {
  display: "flex",
  justifyContent: "space-between",
  background: "#0D1B2A",
  color: "#fff",
  padding: "3rem",
  flexWrap: "wrap"
};

const left = { display: "flex", flexDirection: "column", gap: "0.5rem" };
const right = { display: "flex", flexDirection: "column", gap: "0.5rem" };
const link = { color: "#00BFFF", textDecoration: "none", marginBottom: "0.3rem" };
