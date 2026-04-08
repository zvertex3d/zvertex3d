import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "3D Printed Prototype",
    image: "https://via.placeholder.com/300x220?text=3D+Prototype"
  },
  {
    name: "Custom Mechanical Part",
    image: "https://via.placeholder.com/300x220?text=Mechanical+Part"
  },
  {
    name: "Medical Model",
    image: "https://via.placeholder.com/300x220?text=Medical+Model"
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO */}
      <div style={hero}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>
            Welcome to Zvertex3D
          </h1>

          <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
            Professional 3D Printing and Prototyping Services
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button onClick={() => navigate("/services")} style={btn}>
              Explore Services
            </button>
            <button onClick={() => navigate("/upload")} style={btn}>
              Upload Design
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <section style={productSection}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Our Products
        </h2>

        <div style={grid}>
          {products.map((product, index) => (
            <div key={index} style={card}>
              <img
                src={product.image}
                alt={product.name}
                style={image}
              />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const hero = {
  minHeight: "80vh",
  background: "linear-gradient(135deg,#0D1B2A,#00BFFF)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  padding: "2rem"
};

const btn = {
  padding: "1rem 2rem",
  border: "none",
  borderRadius: "8px",
  background: "white",
  color: "#0D1B2A",
  fontWeight: "700",
  cursor: "pointer"
};

const productSection = {
  padding: "4rem 2rem",
  background: "#f8fbff"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "2rem",
  maxWidth: "1100px",
  margin: "auto"
};

const card = {
  background: "white",
  padding: "1rem",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  textAlign: "center"
};

const image = {
  width: "100%",
  borderRadius: "10px",
  marginBottom: "1rem"
};