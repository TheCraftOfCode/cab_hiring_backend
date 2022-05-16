const mongoose = require("mongoose");

var complaint = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  complaint: {
    type: String,
  },
});

complaint = mongoose.model("complaint-collection", complaint);

module.exports = complaint;
