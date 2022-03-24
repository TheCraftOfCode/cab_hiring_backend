const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
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
  promocode: {
    default: null,
    type: String,
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

const bookingModel = mongoose.model("bookings", bookingSchema);

module.exports = bookingModel;
