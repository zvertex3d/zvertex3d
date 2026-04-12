import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Store = () => {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL || "http://localhost:5000/api"}/vendor/${id}`)
      .then((res) => setVendor(res.data));
  }, [id]);

  if (!vendor) return <div>Loading...</div>;

  return (
    <Container maxWidth="lg">

      {/* STORE HEADER */}
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h3">{vendor.name}</Typography>
        <Typography color="text.secondary">{vendor.address}</Typography>
        <Typography color="primary">{vendor.code}</Typography>
      </Box>

      {/* STORE IMAGE */}
      <Box sx={{ mb: 4 }}>
        <img
          src={vendor.photo}
          alt="store"
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "12px"
          }}
        />
      </Box>

      {/* PRODUCTS */}
      <Typography variant="h4" sx={{ mb: 3 }}>
        Products
      </Typography>

      <Grid container spacing={3}>
        {vendor.products && vendor.products.length > 0 ? (
          vendor.products.map((p, i) => (
            <Grid item xs={12} md={3} key={i}>
              <Card>

                <CardMedia
                  component="img"
                  height="160"
                  image={p.image || "https://via.placeholder.com/200"}
                />

                <CardContent>
                  <Typography variant="h6">{p.name}</Typography>
                  <Typography color="primary">₹{p.price}</Typography>
                </CardContent>

              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No products added yet.</Typography>
        )}
      </Grid>

      {/* LATEST ORDERS (STATIC PLACEHOLDER FOR NOW) */}
      <Typography variant="h4" sx={{ mt: 6, mb: 3 }}>
        Latest Orders
      </Typography>

      <Grid container spacing={3}>
        {[1, 2, 3].map((o) => (
          <Grid item xs={12} md={3} key={o}>
            <Card>
              <CardContent>
                <Typography>Order #{o}</Typography>
                <Typography color="text.secondary">
                  Completed successfully
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default Store;