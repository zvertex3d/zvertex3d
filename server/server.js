const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const vendorRoutes = require("./routes/vendor");
const searchRoutes = require("./routes/search");
const salesRoutes = require("./routes/sales");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/vendor", vendorRoutes);
app.use("/search", searchRoutes);
app.use("/sales", salesRoutes);

mongoose.connect(process.env.MONGO_URI);

app.listen(5000, () => console.log("Server running"));