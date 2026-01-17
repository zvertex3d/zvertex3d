import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <SEO
        title="Zvertex3D – Professional 3D Printing Services"
        description="Instant quotes, fast delivery, and vendor manufacturing network."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "3rem", color: "#001f3f" }}
      >
        <h1>Professional 3D Printing Services</h1>
        <p>Fast, reliable and precise manufacturing.</p>

        <Link to="/instant-quote">
          <button style={{
            background: "#001f3f",
            color: "#fff",
            padding: "0.8rem 1.5rem",
            border: "none"
          }}>
            Get Instant Quote
          </button>
        </Link>
      </motion.div>
    </>
  );
}
