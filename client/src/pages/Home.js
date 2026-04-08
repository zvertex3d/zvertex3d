import { useNavigate } from "react-router-dom";

const services = [
  "3D Printing",
  "3D Scanning",
  "Reverse Engineering",
  "Rapid Prototyping"
];

const reviews = [
  { name: "Rahul", text: "Outstanding quality and fast delivery!", rating: 5 },
  { name: "Sneha", text: "Professional team and excellent output.", rating: 5 },
  { name: "Arjun", text: "Best 3D printing service in Hyderabad.", rating: 4 }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section
        style={{
          minHeight: "85vh",
          background:
            "linear-gradient(135deg, #0D1B2A 0%, #1B263B 50%, #00BFFF 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem"
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
            maxWidth: "850px"
          }}
        >
          <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>
            Transforming Ideas Into Reality
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              marginBottom: "2rem"
            }}
          >
            Premium 3D printing, scanning, prototyping, manufacturing and
            reverse engineering solutions.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            <button
              onClick={() => navigate("/services")}
              style={primaryBtn}
            >
              Explore Services
            </button>

            <button
              onClick={() => navigate("/upload")}
              style={secondaryBtn}
            >
              Upload Design
            </button>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "4rem 2rem",
          background: "#F8FBFF",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          Our Core Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "2rem",
            maxWidth: "1100px",
            margin: "auto"
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
              }}
            >
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "4rem 2rem",
          background: "#ffffff",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          Client Reviews
        </h2>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                width: "280px",
                background: "#F8FBFF",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
              }}
            >
              <p>{'⭐'.repeat(review.rating)}</p>
              <p style={{ margin: "1rem 0" }}>{review.text}</p>
              <strong>{review.name}</strong>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const primaryBtn = {
  padding: "1rem 2rem",
  border: "none",
  borderRadius: "8px",
  background: "white",
  color: "#0D1B2A",
  fontWeight: "700",
  cursor: "pointer"
};

const secondaryBtn = {
  padding: "1rem 2rem",
  border: "2px solid white",
  borderRadius: "8px",
  background: "transparent",
  color: "white",
  fontWeight: "700",
  cursor: "pointer"
};