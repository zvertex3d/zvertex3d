import { Box, Typography, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 10,
        p: 5,
        background: "#eef1e8"
      }}
    >
      <Grid container spacing={4}>

        {/* ABOUT */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6">About</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Manufacturing & Innovation Advanced 3D Printing | Product Development | Automation Driven by technology. Built to scale.
          </Typography>
        </Grid>

        {/* CONTACT */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Contact</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            zvertex3d@gmail.com <br />
            +91 8639684322
          </Typography>
        </Grid>

        {/* MAP */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Location</Typography>

          <iframe
            title="map"
            src="https://www.google.com/maps?q=Hayathnagar,Hyderabad&output=embed"
            width="100%"
            height="200"
            style={{ border: 0, marginTop: "10px" }}
          />
        </Grid>

      </Grid>
    </Box>
  );
};

export default Footer;