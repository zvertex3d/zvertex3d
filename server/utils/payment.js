const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET
});

const createOrder = async (amount) => {
  return await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR"
  });
};

module.exports = createOrder;