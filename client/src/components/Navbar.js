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
      <Link to="/" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold", textDecoration: "none" }}>
        Zvertex3D
      </Link>
      <div>
        <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>Home</Link>
        <Link to="/instant-quote" style={{ color: "#fff", marginRight: "1rem" }}>Instant Quote</Link>
        <Link to="/login" style={{ color: "#fff", marginRight: "1rem" }}>Login</Link>
        <Link to="/signup" style={{ color: "#fff" }}>Signup</Link>
      </div>
    </nav>
  );
}
