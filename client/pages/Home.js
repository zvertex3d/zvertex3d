import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Card, CardContent } from "@mui/material";
import { getNearbyVendors, getLatestSales, searchAll } from "../services/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [vendors, setVendors] = useState([]);
  const [sales, setSales] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchNearby();
    fetchSales();
  }, []);

  const fetchNearby = async () => {
    try {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        const res = await getNearbyVendors(latitude, longitude);

        // ✅ FIX: ensure array
        setVendors(Array.isArray(res.data) ? res.data : []);
      });
    } catch (err) {
      setVendors([]);
    }
  };

  const fetchSales = async () => {
    try {
      const res = await getLatestSales();

      // ✅ FIX: ensure array
      setSales(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      setSales([]);
    }
  };

  const handleSearch = async () => {
    const res = await searchAll(search);
    navigate("/search", { state: res.data });
  };

  return (
    <div>
      <h2>Welcome to Zvertex</h2>

      {/* Search */}
      <TextField
        label="Search printers, vendors, services"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>

      {/* Vendor Register CTA */}
      <Button variant="contained" onClick={() => navigate("/vendor-register")}>
        Register Your Store
      </Button>

      {/* Nearby Vendors */}
      <h3>Nearby Vendors</h3>
      <Grid container spacing={2}>
        {Array.isArray(vendors) &&
          vendors.map((v) => (
            <Grid item xs={4} key={v._id}>
              <Card>
                <CardContent>
                  <h4>{v.storeName}</h4>
                  <p>{v.location}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>

      {/* Latest Sales */}
      <h3>Latest Sales</h3>
      <Grid container spacing={2}>
        {Array.isArray(sales) &&
          sales.map((s) => (
            <Grid item xs={4} key={s._id}>
              <Card>
                <CardContent>
                  <p>{s.title}</p>
                  <p>{s.price}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Home;