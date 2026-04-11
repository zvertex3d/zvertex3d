import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [locationName, setLocationName] = useState("Detecting location...");
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const savedVendors = JSON.parse(localStorage.getItem("vendors") || "[]");
    setVendors(savedVendors);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => setLocationName("Stores near your location"),
        () => setLocationName("Location unavailable")
      );
    } else {
      setLocationName("Location unavailable");
    }
  }, []);

  const filteredVendors = useMemo(() => {
    return vendors.filter((vendor) => {
      const q = query.toLowerCase();
      return (
        vendor.storeName?.toLowerCase().includes(q) ||
        vendor.locality?.toLowerCase().includes(q) ||
        vendor.printers?.join(" ").toLowerCase().includes(q)
      );
    });
  }, [vendors, query]);

  const latestSales = [
    "PLA prototype orders - 12 today",
    "Resin miniatures - 8 today",
    "Industrial ABS parts - 5 today"
  ];

  return (
    <div style={page}>
      <div style={topBar}>
        <span>📍 {locationName}</span>
        <button style={vendorBtn} onClick={() => navigate("/vendor-register")}>
          Vendor Registration
        </button>
      </div>

      <div style={hero}>
        <h1 style={title}>Welcome to Zvertex3D</h1>
        <p style={subtitle}>Find nearby verified 3D printing vendors</p>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search stores, printers, locality..."
          style={searchBar}
        />
      </div>

      <section style={section}>
        <h2>Nearby Vendor Stores</h2>
        <div style={grid}>
          {filteredVendors.length ? (
            filteredVendors.map((vendor) => (
              <div key={vendor.id} style={card}>
                {vendor.photo && <img src={vendor.photo} alt={vendor.storeName} style={image} />}
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

const saleCard = { ...card, textAlign: "center", fontWeight: "700" };