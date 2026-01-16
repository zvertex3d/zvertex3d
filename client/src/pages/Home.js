import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem", minHeight: "80vh", backgroundColor: "#fff", color: "#001f3f" }}>
      <h1>Welcome to Zvertex3D</h1>
      <p>Your one-stop solution for 3D printing quotes and orders.</p>
      <Link to="/instant-quote" style={{
        display: "inline-block",
        marginTop: "1rem",
        padding: "0.6rem 1.2rem",
        backgroundColor: "#001f3f",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "4px"
      }}>Get Instant Quote</Link>
    </div>
  );
}
