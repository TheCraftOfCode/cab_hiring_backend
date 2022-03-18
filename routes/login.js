const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportlocal = require("passport-local");

router.post("/", async (request, response) => {
  const { username, password } = request.body;
});

module.exports = router;
