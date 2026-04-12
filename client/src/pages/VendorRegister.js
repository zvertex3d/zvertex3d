import { Container, TextField, Button, Box, Typography } from "@mui/material";

const VendorRegister = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>

        <Typography variant="h3" gutterBottom>
          Vendor Registration
        </Typography>

        <TextField fullWidth label="Store Name" sx={{ mb: 2 }} />
        <TextField fullWidth label="Printer Types" sx={{ mb: 2 }} />
        <TextField fullWidth label="Number of Printers" sx={{ mb: 2 }} />
        <TextField fullWidth label="Address" sx={{ mb: 2 }} />
        <TextField fullWidth label="Email" sx={{ mb: 2 }} />
        <TextField fullWidth label="Phone" sx={{ mb: 3 }} />

        <Button
          variant="contained"
          fullWidth
          sx={{
            py: 1.5,
            borderRadius: "20px"
          }}
        >
          Submit
        </Button>

      </Box>
    </Container>
  );
};

export default VendorRegister;