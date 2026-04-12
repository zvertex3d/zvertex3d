import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const vendors = [
  { name: "Hyderabad Prints" },
  { name: "3D Forge India" },
  { name: "Proto Labs" },
  { name: "NextGen Prints" }
];

const Marketplace = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" sx={{ mt: 8, mb: 4 }}>
        Marketplace
      </Typography>

      <Grid container spacing={3}>
        {vendors.map((v, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Card>
              <CardContent>
                <Typography variant="h6">{v.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Marketplace;