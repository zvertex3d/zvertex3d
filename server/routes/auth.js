const router = require("express").Router();
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  await User.create(req.body);
  res.json({ message: "User created" });
});

router.post("/login", async (req, res) => {
  res.json({ message: "Login success" });
});

module.exports = router;
