const express = require("express");
const connectDB = require("./configs/connect");
const session = require("express-session");
const app = express();

app.use(express.json());

const login = require("./routes/login");
const register = require("./routes/register");
const sendEmail = require("./routes/sendEmail");

//connecting to database
connectDB();

app.use("/api/login", login);
app.use("/api/register", register);
app.use("/api/sendEmail", sendEmail);

app.get("/", (request, response) => {
  response.send("Hello..! Welcome to cab hiring api..!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
