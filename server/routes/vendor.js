router.get("/store/:code", async (req, res) => {
  const store = await Vendor.findOne({ zvertexCode: req.params.code });
  res.json(store);
});