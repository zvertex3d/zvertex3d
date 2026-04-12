import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia
} from "@mui/material";
import { useEffect, useState } from "react";
import { getVendors } from "../services/api";
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  const [vendors, setVendors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getVendors().then(res => setVendors(res.data));
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" sx={{ mt: 8, mb: 4 }}>
        Marketplace
      </Typography>

      <Grid container spacing={3}>
        {vendors.map((v) => (
          <Grid item xs={12} md={3} key={v._id}>
            <Card
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`/store/${v._id}`)}
            >
              <CardMedia
                component="img"
                height="160"
                image={v.photo}
              />

              <CardContent>
                <Typography variant="h6">{v.name}</Typography>
                <Typography>{v.address}</Typography>
                <Typography color="primary">{v.code}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Marketplace;