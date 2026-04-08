import React from "react";

export default function Navbar() {
  const openUpload = () => {
    const fileInput = document.getElementById("global-product-upload");
    if (fileInput) fileInput.click();
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    localStorage.setItem("latestProductImage", previewUrl);
    alert("✅ Product selected from camera/gallery");
  };

  return (
    <>
      {/* TOP CONTACT BAR */}
      <div style={topBar}>
        <div>📞 +91 8639684322</div>
        <div>📧 zvertex3d@gmail.com</div>
      </div>

      {/* MAIN NAVBAR */}
      <nav style={nav}>
        <div style={logo}>Zvertex3D</div>

        <div style={navLinks}>
          <button style={navBtn}>Login</button>
          <button style={navBtn}>Signup</button>
          <button style={uploadBtn} onClick={openUpload}>
            📷 Upload Product
          </button>
        </div>

        <input
          id="global-product-upload"
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleUpload}
          style={{ display: "none" }}
        />
      </nav>
    </>
  );
}

const topBar = {
  background: "#081420",
  color: "#fff",
  display: "flex",
  justifyContent: "flex-end",
  gap: "2rem",
  padding: "0.6rem 2rem",
  fontSize: "0.9rem"
};

const nav = {
  background: "#0D1B2A",
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const logo = {
  color: "#00BFFF",
  fontSize: "2rem",
  fontWeight: "bold"
};

const navLinks = {
  display: "flex",
  gap: "1rem"
};

const navBtn = {
  padding: "0.8rem 1.2rem",
  border: "none",
  borderRadius: "8px",
  background: "#ffffff",
  color: "#0D1B2A",
  fontWeight: "700",
  cursor: "pointer"
};

const uploadBtn = {
  ...navBtn,
  background: "#00BFFF",
  color: "#fff"
};