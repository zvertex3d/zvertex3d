export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "1rem",
      backgroundColor: "#001f3f",
      color: "#fff",
      marginTop: "2rem"
    }}>
      &copy; {new Date().getFullYear()} Zvertex3D. All Rights Reserved.
    </footer>
  );
}
