import { Container, TextField, Button } from "@mui/material";

const VendorRegister = () => {

  const handleSubmit = () => {
    alert("Zvertex3D team will reach out to you via mail/phone.");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <h2>Vendor Registration</h2>

      <TextField fullWidth label="Store Name" sx={{ mb: 2 }} />
      <TextField fullWidth label="Printer Types" sx={{ mb: 2 }} />
      <TextField fullWidth label="Number of Printers" sx={{ mb: 2 }} />
      <TextField fullWidth label="Address" sx={{ mb: 2 }} />
      <TextField fullWidth label="Email" sx={{ mb: 2 }} />
      <TextField fullWidth label="Phone" sx={{ mb: 2 }} />

      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default VendorRegister;