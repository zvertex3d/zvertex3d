const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
  name: String,
  printers: String,
  address: String,
  phone: String,
  email: String,
  photo: String
});

module.exports = mongoose.model("Vendor", VendorSchema);