import React, { useEffect, useMemo, useState } from "react";
              <div key={vendor.id} style={card}>
                {vendor.photo ? (
                  <img src={vendor.photo} alt={vendor.storeName} style={image} />
                ) : null}
                <h3>{vendor.storeName}</h3>
                <p>Zvertex Code: {vendor.zCode}</p>
                <p>Locality: {vendor.locality}</p>
                <p>Printers: {vendor.printers.join(", ")}</p>
                <p>Phone: {vendor.phone}</p>
                <p>Email: {vendor.email}</p>
              </div>
            ))
          ) : (
            <p>No vendors found.</p>
          )}
        </div>
      </section>

      <section style={section}>
        <h2>Latest Sales</h2>
        <div style={grid}>
          {latestSales.map((sale, idx) => (
            <div key={idx} style={saleCard}>{sale}</div>
          ))}
        </div>
      </section>
    </div>
  );
}

const page = { minHeight: "100vh", background: "#f8fbff" };
const topBar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  background: "#0D1B2A",
  color: "white"
};
const vendorBtn = {
  background: "#00BFFF",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "0.8rem 1.2rem",
  cursor: "pointer"
};
const hero = { padding: "4rem 2rem", textAlign: "center" };
const title = { fontSize: "3rem", color: "#0D1B2A" };
const subtitle = { marginBottom: "2rem", color: "#555" };
const searchBar = {
  width: "100%",
  maxWidth: "700px",
  padding: "1rem",
  borderRadius: "10px",
  border: "1px solid #ccc"
};
const section = { padding: "2rem" };
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "1.5rem"
};
const card = {
  background: "white",
  borderRadius: "12px",
  padding: "1rem",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
};
const image = {
  width: "100%",
  borderRadius: "10px",
  marginBottom: "1rem"
};
const saleCard = {
  ...card,
  textAlign: "center",
  fontWeight: "700"
};