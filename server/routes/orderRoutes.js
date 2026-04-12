const express = require("express");
const Order = require("../models/Order");
const { sendMail } = require("../utils/mailer");
const createOrder = require("../utils/payment");

const router = express.Router();

/* PRICE ENGINE */
const calculateAIPrice = (size, material, delivery) => {
  let base = 200;

  base += Number(size || 0) * 40;

  if (material === "PLA") base += 100;
  if (material === "PETG") base += 200;
  if (material === "ABS") base += 300;
  if (material === "Carbon Fiber") base += 500;

  if (delivery == 2) base += 400;
  if (delivery == 4) base += 200;
  if (delivery == 6) base += 100;

  return base;
};

/* PLACE ORDER */
router.post("/place", async (req, res) => {
  try {
    const { email, phone, size, material, delivery, vendorId } = req.body;

    const price = calculateAIPrice(size, material, delivery);

    const order = await Order.create({
      email,
      phone,
      price,
      vendorId
    });

    await sendMail(
      email,
      "Order Confirmation",
      `Your order is confirmed.\nAmount: ₹${price}`
    );

    const payment = await createOrder(price);

    res.json({ order, payment });

  } catch (err) {
    res.status(500).json({ error: "Order failed" });
  }
});

/* GET ORDERS FOR STORE */
router.get("/vendor/:vendorId", async (req, res) => {
  try {
    const orders = await Order.find({ vendorId: req.params.vendorId })
      .sort({ createdAt: -1 });

    res.json(orders);

  } catch (err) {
    res.status(500).json({ error: "Fetch failed" });
  }
});

module.exports = router;