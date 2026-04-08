import React, { useState } from "react";

export default function Upload() {
  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const imageData = reader.result;

      const existingProducts =
        JSON.parse(localStorage.getItem("products")) || [];

      const newProduct = {
        id: Date.now(),
        name: file.name,
        image: imageData
      };

      localStorage.setItem(
        "products",
        JSON.stringify([...existingProducts, newProduct])
      );

      setPreview(imageData);
      setMessage("✅ Product uploaded successfully");
    };

    reader.readAsDataURL(file);
  };

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}>Upload Your Product</h1>

        <label style={uploadButton}>
          📷 Open Camera / Gallery
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleUpload}
            style={{ display: "none" }}
          />
        </label>

        {preview && <img src={preview} alt="preview" style={previewImage} />}

        {message && <p style={messageStyle}>{message}</p>}
      </div>
    </div>
  );
}

const container = {
  minHeight: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f5f8fc",
  padding: "2rem"
};

const card = {
  width: "100%",
  maxWidth: "600px",
  background: "white",
  padding: "3rem",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  textAlign: "center"
};

const title = {
  fontSize: "2.5rem",
  color: "#0D1B2A",
  marginBottom: "2rem"
};

const uploadButton = {
  display: "inline-block",
  padding: "1rem 2rem",
  background: "#00BFFF",
  color: "white",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "700"
};

const previewImage = {
  width: "100%",
  maxWidth: "350px",
  marginTop: "2rem",
  borderRadius: "12px"
};

const messageStyle = {
  marginTop: "1.5rem",
  color: "green",
  fontWeight: "600"
};