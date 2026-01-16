const router = require("express").Router();
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), (req, res) => {
  res.json({ price: 499 });
});

module.exports = router;
