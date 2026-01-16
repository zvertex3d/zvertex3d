const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zvertex3d@gmail.com",
    pass: process.env.MAIL_PASS
  }
});

module.exports = async ({ to, subject, text, attachments }) => {
  await transporter.sendMail({
    from: "Zvertex3D <zvertex3d@gmail.com>",
    to,
    subject,
    text,
    attachments
  });
};
