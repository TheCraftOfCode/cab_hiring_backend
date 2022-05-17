const mongoose = require("mongoose");

const carPoolingSchema = mongoose.Schema({
  pickup_location: {
    type: String,
    required: true,
  },
  drop_location: {
    type: String,
    required: true,
  },
  pickup_time: {
    type: String,
    required: true,
  },
  rideWith: {
    type: String,
    required: true,
  },
  friends: {
    type: [String],
    default: null,
  },
  cab_type: {
    type: String,
    required: true,
  },
  cab_number: {
    default: null,
    type: String,
  },
});

const carPoolingModel = mongoose.model("carPooling", carPoolingSchema);

module.exports = carPoolingModel;
