const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const user = require("../../models/users");

router.put("/", async (request, response) => {
  const { email, Newpassword } = request.body;

  const retrieve = await user.findOne({ email: email });

  if (!retrieve) {
    response.status(400).send("Operation is not valid");
  } else {
    user.findOneAndUpdate(
      { email: email },
      { password: Newpassword },
      null,
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Original Doc : ", docs);
          response
            .status(200)
            .send("Password change successfull..Please Log in");
        }
      }
    );
  }
});

module.exports = router;
