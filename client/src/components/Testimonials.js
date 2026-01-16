export default function Testimonials() {
  const testData = [
    {
      text: "Got exactly what I needed with perfect detail!",
      name: "Alex"
    },
    {
      text: "Quick service & high quality print!",
      name: "Priya"
    }
  ];

  return (
    <section className="container">
      <h2>What Our Customers Say</h2>
      {testData.map((t, i) => (
        <div key={i} className="testimonial">
          <p>"{t.text}"</p>
          <p>- {t.name}</p>
        </div>
      ))}
    </section>
  );
}
