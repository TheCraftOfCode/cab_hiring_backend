const express = require("express");
const app = express();
const connectDB = require("./configs/connect");
app.use(express.json());

const login = require("./routes/login");
const register = require("./routes/register");

//connecting to database
connectDB();

app.use("/api/login", login);
app.use("api/register", register);

app.get("/", (request, response) => {
  response.send("Hello..! Welcome to cab hiring api..!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
