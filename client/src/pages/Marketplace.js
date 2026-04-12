import { Container, Typography, Box } from "@mui/material";

const Marketplace = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h3" gutterBottom>
          Marketplace
        </Typography>

        <Typography color="text.secondary">
          All vendors will be displayed here.
        </Typography>
      </Box>
    </Container>
  );
};

export default Marketplace;