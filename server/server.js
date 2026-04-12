require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const vendorRoutes = require("./routes/vendorRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// ✅ CONNECT DB
connectDB();

// ✅ MIDDLEWARE
app.use(cors());
app.use(express.json());

// ✅ TEST ROUTE (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ ROUTES (CRITICAL)
app.use("/api/vendor", vendorRoutes);
app.use("/api/order", orderRoutes);

// ✅ PORT FIX FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});