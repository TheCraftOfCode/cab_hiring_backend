const express = require("express");
const connectDB = require("./configs/connect");
const session = require("express-session");
const app = express();

app.use(express.json());

const login = require("./routes/rider/login");
const register = require("./routes/rider/register");
const sendEmail = require("./routes/rider/sendEmail");

const driverKnowledge = require('./routes/driver/know.js');

//connecting to database
connectDB();

app.use("/api/rider/login", login);
app.use("/api/rider/register", register);
app.use("/api/rider/sendEmail", sendEmail);

app.use('/api/driver/know',driverKnowledge);

app.get("/", (request, response) => {
  response.send("Hello..! Welcome to cab hiring api..!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
