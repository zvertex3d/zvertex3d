export default function Footer() {
  return (
    <footer style={{
      background: "#001f3f",
      color: "#fff",
      textAlign: "center",
      padding: "1rem",
      marginTop: "2rem"
    }}>
      © {new Date().getFullYear()} Zvertex3D. All rights reserved.
    </footer>
  );
}
