const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const vendorRoutes = require("./routes/vendor");
const searchRoutes = require("./routes/search");
const salesRoutes = require("./routes/sales");
const orderRoutes = require("./routes/order");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ ROUTES
app.use("/vendor", vendorRoutes);
app.use("/search", searchRoutes);
app.use("/sales", salesRoutes);
app.use("/order", orderRoutes);

// ✅ ROOT CHECK (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Zvertex API Running");
});

// ✅ 404 HANDLER (IMPORTANT)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

mongoose.connect(process.env.MONGO_URI);

app.listen(5000, () => console.log("Server running on 5000"));