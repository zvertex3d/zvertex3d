import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const slides = ["/hero.jpg", "/hero.jpg", "/hero.jpg"];

const reviews = [
  { name: "Rahul", text: "Outstanding quality, fast delivery!", rating: 5 },
  { name: "Sneha", text: "Professional and precise 3D prints.", rating: 5 },
  { name: "Arjun", text: "Great experience with Zvertex3D!", rating: 4 }
];

export default function Home() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section
        style={{
          height: "90vh",
          backgroundImage: `url(${slides[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.55)",
            color: "#fff",
            padding: "3rem",
            borderRadius: "12px",
            textAlign: "center",
            maxWidth: "700px"
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            Transforming Ideas into Reality
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            High precision 3D printing, scanning, reverse engineering and design
            solutions for industrial, medical and educational needs.
          </p>

          <button
            onClick={() => navigate("/services")}
            style={{
              background: "#00BFFF",
              border: "none",
              padding: "0.9rem 2rem",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Explore Services
          </button>
        </div>
      </section>

      <section
        style={{
          padding: "4rem 2rem",
          background: "#F5FAFF",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "2rem", fontSize: "2rem" }}>
          What Our Clients Say
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
                background: "#fff",
                padding: "2rem",
                width: "280px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
              }}
            >
              <p>{'⭐'.repeat(review.rating)}</p>
              <p style={{ margin: "1rem 0" }}>"{review.text}"</p>
              <strong>- {review.name}</strong>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}