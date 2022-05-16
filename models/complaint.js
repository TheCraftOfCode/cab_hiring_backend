const mongoose = require("mongoose");

const complaint = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  complaint: {
    type: String,
  },
});

const compl = mongoose.model("complaints", complaint);

module.exports = compl;
