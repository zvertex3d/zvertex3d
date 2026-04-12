import { useEffect, useState } from "react";
import { getVendors } from "../services/api";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const Marketplace = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    getVendors()
      .then(res => {
        if (Array.isArray(res.data)) {
          setVendors(res.data);
        } else {
          setVendors([]);
        }
      })
      .catch(() => setVendors([]));
  }, []);

  return (
    <Grid container spacing={2} sx={{ p: 3 }}>
      {vendors.map(v => (
        <Grid item xs={12} md={3} key={v._id}>
          <Card>
            <img
              src={v.photo || "/images/vendor.jpg"}
              onError={(e) =>
                (e.target.src = "/images/placeholder.jpg")
              }
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover"
              }}
            />
            <CardContent>
              <Typography variant="h6">{v.name}</Typography>
              <Typography variant="body2">
                {v.address}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Marketplace;