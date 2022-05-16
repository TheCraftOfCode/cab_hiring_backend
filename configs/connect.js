const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

function connect() {
  const dbconnection = mongoose.connect(
    `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@seproject.xn40h.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  dbconnection
    .then(() => {
      console.log("Connected to database");
      return "0";
    })
    .catch((err) => {
      console.log(`Refused ${err}`);
      return "1";
    });
}

module.exports = connect;
