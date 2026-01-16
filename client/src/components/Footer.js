export default function Footer() {
  return (
    <footer style={footer}>
      <div style={grid}>
        <div>
          <h3>ZvertexAI</h3>
          <p style={muted}>
            Empowering careers with AI-driven solutions.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Dashboard</p>
          <p>Subscription Plans</p>
        </div>

        <div>
          <h4>Contact Us</h4>
          <p style={muted}>5900 BALCONES DR #16790</p>
          <p style={muted}>Austin, TX 78731</p>
          <p style={muted}>Phone: 737-239-0920</p>
          <button style={outlineBtn}>REACH OUT</button>
        </div>
      </div>

      <p style={copy}>© 2025 ZvertexAI. All rights reserved.</p>
    </footer>
  );
}

const footer = {
  background: "#132845",
  padding: "3rem",
  marginTop: "4rem"
};

const grid = {
  display: "flex",
  justifyContent: "space-between",
  gap: "2rem"
};

const muted = {
  color: "#cfd8e3",
  fontSize: "0.9rem"
};

const outlineBtn = {
  marginTop: "1rem",
  background: "transparent",
  border: "1px solid #fff",
  color: "#fff",
  padding: "0.5rem 1.2rem",
  borderRadius: "5px",
  cursor: "pointer"
};

const copy = {
  textAlign: "center",
  marginTop: "2rem",
  color: "#cfd8e3",
  fontSize: "0.8rem"
};
