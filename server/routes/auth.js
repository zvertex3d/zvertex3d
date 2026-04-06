const router = require('express').Router();
router.post('/signup', async (req, res) => {
  res.json({ message: 'Signup success' });
});
module.exports = router;