import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Zvertex – 3D Printing Platform</h1>
      <p>Upload • Scan • Print • Deliver</p>

      <Link to="/instant-quote">
        <button style={btn}>Get Instant Quote</button>
      </Link>
    </div>
  );
}

const btn = {
  background: "#001f3f",
  color: "#fff",
  padding: "1rem",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};
