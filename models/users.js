const mongoose = require("mongoose");

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
    }
});

const Users = mongoose.model("users", users);

module.exports = Users;