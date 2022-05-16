const express = require("express");
const router = express.Router();
const bookingModel = require("../../models/user_cab_booking");

const {
  generateARandomTwoDigit,
  getRandomArbitrary,
} = require("../../Helper functions/generateRandom");

function suffix() {
  const alphabets = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabets[getRandomArbitrary(1, 36)];
}

function GenerateACabNumber() {
  var finalNumberPlate;
  const prefix = "TN";
  const twoDigit = generateARandomTwoDigit();
  finalNumberPlate = prefix + twoDigit.toString();
  for (var i = 0; i < 4; i++) {
    finalNumberPlate = finalNumberPlate + suffix();
  }
  return finalNumberPlate;
}

router.post("/", async (request, response) => {
  const { pickup_location, drop_location, pickup_time, promocode, cab_type } =
    request.body;

  //allocate a cab No random number
  var cab_number = GenerateACabNumber();

  const bookingData = new bookingModel({
    pickup_location,
    drop_location,
    pickup_time,
    promocode,
    cab_type,
    cab_number,
  });

  const bookingStatus = await bookingData.save();

  if (bookingStatus) {
    response.status(201).send(bookingStatus);
  } else {
    response
      .status(400)
      .send(`Something went wrong.. Please Try again \n ${err}`);
  }
});

module.exports = router;
