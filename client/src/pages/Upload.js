import React, { useRef, useState } from "react";

export default function Upload() {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState("");
  const [fileName, setFileName] = useState("");

  const openPicker = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        padding: "4rem 2rem",
        background: "#f8fbff",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#0D1B2A",
          marginBottom: "1rem"
        }}
      >
        Upload Your Product
      </h1>

      <p
        style={{
          marginBottom: "2rem",
          color: "#555"
        }}
      >
        Upload from camera or gallery
      </p>

      <button onClick={openPicker} style={uploadBtn}>
        📷 Choose Product Image
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {fileName && (
        <p style={{ marginTop: "1rem" }}>
          Selected: <b>{fileName}</b>
        </p>
      )}

      {preview && (
        <img
          src={preview}
          alt="preview"
          style={{
            width: "100%",
            maxWidth: "400px",
            marginTop: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />
      )}
    </div>
  );
}

const uploadBtn = {
  padding: "1rem 2rem",
  border: "none",
  borderRadius: "10px",
  background: "#00BFFF",
  color: "white",
  fontWeight: "700",
  cursor: "pointer",
  fontSize: "1rem"
};