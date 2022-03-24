const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const otpSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: Number,
    required: true,
  },
  expire_at: {
    type: Date,
    default: Date.now(),
    expires: 180,
  },
});

module.exports = mongoose.model("Otpdump", otpSchema);
