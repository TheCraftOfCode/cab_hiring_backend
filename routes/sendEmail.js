const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

router.post("/", (request, response) => {
  const { senderEmail } = request.body;

  //check if the senderEmail is valid with the Database
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: "gkrishnak2001@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      //response to the user that mail is successfully sent
      response.status(200).send("Email sent successfully");
    }
  });
});

module.exports = router;
