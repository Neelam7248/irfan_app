const express = require('express');
const router = express.Router();

router.post('/api/SignUp', (req, res) => {
  // your logic here
  res.json({ message: "Signup successful!" });
});

module.exports = router;
