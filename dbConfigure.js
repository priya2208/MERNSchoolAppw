const mongoose = require("mongoose");

const MONGOURL = "mongodb://localhost:27017";

const connectToDB = () => {
  mongoose.connect(MONGOURL);
  console.log("DB Connected Successfully");
};

module.exports = connectToDB;
