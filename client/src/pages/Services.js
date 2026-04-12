import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const services = [
  {
    title: "Industrial Manufacturing",
    desc: "High precision parts for industrial production with durable materials."
  },
  {
    title: "Medical Models",
    desc: "Accurate anatomical models for surgical planning and education."
  },
  {
    title: "Educational Kits",
    desc: "STEM-based kits for schools and colleges to learn 3D printing."
  },
  {
    title: "Prototyping",
    desc: "Rapid prototyping for startups and product developers."
  },
  {
    title: "Custom Parts",
    desc: "On-demand manufacturing of custom designed components."
  }
];

const Services = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" sx={{ mt: 8, mb: 4 }}>
        Services
      </Typography>

      <Grid container spacing={3}>
        {services.map((s, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card>
              <CardContent>
                <Typography variant="h6">{s.title}</Typography>
                <Typography color="text.secondary">
                  {s.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;