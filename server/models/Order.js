const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  email: String,
  phone: String,
  price: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);