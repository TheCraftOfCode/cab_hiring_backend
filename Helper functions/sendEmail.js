const nodemailer = require("nodemailer");

export default function sendEmail(email, message, subject) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: senderEmail,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return false;
    } else {
      //response to the user that mail is successfully sent
      return true;
    }
  });
}
