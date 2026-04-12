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
  { title: "Drone Frame", price: 1200, img: "/images/drone.jpg" },
  { title: "Medical Model", price: 900, img: "/images/medical.jpg" },
  { title: "Gear", price: 700, img: "/images/gear.jpg" },
  { title: "Custom Part", price: 500, img: "/images/custom.jpg" }
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

  const calculatePrice = () => {
    let base = 200;

    base += Number(form.size || 0) * 40;

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

      {/* HERO */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h1">3D Print everything.</Typography>

        <Button variant="contained" component="label" sx={{ mt: 2 }}>
          Upload File (3D Supported)
          <input hidden type="file" onChange={handleUpload} />
        </Button>
      </Box>

      {/* PREVIEW + PRICE */}
      {file && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h5">Preview (360°)</Typography>

          <ModelViewer fileUrl={file} />

          <Box sx={{ mt: 3 }}>
            <TextField
              label="Size"
              type="number"
              value={form.size}
              onChange={(e) =>
                setForm({ ...form, size: e.target.value })
              }
              sx={{ m: 1 }}
            />

            <TextField
              select
              label="Material"
              value={form.material}
              onChange={(e) =>
                setForm({ ...form, material: e.target.value })
              }
              sx={{ m: 1 }}
            >
              <MenuItem value="PLA">PLA</MenuItem>
              <MenuItem value="PETG">PETG</MenuItem>
              <MenuItem value="ABS">ABS</MenuItem>
              <MenuItem value="Carbon Fiber">Carbon Fiber</MenuItem>
            </TextField>

            <TextField
              select
              label="Delivery Days"
              value={form.delivery}
              onChange={(e) =>
                setForm({ ...form, delivery: e.target.value })
              }
              sx={{ m: 1 }}
            >
              <MenuItem value={2}>2 Days</MenuItem>
              <MenuItem value={4}>4 Days</MenuItem>
              <MenuItem value={6}>6 Days</MenuItem>
            </TextField>
          </Box>

          <Typography variant="h5" sx={{ mt: 2 }}>
            ₹{price}
          </Typography>
        </Box>
      )}

      {/* LATEST VENDORS */}
      <Typography variant="h4" sx={{ mt: 6 }}>
        Latest Vendors
      </Typography>

      <Grid container spacing={2}>
        {vendors.map((v) => (
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
              <CardContent>{v.name}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* SHOWCASE */}
      <Typography variant="h4" sx={{ mt: 6 }}>
        Our Works
      </Typography>

      <Grid container spacing={2}>
        {showcase.map((s, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Card>
              <img
                src={s.img}
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