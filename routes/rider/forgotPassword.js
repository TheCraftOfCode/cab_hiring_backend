const User = require("../../models/users");
const generateAnSixDigitRandomOtp = require("../../Helper functions/generateRandom");
const sendEmail = require("../../Helper functions/sendEmail");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Otpdump = require("../../models/otpdump");

router.post("/", async (request, response) => {
  //sendEmail
  const { email } = request.body;

  //check if the senderEmail is valid with the Database
  const retrieve = await User.findOne({ email: email });

  if (!retrieve) {
    response.status(400).send("user with this emailId not found");
  }

  const generateOtp = generateAnSixDigitRandomOtp();

  const otp = new Otpdump({
    email: email,
    otp: generateOtp,
  });

  const otpStatus = await otp.save();

  const sendStatus = sendEmail(
    email,
    `your otp for password reset is ${generateOtp}`
  );
  if (sendStatus) {
    response.status(200).send(`Email successfully sent to ${email}`);
  } else {
    response.status(400).send("Something went wrong..! Please Try Again");
  }
});

module.exports = router;
