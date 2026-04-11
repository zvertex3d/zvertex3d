const router = require("express").Router();
const Order = require("../models/Order");

router.get("/latest", async (req, res) => {
  const sales = await Order.find().sort({ createdAt: -1 }).limit(10);
  res.json(sales);
});

module.exports = router;