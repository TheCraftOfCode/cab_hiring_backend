const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const users = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
        minlength: 8,
    },
    phone: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
});

users.methods.GenerateJwtToken = function () {
    const token = jwt.sign(
      { _id: this._id, username: this.username, isAdmin: this.isAdmin },
      process.env.JWT_SECRET_KEY
    );
    return token;
  };

const Users = mongoose.model("users", users);


module.exports = Users;