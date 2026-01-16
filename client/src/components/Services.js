export default function Services() {
  const serviceData = [
    {
      title: "3D Printing",
      desc: "Fast professional 3D printing for prototypes & production parts"
    },
    {
      title: "3D Scanning",
      desc: "High precision 3D scanning for accurate digital models"
    },
    {
      title: "3D Modeling",
      desc: "Custom 3D model creation & CAD design services"
    }
  ];

  return (
    <section className="services container">
      <h2>Our Services</h2>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        {serviceData.map((s, i) => (
          <div className="card" key={i} style={{ flex: 1 }}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
