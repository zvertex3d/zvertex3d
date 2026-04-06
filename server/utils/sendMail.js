const nodemailer = require("nodemailer");

module.exports = async function sendMail(to, order) {
  if (!to) return;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Zvertex3D Order Confirmation",
    html: `
      <h2>Order Confirmed</h2>
      <p>Material: ${order.material}</p>
      <p>Size: ${order.size}</p>
      <p>Price: ₹${order.price}</p>
    `
  });
};