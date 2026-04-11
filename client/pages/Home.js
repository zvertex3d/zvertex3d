import React, { useEffect, useState } from "react";
import {
  TextField, Button, Grid, Card, CardContent, Container
} from "@mui/material";
import { getNearbyVendors, getLatestSales, searchAll } from "../services/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const [vendors, setVendors] = useState([]);
  const [sales, setSales] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadNearby();
    loadSales();
  }, []);

  const safeArray = (data) => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.data)) return data.data;
    if (Array.isArray(data.vendors)) return data.vendors;
    if (Array.isArray(data.sales)) return data.sales;
    return [];
  };

  const loadNearby = async () => {
    try {
      navigator.geolocation?.getCurrentPosition(
        async (pos) => {
          const res = await getNearbyVendors(
            pos.coords.latitude,
            pos.coords.longitude
          );
          setVendors(safeArray(res?.data));
        },
        () => setVendors([])
      );
    } catch {
      setVendors([]);
    }
  };

  const loadSales = async () => {
    try {
      const res = await getLatestSales();
      setSales(safeArray(res?.data));
    } catch {
      setSales([]);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await searchAll(search);
      navigate("/search", { state: safeArray(res?.data) });
    } catch {
      navigate("/search", { state: [] });
    }
  };

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>

        <TextField
          fullWidth
          label="Search vendors, services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button sx={{ mt: 2 }} variant="contained" onClick={handleSearch}>
          Search
        </Button>

        <Button
          sx={{ mt: 2, ml: 2 }}
          variant="outlined"
          onClick={() => navigate("/vendor-register")}
        >
          Register Vendor
        </Button>

        <h3 style={{ marginTop: 30 }}>Nearby Vendors</h3>

        <Grid container spacing={2}>
          {safeArray(vendors).map((v, i) => (
            <Grid item xs={12} md={4} key={v?._id || i}>
              <Card
                sx={{ cursor: "pointer" }}
                onClick={() => v?.zvertexCode && navigate(`/store/${v.zvertexCode}`)}
              >
                <CardContent>
                  <h4>{v?.storeName || "Vendor"}</h4>
                  <p>{v?.location || "-"}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <h3 style={{ marginTop: 30 }}>Latest Sales</h3>

        <Grid container spacing={2}>
          {safeArray(sales).map((s, i) => (
            <Grid item xs={12} md={4} key={s?._id || i}>
              <Card>
                <CardContent>
                  <p>{s?.title || "Order"}</p>
                  <p>₹{s?.price || "-"}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </>
  );
};

export default Home;