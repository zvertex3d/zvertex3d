import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
  sx={{
    mt: 10,
    p: 5,
    background: "#eef1e8",
    textAlign: "center"
  }}
>
      
      <Typography variant="h6">About</Typography>
      <Typography variant="body2">
        Zvertex provides complete 3D printing solutions across industries.
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>Contact</Typography>
      <Typography variant="body2">
        Email: zvertex3d@gmail.com | Phone: +91-XXXXXXXXXX
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>Location</Typography>

      <iframe
        title="map"
        src="https://www.google.com/maps?q=Hayathnagar,Hyderabad&output=embed"
        width="100%"
        height="200"
        style={{ border: 0, marginTop: "10px" }}
      />

    </Box>
  );
};

export default Footer;