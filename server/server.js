const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const quoteRoutes = require("./routes/quote");
const orderRoutes = require("./routes/order");

const app = express();

/* ✅ ABSOLUTE CORS FIX (Render + Netlify safe) */
app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

/* Health check */
app.get("/api", (req, res) => {
  res.json({ status: "API running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/quote", quoteRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
