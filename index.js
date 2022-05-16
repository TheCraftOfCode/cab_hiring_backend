const express = require("express");
const connectDB = require("./configs/connect");
const app = express();

app.use(express.json());

const login = require("./routes/rider/login");
const register = require("./routes/rider/register");
const sendEmail = require("./routes/rider/sendEmail");
const editProfile = require("./routes/rider/editProfile");
const booking_cab = require("./routes/rider/booking_cab");
const forgotPassword = require("./routes/rider/forgotPassword");
const setPassword = require("./routes/rider/setPassword");
const verifyOtp = require("./routes/rider/verifyOtp");
const complaintCustomerServie = require("./routes/rider/complaints_customer_service");

const driverKnowledge = require("./routes/driver/know.js");

//connecting to database
connectDB();

app.use("/api/rider/login", login);
app.use("/api/rider/register", register);
app.use("/api/rider/sendEmail", sendEmail);
app.use("/api/rider/editProfile", editProfile);
app.use("/api/rider/bookingCab", booking_cab);
app.use("/api/rider/forgotPassword", forgotPassword);
app.use("/api/rider/setPassword", setPassword);
app.use("/api/rider/verifyOtp", verifyOtp);
app.use("/api/rider/complaintsCustomerRaise", complaintCustomerServie);

app.use("/api/driver/know", driverKnowledge);

app.get("/", (request, response) => {
  response.send("Hello..! Welcome to cab hiring api..!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
