const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../../models/users");

router.post("/", async (request, response) => {
  const { name, email, emergency_contact, age, username, password, phone } =
    request.body;

  const CheckIfUserIsAlreadyRegistered = await User.findOne({
    username: username,
  });

  if (CheckIfUserIsAlreadyRegistered)
    return response
      .status(400)
      .send("User Already Exists. Please Try to Login..!");

  const user = new User({
    name,
    email,
    emergency_contact,
    age,
    username,
    password,
    phone,
  });

  const registrationStatus = await user.save();
  if (registrationStatus) {
    response
      .status(201)
      .send("Registration Successfull :  " + registrationStatus);
  } else {
    response.status(400).send(`Registration failed try again`);
  }
});

module.exports = router;
