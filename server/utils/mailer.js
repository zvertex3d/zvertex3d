const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.verify((error) => {
  if (error) {
    console.error("Mail server error:", error);
  } else {
    console.log("Mail server ready");
  }
});

const sendMail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: `"Zvertex3D" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text
    });
    console.log("Mail sent to:", to);
  } catch (err) {
    console.error("Mail error:", err);
  }
};

const sendAdminMail = async (subject, text) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject,
      text
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { sendMail, sendAdminMail };