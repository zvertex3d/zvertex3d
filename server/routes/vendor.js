const router = require("express").Router();
const Vendor = require("../models/Vendor");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

// REGISTER
router.post("/register", upload.array("photos"), async (req, res) => {
  try {
    const code = "ZV-" + Date.now();

    const vendor = new Vendor({
      ...req.body,
      zvertexCode: code,
      photos: req.files?.map(f => f.path)
    });

    await vendor.save();

    res.json({ message: "Registered", code });
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// STORE PAGE
router.get("/store/:code", async (req, res) => {
  const store = await Vendor.findOne({ zvertexCode: req.params.code });

  if (!store) return res.status(404).json({ error: "Store not found" });

  res.json(store);
});

// NEARBY
router.get("/nearby", async (req, res) => {
  const vendors = await Vendor.find();
  res.json(vendors);
});

module.exports = router;