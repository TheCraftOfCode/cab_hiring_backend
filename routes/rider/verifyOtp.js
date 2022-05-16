const express = require("express");
const otpdump = require(".../models/otpdump");
const router = express.Router();

router.post("/", async (request, response) => {
  const { email, otp } = request.body;

  const retrieve = await otpdump.findOne({ email: email, otp: otp });

  if (!retrieve) {
    response.status(400).send("Invalid Otp (or) Otp Expired");
  }
  //check if the otp is valid if email is found
  var OtpStatus = checkifOtpIsValid(otp);

  if (OtpStatus) {
    //redirect to set new password page
    response.redirect();
    response.status(200).send("Otp is valid..! Render reset password page");
  } else {
    response.status(400).send("Otp is invalid");
  }
});

async function checkifOtpIsValid(email, otp) {
  const ActualOtp = await otpdump.findOne({ email: email });
  if (ActualOtp.otp === otp) {
    return true;
  } else {
    return false;
  }
}

module.exports = router;
