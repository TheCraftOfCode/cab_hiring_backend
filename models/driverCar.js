const mongoose = require("mongoose");

const driveCarSchema = mongoose.Schema({
  registrationNumber: {
    type: String,
    required: true,
  },
  Model: {
    type: String,
    required: true,
  },
  Color: {
    type: String,
    required: true,
  },
  CarType: {
    type: String,
    required: true,
  },
});

const driverModel = mongoose.model("driverCar", driveCarSchema);

module.exports = driverModel;
