import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section style={hero}>
        <h1 style={title}>Welcome to ZvertexAI</h1>
        <p style={subtitle}>
          Empowering careers with AI-driven job matching and automation.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <Link to="/signup">
            <button style={cta}>GET STARTED</button>
          </Link>
          <Link to="/login">
            <button style={secondary}>LOGIN</button>
          </Link>
        </div>
      </section>

      <section style={features}>
        <Feature
          title="AI Job Matching"
          desc="Find jobs tailored to your skills with our advanced AI algorithms."
        />
        <Feature
          title="Auto-Apply"
          desc="Let ZvertexAI apply to jobs on your behalf throughout the day."
        />
        <Feature
          title="Subscription Plans"
          desc="Choose from Student, Recruiter, or Business plans tailored to your needs."
        />
      </section>
    </>
  );
}

function Feature({ title, desc }) {
  return (
    <div style={featureBox}>
      <h3>{title}</h3>
      <p style={{ color: "#cfd8e3" }}>{desc}</p>
    </div>
  );
}

/* STYLES */
const hero = {
  textAlign: "center",
  padding: "5rem 2rem"
};

const title = {
  fontSize: "3rem",
  marginBottom: "1rem"
};

const subtitle = {
  fontSize: "1.2rem",
  color: "#cfd8e3"
};

const cta = {
  background: "#ff7a18",
  border: "none",
  color: "#fff",
  padding: "0.8rem 1.8rem",
  borderRadius: "5px",
  marginRight: "1rem",
  cursor: "pointer"
};

const secondary = {
  background: "transparent",
  border: "1px solid #fff",
  color: "#fff",
  padding: "0.8rem 1.8rem",
  borderRadius: "5px",
  cursor: "pointer"
};

const features = {
  display: "flex",
  justifyContent: "center",
  gap: "3rem",
  padding: "3rem"
};

const featureBox = {
  maxWidth: "250px",
  textAlign: "left"
};
