const router = require("express").Router();
const multer = require("multer");
const Order = require("../models/Order");
const sendMail = require("../utils/mailer");

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  const order = await new Order({
    ...req.body,
    file: req.file.filename
  }).save();

  await sendMail({
    to: req.body.email,
    subject: "Order Placed Successfully - Zvertex3D",
    text: `Your order has been placed successfully.\nTotal Price: ₹${req.body.price}`
  });

  await sendMail({
    to: "zvertex3d@gmail.com",
    subject: "New Order Received",
    text: JSON.stringify(req.body, null, 2),
    attachments: [
      {
        filename: req.file.originalname,
        path: req.file.path
      }
    ]
  });

  res.json({ message: "Order placed successfully" });
});

module.exports = router;
