const router = require("express").Router();
const multer = require("multer");
const Quote = require("../models/Quote");
const auth = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

router.post("/", auth, upload.single("file"), async (req, res) => {
  const { material, color, size, time } = req.body;

  // Pricing logic
  let price = 100;
  if (material === "PLA") price += 50;
  if (material === "Resin") price += 100;

  if (color === "Red") price += 20;
  if (color === "Blue") price += 20;
  if (color === "Green") price += 20;

  if (size === "Medium") price *= 1.5;
  if (size === "Large") price *= 2;

  if (time === "Fast") price *= 1.5;
  if (time === "Express") price *= 2;

  const quote = new Quote({
    userId: req.user.id,
    file: req.file.filename,
    material,
    color,
    size,
    time,
    price
  });

  await quote.save();

  res.json({ file: req.file.filename, price, status: "Quote Generated" });
});

module.exports = router;
