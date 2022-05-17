const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

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
  const {
    pickup_location,
    drop_location,
    pickup_time,
    friends,
    rideWith,
    seat_prefs,
    cab_type,
  } = request.body;

  //allocate a cab No random number
  var cab_number = GenerateACabNumber();
  const carPoolingDocument = new carPoolingModel({
    pickup_location,
    drop_location,
    pickup_time,
    friends,
    rideWith,
    seat_prefs,
    cab_type,
    cab_number,
  });

  var carpoolingStatus = await carPoolingDocument.save();
  if (carpoolingStatus) {
    response.status(200).send(carPoolingDocument);
  } else {
    response.status(400).send("Sorry an error has occured");
  }
});
module.exports = router;
