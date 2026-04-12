const express = require("express");
const Vendor = require("../models/Vendor");
const { sendAdminMail } = require("../utils/mailer");

const router = express.Router();

/* REGISTER */
router.post("/register", async (req, res) => {
  const count = await Vendor.countDocuments();

  const vendor = await Vendor.create({
    ...req.body,
    code: `ZVERTEX-${String(count + 1).padStart(5, "0")}`,
    approved: false,
    products: []
  });

  await sendAdminMail(
    "New Vendor Request",
    `${vendor.name} - ${vendor.email}`
  );

  res.json({ message: "Pending approval" });
});

/* APPROVE */
router.post("/approve/:id", async (req, res) => {
  const vendor = await Vendor.findByIdAndUpdate(
    req.params.id,
    { approved: true },
    { new: true }
  );
  res.json(vendor);
});

/* GET APPROVED */
router.get("/", async (req, res) => {
  const vendors = await Vendor.find({ approved: true });
  res.json(vendors);
});

/* GET STORE */
router.get("/:id", async (req, res) => {
  const vendor = await Vendor.findById(req.params.id);
  res.json(vendor);
});

/* ADD PRODUCT */
router.post("/product/:id", async (req, res) => {
  const { name, price, image } = req.body;

  const vendor = await Vendor.findById(req.params.id);

  vendor.products.push({ name, price, image });

  await vendor.save();

  res.json(vendor);
});

module.exports = router;