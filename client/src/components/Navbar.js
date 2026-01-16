import { Link } from "react-router-dom";
import "../components/styles.css";

export default function Navbar() {
  return (
    <nav className="navbar container">
      <Link to="/">
        <img src="/logo.png" alt="Zvertex3D" style={{ height: "40px" }} />
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/instant-quote">Instant Quote</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}
