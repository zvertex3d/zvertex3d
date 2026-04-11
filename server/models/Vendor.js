const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  storeName: String,
  phone: String,
  email: String,
  printers: String,
  location: String,
  lat: Number,
  lng: Number,
  photos: [String],
  zvertexCode: String
});

module.exports = mongoose.model("Vendor", vendorSchema);