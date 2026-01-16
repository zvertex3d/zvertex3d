import QuoteForm from "../components/QuoteForm"; // <-- path must match exactly
import "../components/styles.css";

export default function InstantQuote() {
  return (
    <div className="quote-section container" style={{ minHeight: "80vh", padding: "2rem 0" }}>
      <h2>Instant Quote</h2>
      <QuoteForm />
    </div>
  );
}
