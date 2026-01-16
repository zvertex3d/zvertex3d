const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const quoteRoutes = require("./routes/quote");
const orderRoutes = require("./routes/order");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.use("/api/auth", authRoutes);
app.use("/api/quote", quoteRoutes);
app.use("/api/orders", orderRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
