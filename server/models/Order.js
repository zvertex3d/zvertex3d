const mongoose = require('mongoose');
module.exports = mongoose.model('Order', new mongoose.Schema({
  userId: String,
  fileUrl: String,
  material: String,
  status: { type: String, default: 'Pending' }
}));