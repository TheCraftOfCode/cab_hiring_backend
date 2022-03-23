const express = require("express");
const router = express.Router();
const complaintModel = require(".../models/complaint");

router.post("/", async (request, response) => {
  const { email, complaint } = request.body;

  const complaintData = new complaintModel({
    email: email,
    complaint: complaint,
  });
  const complaintAck = await complaintData.save();

  complaintAck
    .then(() => {
      response
        .status(201)
        .send(
          "Thanks for the complaint..! Your issue has been raised.Our team will contact you soon"
        );
    })
    .catch((err) => {
      response.status(400).send(`Please try again \n ${err}`);
    });
});

module.exports = router;
