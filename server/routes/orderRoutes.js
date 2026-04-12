const express = require("express");
const Order = require("../models/Order");
const sendMail = require("../utils/mailer");
const createOrder = require("../utils/payment");

const router = express.Router();

router.post("/place", async (req, res) => {
  const { email, phone, price } = req.body;

  if (!email || !phone) {
    return res.status(400).json({ error: "Invalid data" });
  }

  const order = await Order.create({ email, phone, price });

  await sendMail(
    email,
    "Order Confirmation",
    `Your order is placed. Amount: ₹${price}`
  );

  const payment = await createOrder(price);

  res.json({ order, payment });
});

module.exports = router;