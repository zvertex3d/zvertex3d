export default function Footer() {
  return (
    <footer
      style={{
        background: "#1a2a44",
        color: "#fff",
        textAlign: "center",
        padding: "1rem",
        marginTop: "2rem"
      }}
    >
      © {new Date().getFullYear()} Zvertex3D. All rights reserved.
    </footer>
  );
}
