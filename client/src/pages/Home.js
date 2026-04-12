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

const showcase = [
  { title: "Drone Frame", price: 1200, desc: "Lightweight carbon build", img: "https://via.placeholder.com/200" },
  { title: "Medical Model", price: 900, desc: "High precision anatomy", img: "https://via.placeholder.com/200" },
  { title: "Prototype Gear", price: 700, desc: "Durable ABS gear", img: "https://via.placeholder.com/200" },
  { title: "Custom Part", price: 500, desc: "PLA rapid print", img: "https://via.placeholder.com/200" }
];

const Home = () => {
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState(0);

  const [form, setForm] = useState({
    size: "",
    material: "",
    delivery: "",
    color: ""
  });

  const handleUpload = (e) => {
    const fileObj = e.target.files[0];
    if (!fileObj) return;
    setFile(URL.createObjectURL(fileObj));
  };

  const calculatePrice = () => {
    let base = 200;

    // size
    base += Number(form.size || 0) * 40;

    // material hierarchy
    if (form.material === "PLA") base += 100;
    if (form.material === "PETG") base += 200;
    if (form.material === "ABS") base += 300;
    if (form.material === "Carbon Fiber") base += 500;

    // delivery (less time = more cost)
    if (form.delivery === 2) base += 400;
    if (form.delivery === 4) base += 200;
    if (form.delivery === 6) base += 100;

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
      <Box sx={{ textAlign: "center", mt: 8, mb: 6 }}>
        <Typography variant="h1">3D Print everything.</Typography>

        <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
          All 3D Printing solutions under one platform
        </Typography>

        <Box sx={{ maxWidth: 500, margin: "auto" }}>

          <Button variant="contained" component="label" fullWidth sx={{ mb: 2 }}>
            Upload Photo to Get Price Quote
            <input hidden type="file" onChange={handleUpload} />
          </Button>

          <TextField fullWidth select label="Size (inches)" sx={{ mb: 2 }}
            onChange={(e)=>setForm({...form,size:e.target.value})}>
            {[2,4,6,8,10].map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)}
          </TextField>

          <TextField fullWidth select label="Material" sx={{ mb: 2 }}
            onChange={(e)=>setForm({...form,material:e.target.value})}>
            {["PLA","PETG","ABS","Carbon Fiber"].map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)}
          </TextField>

          <TextField fullWidth select label="Delivery Time" sx={{ mb: 2 }}
            onChange={(e)=>setForm({...form,delivery:e.target.value})}>
            {[2,4,6].map(v => <MenuItem key={v} value={v}>{v} Days</MenuItem>)}
          </TextField>

          <TextField fullWidth select label="Color" sx={{ mb: 2 }}
            onChange={(e)=>setForm({...form,color:e.target.value})}>
            {["Red","Blue","Black","White","Custom"].map(v => <MenuItem key={v}>{v}</MenuItem>)}
          </TextField>

        </Box>
      </Box>

      {/* PREVIEW */}
      {file && (
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <ModelViewer fileUrl={file} />
          <Typography variant="h5" sx={{ mt: 2 }}>
            Approx Price: ₹{price}
          </Typography>
          <Button variant="contained" href="/order" sx={{ mt: 2 }}>
            Proceed to Order
          </Button>
        </Box>
      )}

      {/* SHOWCASE GRID */}
      <Typography variant="h4" sx={{ mb: 3 }}>Our Works</Typography>

      <Grid container spacing={3}>
        {showcase.map((s, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Card>
              <img src={s.img} alt="" style={{ width: "100%" }} />
              <CardContent>
                <Typography variant="h6">{s.title}</Typography>
                <Typography>{s.desc}</Typography>
                <Typography color="primary">₹{s.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default Home;