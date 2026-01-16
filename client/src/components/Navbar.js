import { Link } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#001f3f",
      color: "#fff"
    }}>
      <Link to="/" style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#fff", textDecoration: "none" }}>
        <img src="/logo.png" alt="Zvertex3D" style={{ height: "40px", marginRight: "0.5rem" }} />
        Zvertex3D
      </Link>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/instant-quote" style={{ color: "#fff", textDecoration: "none" }}>Instant Quote</Link>
        {!token && (
          <>
            <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>Login</Link>
            <Link to="/signup" style={{ color: "#fff", textDecoration: "none" }}>Signup</Link>
          </>
        )}
        {token && (
          <>
            {role === "vendor" ? (
              <Link to="/vendor/dashboard" style={{ color: "#fff", textDecoration: "none" }}>Dashboard</Link>
            ) : (
              <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>Dashboard</Link>
            )}
            <button onClick={logout} style={{
              backgroundColor: "#fff",
              color: "#001f3f",
              border: "none",
              padding: "0.4rem 0.8rem",
              cursor: "pointer",
              fontWeight: "bold",
              borderRadius: "4px"
            }}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
