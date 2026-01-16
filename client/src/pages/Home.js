import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "3rem", color: "#001f3f" }}>
      <h1>Professional 3D Printing Services</h1>
      <p>Fast, reliable and precise 3D manufacturing solutions.</p>

      <Link to="/instant-quote">
        <button style={{
          marginTop: "1rem",
          background: "#001f3f",
          color: "#fff",
          padding: "0.8rem 1.5rem",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
          Get Instant Quote
        </button>
      </Link>
    </div>
  );
}
