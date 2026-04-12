const express = require("express");
const Order = require("../models/Order");
const { sendMail } = require("../utils/mailer");

const router = express.Router();

// ✅ PRICE CALCULATION
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

// ✅ PLACE ORDER (NO PAYMENT GATEWAY)
router.post("/place", async (req, res) => {
  try {
    const { email, phone, size, material, delivery, vendorId } = req.body;

    const price = calculateAIPrice(size, material, delivery);

    const order = await Order.create({
      email,
      phone,
      price,
      vendorId,
      status: "Order Placed"
    });

    // ✅ SEND EMAIL CONFIRMATION
    await sendMail(
      email,
      "Zvertex3D Order Confirmation",
      `Your order has been placed successfully.

Details:
Amount: ₹${price}
Status: Order Placed

We will contact you shortly.`
    );

    res.json({
      success: true,
      message: "Order placed successfully",
      order
    });

  } catch (err) {
    console.error("ORDER ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Order failed"
    });
  }
});

// ✅ GET ORDERS FOR VENDOR
router.get("/vendor/:vendorId", async (req, res) => {
  try {
    const orders = await Order.find({
      vendorId: req.params.vendorId
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json([]);
  }
});

module.exports = router;