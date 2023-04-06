const express = require("express");
const app = express();

app.get("/", (req, res) => {
  greeting = "<h1>Hello From Node on Fly!</h1>";
  res.send(greeting);
});

module.exports = app