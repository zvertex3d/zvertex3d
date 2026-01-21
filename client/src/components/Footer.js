export default function Footer() {
  return (
    <footer style={{
      background: "#001f3f",
      color: "#fff",
      padding: "2rem",
      textAlign: "center"
    }}>
      <p>📍 Suryanagar, Hayathnagar, Hyderabad, India</p>
      <p>📞 +91 8639684322</p>
      <p>📧 zvertex3d@gmail.com</p>
      <p>© {new Date().getFullYear()} Zvertex3D</p>
    </footer>
  );
}
