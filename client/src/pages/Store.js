import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  TextField,
  Button
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Store = () => {
  const { id } = useParams();

  const [vendor, setVendor] = useState(null);
  const [orders, setOrders] = useState([]);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const base = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

    const v = await axios.get(`${base}/vendor/${id}`);
    const o = await axios.get(`${base}/order/vendor/${id}`);

    setVendor(v.data);
    setOrders(o.data);
  };

  const addProduct = async () => {
    const base = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

    await axios.post(`${base}/vendor/product/${id}`, product);

    setProduct({ name: "", price: "", image: "" });

    fetchData();
  };

  if (!vendor) return <div>Loading...</div>;

  return (
    <Container maxWidth="lg">

      {/* STORE HEADER */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h3">{vendor.name}</Typography>
        <Typography>{vendor.address}</Typography>
        <Typography color="primary">{vendor.code}</Typography>
      </Box>

      {/* IMAGE */}
      <Box sx={{ mt: 3 }}>
        <img src={vendor.photo} style={{ width: "100%", maxHeight: 400 }} />
      </Box>

      {/* ADD PRODUCT */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Add Product</Typography>

        <TextField label="Name" fullWidth sx={{ mb: 1 }}
          value={product.name}
          onChange={(e)=>setProduct({...product,name:e.target.value})}
        />

        <TextField label="Price" fullWidth sx={{ mb: 1 }}
          value={product.price}
          onChange={(e)=>setProduct({...product,price:e.target.value})}
        />

        <TextField label="Image URL" fullWidth sx={{ mb: 1 }}
          value={product.image}
          onChange={(e)=>setProduct({...product,image:e.target.value})}
        />

        <Button variant="contained" onClick={addProduct}>
          Add Product
        </Button>
      </Box>

      {/* PRODUCTS */}
      <Typography variant="h4" sx={{ mt: 5 }}>Products</Typography>
      <Grid container spacing={3}>
        {vendor.products.map((p,i)=>(
          <Grid item xs={12} md={3} key={i}>
            <Card>
              <CardMedia component="img" height="140" image={p.image} />
              <CardContent>
                <Typography>{p.name}</Typography>
                <Typography>₹{p.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ORDERS */}
      <Typography variant="h4" sx={{ mt: 5 }}>Latest Orders</Typography>
      <Grid container spacing={3}>
        {orders.map((o,i)=>(
          <Grid item xs={12} md={3} key={i}>
            <Card>
              <CardContent>
                <Typography>₹{o.price}</Typography>
                <Typography>{o.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default Store;