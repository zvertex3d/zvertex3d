import { Container, Typography, Card, CardContent } from "@mui/material";

const Dashboard = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Vendor Dashboard</Typography>

      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Typography>Total Orders: 12</Typography>
          <Typography>Pending: 5</Typography>
          <Typography>Completed: 7</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Dashboard;