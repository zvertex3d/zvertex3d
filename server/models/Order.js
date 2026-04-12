const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  email: String,
  phone: String,
  price: Number,

  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor"
  },

  status: {
    type: String,
    default: "Placed"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", OrderSchema);