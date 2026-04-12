import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const services = [
  {
    title: "Industrial Manufacturing",
    desc: "High precision 3D printing for industrial scale production.",
    img: "/images/service1.jpg"
  },
  {
    title: "Medical Models",
    desc: "Accurate anatomical models for surgical planning.",
    img: "/images/service2.jpg"
  },
  {
    title: "Educational Kits",
    desc: "Hands-on STEM kits.",
    img: "/images/service3.jpg"
  },
  {
    title: "Prototyping",
    desc: "Rapid prototyping.",
    img: "/images/service4.jpg"
  },
  {
    title: "Custom Parts",
    desc: "On-demand manufacturing.",
    img: "/images/service5.jpg"
  }
];

const Services = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" sx={{ mt: 6, mb: 4 }}>
        Services
      </Typography>

      <Grid container spacing={3}>
        {services.map((s, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card>
              <img
                src={s.img}
                onError={(e) => (e.target.src = "/images/placeholder.jpg")}
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">{s.title}</Typography>
                <Typography>{s.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;