const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Order",
  new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    email: String,
    material: String,
    color: String,
    size: String,
    time: String,
    file: String,
    price: Number,
    status: { type: String, default: "Pending" },
    createdAt: { type: Date, default: Date.now }
  })
);
