const mongoose = require("mongoose");

module.exports = mongoose.model(
  "User",
  new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    phone: { type: String, required: true },
    password: String,
    role: { type: String, default: "customer" }
  })
);
