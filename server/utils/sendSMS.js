module.exports = async function sendSMS(phone, message) {
  if (!phone) return;
  console.log(`SMS to ${phone}: ${message}`);
};