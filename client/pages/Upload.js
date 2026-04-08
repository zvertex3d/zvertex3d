import React, { useState } from "react";

export default function Upload() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [preview, setPreview] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const imageData = reader.result;

      const newProduct = {
        id: Date.now(),
        name: file.name,
        image: imageData
      };

      const updatedProducts = [...products, newProduct];

      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setPreview(imageData);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div style={container}>
      <h1 style={title}>Upload Your Product</h1>

      <label style={uploadBox}>
        📷 Choose Product from Camera / Gallery
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleUpload}
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

      <div style={grid}>
        {products.map((product) => (
          <div key={product.id} style={card}>
            <img
              src={product.image}
              alt={product.name}
              style={productImage}
            />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  padding: "4rem 2rem",
  background: "#f8fbff",
  textAlign: "center"
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
  width: "300px",
  borderRadius: "12px",
  margin: "2rem auto",
  display: "block"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "2rem",
  maxWidth: "1100px",
  margin: "auto"
};

const card = {
  background: "white",
  padding: "1rem",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
};

const productImage = {
  width: "100%",
  borderRadius: "10px",
  marginBottom: "1rem"
};