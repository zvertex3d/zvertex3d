import QuoteForm from "../components/QuoteForm"; // exact path

export default function InstantQuote() {
  return (
    <div style={{ minHeight: "80vh", padding: "2rem 0", backgroundColor: "#fff", color: "#001f3f" }}>
      <h2>Instant Quote</h2>
      <QuoteForm />
    </div>
  );
}
