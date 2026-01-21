import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={footer}>
      <div>
        <h4>Quick Links</h4>
        <Link to="/" style={link}>Home</Link><br/>
        <Link to="/services" style={link}>Services</Link><br/>
        <Link to="/about" style={link}>About</Link><br/>
        <Link to="/contact" style={link}>Contact</Link>
      </div>
      <div>
        <h4>Contact</h4>
        <p>Suryanagar, Hayathnagar, Hyderabad, India</p>
        <p>📞 +91 8639684322</p>
        <p>📧 zvertex3d@gmail.com</p>
      </div>
    </footer>
  );
}

const footer = {
  background: "#001f3f",
  color: "#fff",
  padding: "2rem",
  display: "flex",
  justifyContent: "space-between"
};
const link = { color: "#7FDBFF", textDecoration: "none" };
