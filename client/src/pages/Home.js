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

  const fetchNearby = () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await getNearbyVendors(latitude, longitude);
          setVendors(Array.isArray(res.data) ? res.data : []);
        } catch {
          setVendors([]);
        }
      },
      () => setVendors([])
    );
  };

  const fetchSales = async () => {
    try {
      const res = await getLatestSales();
      setSales(Array.isArray(res.data) ? res.data : []);
    } catch {
      setSales([]);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await searchAll(search);
      navigate("/search", { state: res.data || [] });
    } catch {
      navigate("/search", { state: [] });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to Zvertex</h2>

      <TextField
        label="Search printers, vendors, services"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>

      <Button
        variant="contained"
        onClick={() => navigate("/vendor-register")}
        style={{ marginTop: "10px" }}
      >
        Register Your Store
      </Button>

      <h3>Nearby Vendors</h3>
      <Grid container spacing={2}>
        {vendors.length > 0 ? (
          vendors.map((v) => (
            <Grid item xs={4} key={v._id}>
              <Card>
                <CardContent>
                  <h4>{v.storeName}</h4>
                  <p>{v.location}</p>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <p>No vendors found</p>
        )}
      </Grid>

      <h3>Latest Sales</h3>
      <Grid container spacing={2}>
        {sales.length > 0 ? (
          sales.map((s) => (
            <Grid item xs={4} key={s._id}>
              <Card>
                <CardContent>
                  <p>{s.title}</p>
                  <p>{s.price}</p>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <p>No sales available</p>
        )}
      </Grid>
    </div>
  );
};

export default Home;