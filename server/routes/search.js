const router = require("express").Router();
const Vendor = require("../models/Vendor");
const Order = require("../models/Order");

router.get("/", async (req, res) => {
  const q = req.query.q;

  const vendors = await Vendor.find({
    storeName: { $regex: q, $options: "i" }
  });

  const orders = await Order.find({
    title: { $regex: q, $options: "i" }
  });

  res.json([...vendors, ...orders]);
});

module.exports = router;