const router = require("express").Router();
const Vendor = require("../models/Vendor");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

// Register Vendor
router.post("/register", upload.array("photos"), async (req, res) => {
  const code = "ZV-" + Date.now();

  const vendor = new Vendor({
    ...req.body,
    zvertexCode: code,
    photos: req.files.map(f => f.path)
  });

  await vendor.save();
  res.json({ message: "Registered", code });
});

// Nearby Vendors
router.get("/nearby", async (req, res) => {
  const { lat, lng } = req.query;

  const vendors = await Vendor.find(); // simple for now
  res.json(vendors);
});

module.exports = router;