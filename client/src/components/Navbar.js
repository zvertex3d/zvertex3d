import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/quote">Instant Quote</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
}
