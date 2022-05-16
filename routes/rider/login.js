const Express = require("express");
const bcrypt = require("bcrypt");
const router = Express.Router();
// const User = require(".../models/users");
const User = require("../../models/users");

router.post("/", async (request, response) => {
  const { username, password } = request.body;
  //checking the database for the user.
  const CheckUser = await User.findOne({ username: username });

  //if user record is not available then responds as a bad request
  if (!CheckUser)
    return response.status(400).send("Invalid Username or Password");

  //check if entered password and user password is same
  const PasswordCheck = await bcrypt.compare(password, CheckUser.password);
  //wrong password case
  if (!PasswordCheck)
    return response.status(400).send("Invalid Username or Password");

  //if both entered username and password are correct then generating a jwt token

  const token = CheckUser.GenerateJwtToken();
  response.header("user-auth-token", token).status(200).send(token);
});

module.exports = router;
