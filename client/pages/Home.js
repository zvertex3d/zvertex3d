import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  MenuItem,
  Grid,
  Card,
  CardContent
} from "@mui/material";
import { useState, useEffect } from "react";
import ModelViewer from "../components/ModelViewer";
import { getVendors } from "../services/api";

const showcase = [
  { title: "Drone Frame", price: 1200, img: "https://via.placeholder.com/200" },
  { title: "Medical Model", price: 900, img: "https://via.placeholder.com/200" },
  { title: "Gear", price: 700, img: "https://via.placeholder.com/200" },
  { title: "Custom Part", price: 500, img: "https://via.placeholder.com/200" }
];

const Home = () => {
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState(0);
  const [vendors, setVendors] = useState([]);

  const [form, setForm] = useState({
    size: "",
    material: "",
    delivery: ""
  });

  useEffect(() => {
    getVendors().then(res => setVendors(res.data.slice(0, 4)));
  }, []);

  const handleUpload = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(URL.createObjectURL(f));
  };

  const calculatePrice = () => {
    let base = 200;
    base += form.size * 40;

    if (form.material === "PLA") base += 100;
    if (form.material === "PETG") base += 200;
    if (form.material === "ABS") base += 300;
    if (form.material === "Carbon Fiber") base += 500;

    if (form.delivery == 2) base += 400;
    if (form.delivery == 4) base += 200;
    if (form.delivery == 6) base += 100;

    setPrice(base);
  };

  useEffect(() => {
    if (form.size && form.material && form.delivery) {
      calculatePrice();
    }
  }, [form]);

  return (
    <Container maxWidth="lg">

      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h1">3D Print everything.</Typography>

        <Button variant="contained" component="label">
          Upload Photo to Get Price Quote
          <input hidden type="file" onChange={handleUpload} />
        </Button>
      </Box>

      {file && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <ModelViewer fileUrl={file} />
          <Typography>₹{price}</Typography>
        </Box>
      )}

      {/* LATEST VENDORS */}
      <Typography variant="h4" sx={{ mt: 6 }}>Latest Vendors</Typography>
      <Grid container spacing={2}>
        {vendors.map(v => (
          <Grid item xs={12} md={3} key={v._id}>
            <Card>
              <img src={v.photo} style={{ width: "100%" }} />
              <CardContent>{v.name}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* SHOWCASE */}
      <Typography variant="h4" sx={{ mt: 6 }}>Our Works</Typography>
      <Grid container spacing={2}>
        {showcase.map((s,i)=>(
          <Grid item xs={12} md={3} key={i}>
            <Card>
              <img src={s.img} style={{ width:"100%" }} />
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