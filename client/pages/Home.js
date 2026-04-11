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
    fetchNearby();
    fetchSales();
  }, []);

  const fetchNearby = async () => {
    try {
      if (!navigator.geolocation) {
        setVendors([]);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const res = await getNearbyVendors(
              pos.coords.latitude,
              pos.coords.longitude
            );

            // ✅ HARD FIX (handles all cases)
            const data = res?.data;
            if (Array.isArray(data)) {
              setVendors(data);
            } else if (Array.isArray(data?.vendors)) {
              setVendors(data.vendors);
            } else {
              setVendors([]);
            }
          } catch {
            setVendors([]);
          }
        },
        () => setVendors([])
      );
    } catch {
      setVendors([]);
    }
  };

  const fetchSales = async () => {
    try {
      const res = await getLatestSales();

      // ✅ HARD FIX
      const data = res?.data;
      if (Array.isArray(data)) {
        setSales(data);
      } else if (Array.isArray(data?.sales)) {
        setSales(data.sales);
      } else {
        setSales([]);
      }
    } catch {
      setSales([]);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await searchAll(search);
      const data = Array.isArray(res?.data) ? res.data : [];
      navigate("/search", { state: data });
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

        <Button
          sx={{ mt: 2 }}
          variant="contained"
          onClick={handleSearch}
        >
          Search
        </Button>

        <Button
          sx={{ mt: 2, ml: 2 }}
          variant="outlined"
          onClick={() => navigate("/vendor-register")}
        >
          Register Vendor
        </Button>

        <h3>Nearby Vendors</h3>
        <Grid container spacing={2}>
          {Array.isArray(vendors) && vendors.length > 0 ? (
            vendors.map((v) => (
              <Grid item xs={12} md={4} key={v._id || v.zvertexCode}>
                <Card
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate(`/store/${v.zvertexCode}`)}
                >
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

        <h3 style={{ marginTop: "30px" }}>Latest Sales</h3>
        <Grid container spacing={2}>
          {Array.isArray(sales) && sales.length > 0 ? (
            sales.map((s) => (
              <Grid item xs={12} md={4} key={s._id}>
                <Card>
                  <CardContent>
                    <p>{s.title || "Order"}</p>
                    <p>₹{s.price || "-"}</p>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <p>No sales available</p>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Home;