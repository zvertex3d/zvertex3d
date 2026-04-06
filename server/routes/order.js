const router = require('express').Router();
router.post('/create', async (req, res) => {
  res.json({ message: 'Order created' });
});
module.exports = router;