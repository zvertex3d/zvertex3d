import React, { useState } from "react";

export default function Upload() {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div style={container}>
      <h1 style={title}>Upload Your Product</h1>
      <p style={subtitle}>
        Choose from camera or gallery and preview before upload
      </p>

      <label style={uploadBox}>
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <span style={{ fontSize: "1.1rem", fontWeight: "600" }}>
          📷 Open Camera / Gallery
        </span>
      </label>

      {fileName && (
        <p style={{ marginTop: "1rem", color: "#0D1B2A" }}>
          Selected: <b>{fileName}</b>
        </p>
      )}

      {preview && (
        <div style={{ marginTop: "2rem" }}>
          <img
            src={preview}
            alt="preview"
            style={previewImage}
          />
        </div>
      )}
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
  color: "#0D1B2A",
  marginBottom: "1rem"
};

const subtitle = {
  fontSize: "1.1rem",
  marginBottom: "2rem",
  color: "#444"
};

const uploadBox = {
  display: "inline-block",
  padding: "1.2rem 2rem",
  background: "#00BFFF",
  color: "white",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "700"
};

const previewImage = {
  width: "100%",
  maxWidth: "500px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
};