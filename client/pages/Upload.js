import React, { useState } from "react";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setMessage("");
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setMessage("Please select an image first");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const imageData = reader.result;

      const existingProducts =
        JSON.parse(localStorage.getItem("products")) || [];

      const updatedProducts = [
        ...existingProducts,
        {
          id: Date.now(),
          name: selectedFile.name,
          image: imageData
        }
      ];

      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setMessage("Product uploaded successfully ✅");
      setSelectedFile(null);
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <div style={container}>
      <h1 style={title}>Upload Your Product</h1>

      <label style={uploadBox}>
        📷 Choose from Camera / Gallery
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </label>

      {preview && (
        <img
          src={preview}
          alt="preview"
          style={previewImage}
        />
      )}

      <button style={uploadBtn} onClick={handleUpload}>
        Upload Product
      </button>

      {message && <p style={messageStyle}>{message}</p>}
    </div>
  );
}

const container = {
  minHeight: "80vh",
  padding: "4rem 2rem",
  textAlign: "center",
  background: "#f8fbff"
};

const title = {
  fontSize: "3rem",
  marginBottom: "2rem",
  color: "#0D1B2A"
};

const uploadBox = {
  display: "inline-block",
  padding: "1rem 2rem",
  background: "#00BFFF",
  color: "white",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "700",
  marginBottom: "2rem"
};

const previewImage = {
  display: "block",
  width: "100%",
  maxWidth: "400px",
  margin: "2rem auto",
  borderRadius: "10px"
};

const uploadBtn = {
  padding: "1rem 2rem",
  border: "none",
  borderRadius: "10px",
  background: "#0D1B2A",
  color: "white",
  fontWeight: "700",
  cursor: "pointer"
};

const messageStyle = {
  marginTop: "1.5rem",
  fontWeight: "600",
  color: "green"
};