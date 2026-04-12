import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from "@mui/material";
import { useEffect, useState } from "react";

const Marketplace = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("vendors") || "[]");
    setVendors(data);
  }, []);

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
                <Typography variant="body2">{v.address}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Marketplace;