import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from "@mui/material";

const Home = () => {
  const vendors = [{ name: "Demo Vendor", location: "Hyderabad" }];
  const orders = [{ title: "Prototype", review: "Excellent print!" }];

  return (
    <Container maxWidth="lg">

      {/* HERO */}
      <Box sx={{ textAlign: "center", mt: 8, mb: 6 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            mb: 2
          }}
        >
          Browse everything.
        </Typography>

        <Typography variant="h5" color="text.secondary">
          All 3D Printing solutions under one platform
        </Typography>
      </Box>

      {/* HERO IMAGE BLOCK */}
      <Box
        sx={{
          background: "#cfd6c2",
          height: 300,
          borderRadius: 6,
          mb: 6
        }}
      />

      {/* ORDERS */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Latest Orders
      </Typography>

      <Grid container spacing={3}>
        {orders.map((o, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6">{o.title}</Typography>
                <Typography color="text.secondary">
                  {o.review}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* VENDORS */}
      <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
        Latest Vendors
      </Typography>

      <Grid container spacing={3}>
        {vendors.map((v, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6">{v.name}</Typography>
                <Typography color="text.secondary">
                  {v.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default Home;