import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{
        backgroundImage: "url('/hero.jpg')",
        height: "80vh",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center"
      }}>
        <div>
          <h1>Upload Your Design. We Print It.</h1>
          <p>High precision 3D Printing solutions</p>
          <button onClick={() => navigate("/upload")} style={btn}>
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
}

const btn = {
  background: "#001f3f",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  cursor: "pointer"
};
