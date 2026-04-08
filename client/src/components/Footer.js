import React from "react";

export default function Footer() {
  const latestProduct = localStorage.getItem("latestProductImage");

  return (
    <footer style={footer}>
      <div>
        <h3>Contact Us</h3>
        <p>📞 +91 8639684322</p>
        <p>📧 zvertex3d@gmail.com</p>
      </div>

      {latestProduct && (
        <div>
          <h3>Latest Uploaded Product</h3>
          <img
            src={latestProduct}
            alt="latest product"
            style={image}
          />
        </div>
      )}
    </footer>
  );
}

const footer = {
  background: "#0D1B2A",
  color: "#fff",
  padding: "2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap"
};

const image = {
  width: "150px",
  borderRadius: "10px",
  marginTop: "1rem"
};