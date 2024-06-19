const express = require("express");

const app = express(); // this is necessary to create an instance

app.get("/", (req, res) => {
  res.send("hello server ");
});
app.listen(8000, () => {
  console.log("server is listening at port 8000");
});

//calling Database
const connectToDB = require("./dbConfigure");
connectToDB();
