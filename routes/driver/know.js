const express = require('express');
const router = express.Router();

// /driver/know
router.get('/',(req,res)=>{
  res.redirect('https://driver.ryda.cf/start')
});

module.exports = router;
