export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "1rem",
      background: "#001f3f",
      color: "#fff"
    }}>
      &copy; {new Date().getFullYear()} Zvertex3D — All Rights Reserved.
    </footer>
  );
}
