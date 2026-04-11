import React from "react";
import {
  Container, Typography, Grid, Card, CardContent
} from "@mui/material";

const dummyVendors = [
  { name: "Hyderabad Prints", location: "Hyderabad" },
  { name: "3D Hub India", location: "Bangalore" }
];

const dummyOrders = [
  { title: "Gear Prototype", review: "Great quality!" },
  { title: "Medical Model", review: "Very accurate print" }
];

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>

      <Typography variant="h3" align="center">
        Welcome to the world of 3D Printing
      </Typography>

      <Typography variant="h5" align="center" sx={{ mt: 2 }}>
        All 3D Printing field under one roof
      </Typography>

      {/* LATEST ORDERS */}
      <Typography variant="h5" sx={{ mt: 5 }}>Latest Orders & Reviews</Typography>
      <Grid container spacing={2}>
        {dummyOrders.map((o, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card>
              <CardContent>
                <h4>{o.title}</h4>
                <p>{o.review}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* VENDORS */}
      <Typography variant="h5" sx={{ mt: 5 }}>Latest Vendors</Typography>
      <Grid container spacing={2}>
        {dummyVendors.map((v, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card>
              <CardContent>
                <h4>{v.name}</h4>
                <p>{v.location}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default Home;