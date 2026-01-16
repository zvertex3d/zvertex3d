const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  file: String,
  material: String,
  color: String,
  size: String,
  time: String,
  price: Number,
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Quote", QuoteSchema);
