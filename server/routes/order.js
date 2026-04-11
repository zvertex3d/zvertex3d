const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/place", upload.single("file"), async (req, res) => {
  const order = new Order({
    ...req.body,
    file: req.file?.path
  });

  await order.save();
  res.json({ message: "Order placed" });
});