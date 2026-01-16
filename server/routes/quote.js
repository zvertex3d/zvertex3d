const router = require("express").Router();
const multer = require("multer");
const Quote = require("../models/Quote");

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  let price = Math.floor(Math.random() * 300) + 400; // ₹400–₹700

  if (req.body.material === "Resin") price += 150;
  if (req.body.size === "Medium") price += 200;
  if (req.body.size === "Large") price += 400;
  if (req.body.time === "Fast") price += 150;
  if (req.body.time === "Express") price += 300;

  await new Quote({ ...req.body, price }).save();
  res.json({ price });
});

module.exports = router;
