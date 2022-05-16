const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const users = require("../../models/users");

router.put("/:username", async (request, response) => {
  const UpdatedProfile = await users.findByIdAndUpdate(
    request.params.username,
    request.body
  );
  if (!UpdatedProfile)
    return response.status(400).send("Sorry..! .Event Not found...!");

  response.status(200).send(UpdatedProfile);
});

module.exports = router;
