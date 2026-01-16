import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={nav}>
      <div style={logo}>ZvertexAI</div>
      <div>
        <Link to="/" style={link}>HOME</Link>
        <Link to="/signup" style={link}>SIGNUP</Link>
        <Link to="/login" style={link}>LOGIN</Link>
      </div>
    </nav>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 3rem",
  background: "#132845"
};

const logo = {
  fontSize: "1.4rem",
  fontWeight: "600"
};

const link = {
  marginLeft: "1.5rem",
  fontSize: "0.9rem"
};
