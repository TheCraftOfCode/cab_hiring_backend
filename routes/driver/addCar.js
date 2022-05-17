const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const DriverModel = require("../../models/driverCar");
const authAdmin = require("../../middleware/authAdmin");
const auth = require("../../middleware/auth");

router.post("/", [auth, authAdmin], async (request, response) => {
  const { registrationNumber, Model, Color, CarType } = request.body;

  const driverCar = new DriverModel({
    registrationNumber,
    Model,
    Color,
    CarType,
  });

  const driverCarStatus = await driverCar.save();

  if (driverCarStatus) {
    response
      .status(200)
      .send("Driver Car Added Successfully..! Welcome aboard");
  } else {
    response.status(400).send("Something went wrong..! Please Try Again");
  }
});

module.exports = router;
