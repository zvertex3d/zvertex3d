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
    navigator.geolocation?.getCurrentPosition(async (pos) => {
      const res = await getNearbyVendors(pos.coords.latitude, pos.coords.longitude);
      setVendors(res.data || []);
    });

    const fetchSales = async () => {
      const res = await getLatestSales();
      setSales(res.data || []);
    };
    fetchSales();
  }, []);

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
        <Button sx={{ mt: 2 }} variant="contained" onClick={async () => {
          const res = await searchAll(search);
          navigate("/search", { state: res.data });
        }}>
          Search
        </Button>

        <Button sx={{ mt: 2, ml: 2 }} variant="outlined" onClick={() => navigate("/vendor-register")}>
          Register Vendor
        </Button>

        <h3>Nearby Vendors</h3>
        <Grid container spacing={2}>
          {vendors.map(v => (
            <Grid item xs={4} key={v._id}>
              <Card onClick={() => navigate(`/store/${v.zvertexCode}`)}>
                <CardContent>
                  <h4>{v.storeName}</h4>
                  <p>{v.location}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <h3>Latest Sales</h3>
        <Grid container spacing={2}>
          {sales.map(s => (
            <Grid item xs={4} key={s._id}>
              <Card>
                <CardContent>
                  <p>{s.title}</p>
                  <p>₹{s.price}</p>
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