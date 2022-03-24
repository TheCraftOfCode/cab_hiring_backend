const express = require("express");
const router = express.Router();
const bookingModel = require(".../models/user_cab_booking");

router.post("/", async (request, response) => {
  const {
    pickup_location,
    drop_location,
    pickup_time,
    promocode,
    cab_type,
    cab_number,
  } = request.body;

  const bookingData = new bookingModel({
    pickup_location,
    drop_location,
    pickup_time,
    promocode,
    cab_type,
    cab_number,
  });

  const bookingStatus = await bookingData.save();

  bookingStatus.then(() => {
    response.status(201).send("Booking Successful");
  });

  bookingStatus.catch((err) => {
    response
      .status(400)
      .send(`Something went wrong.. Please Try again \n ${err}`);
  });
});

module.exports = router;
