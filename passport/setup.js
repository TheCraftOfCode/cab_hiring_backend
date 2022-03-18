var express = require("express");
var passport = require("passport");
var LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const User = require("../models/users");
const bcrypt = require("bcrypt");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

//local startegy
passport.use(
  new LocalStrategy({ usernameField: "username" }, async function (
    username,
    password,
    done
  ) {
    const user = await User.findOne({ username: username });
    if (!user) {
      return done(null, false, { message: "User Not found. Please Register" });
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return done(null, user);
      } else {
        return done(null, false, {
          message: "Incorrect username or Password.",
        });
      }
    }
  })
);

module.exports = passport;
