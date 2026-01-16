const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  const { name, email, phone, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  await new User({
    name,
    email,
    phone,
    password: hashed,
    role
  }).save();

  res.json({ message: "Registered successfully" });
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: "User not found" });

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(400).json({ error: "Invalid password" });

  const token = jwt.sign(
    { id: user._id, role: user.role, email: user.email },
    process.env.JWT_SECRET
  );

  res.json({ token, role: user.role });
});

module.exports = router;
