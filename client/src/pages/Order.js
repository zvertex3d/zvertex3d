import { Container, TextField, Button, Box, Typography } from "@mui/material";

const Order = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>

        <Typography variant="h3" gutterBottom>
          Place Order
        </Typography>

        <TextField fullWidth label="Email" sx={{ mb: 2 }} required />
        <TextField fullWidth label="Phone" sx={{ mb: 3 }} required />

        <Button variant="contained" fullWidth>
          Confirm Order
        </Button>

      </Box>
    </Container>
  );
};

export default Order;