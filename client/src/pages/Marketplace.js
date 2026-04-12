import { useEffect, useState } from "react";
import { getVendors } from "../services/api";
import { Grid, Card, CardContent } from "@mui/material";

const Marketplace = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    getVendors().then(res => {
      if (Array.isArray(res.data)) {
        setVendors(res.data);
      } else {
        setVendors([]);
      }
    });
  }, []);

  return (
    <Grid container spacing={2} sx={{ p: 3 }}>
      {vendors.map(v => (
        <Grid item xs={12} md={3} key={v._id}>
          <Card>
            <img
              src={v.photo || "/images/vendor.jpg"}
              style={{ width: "100%", height: 200, objectFit: "cover" }}
            />
            <CardContent>{v.name}</CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Marketplace;