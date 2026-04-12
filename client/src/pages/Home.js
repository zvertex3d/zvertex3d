import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent
} from "@mui/material";
import { useState, useEffect } from "react";
import ModelViewer from "../components/ModelViewer";
import { getVendors } from "../services/api";

const showcase = [
  { title: "Drone Frame", price: 1200, img: "/images/drone.jpg" },
  { title: "Medical Model", price: 900, img: "/images/medical.jpg" },
  { title: "Gear", price: 700, img: "/images/gear.jpg" },
  { title: "Custom Part", price: 500, img: "/images/custom.jpg" }
];

const Home = () => {
  const [file, setFile] = useState(null);
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    getVendors().then(res => {
      if (Array.isArray(res.data)) {
        setVendors(res.data.slice(0, 4));
      }
    });
  }, []);

  const handleUpload = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(URL.createObjectURL(f));
  };

  return (
    <Container maxWidth="lg">

      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h1">3D Print everything.</Typography>

        <Button variant="contained" component="label" sx={{ mt: 2 }}>
          Upload File (3D Supported)
          <input hidden type="file" onChange={handleUpload} />
        </Button>
      </Box>

      {file && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h5">Preview (360°)</Typography>
          <ModelViewer fileUrl={file} />
        </Box>
      )}

      {/* VENDORS */}
      <Typography variant="h4" sx={{ mt: 6 }}>Latest Vendors</Typography>
      <Grid container spacing={2}>
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

      {/* SHOWCASE */}
      <Typography variant="h4" sx={{ mt: 6 }}>Our Works</Typography>
      <Grid container spacing={2}>
        {showcase.map((s, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Card>
              <img
                src={s.img}
                onError={(e) => (e.target.src = "/images/placeholder.jpg")}
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <CardContent>
                {s.title} - ₹{s.price}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default Home;