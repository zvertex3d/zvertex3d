const router = require("express").Router();
const Order = require("../models/Order");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post("/place", upload.single("file"), async (req, res) => {
  try {
    const order = new Order({
      ...req.body,
      file: req.file?.path
    });

    await order.save();
    res.json({ message: "Order placed" });
  } catch (err) {
    res.status(500).json({ error: "Order failed" });
  }
});

module.exports = router;