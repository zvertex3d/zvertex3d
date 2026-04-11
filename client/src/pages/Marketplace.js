import { Container, Grid, Card, CardContent } from "@mui/material";

const vendors = [
  { name: "Vendor 1", sales: "120 Orders" },
  { name: "Vendor 2", sales: "80 Orders" }
];

const Marketplace = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <h2>Marketplace</h2>
      <Grid container spacing={2}>
        {vendors.map((v, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card>
              <CardContent>
                <h3>{v.name}</h3>
                <p>{v.sales}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Marketplace;