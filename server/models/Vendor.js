const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
  name: String,
  printers: String,
  address: String,
  phone: String,
  email: String,
  photo: String,
  approved: { type: Boolean, default: false },
  code: String,
  products: [{ name: String, price: Number, image: String }]
});

module.exports = mongoose.model("Vendor", VendorSchema);