const express = require("express");
const Vendor = require("../models/Vendor");

const router = express.Router();

router.post("/register", async (req, res) => {
  const vendor = await Vendor.create(req.body);
  res.json(vendor);
});

router.get("/", async (req, res) => {
  const vendors = await Vendor.find();
  res.json(vendors);
});

module.exports = router;