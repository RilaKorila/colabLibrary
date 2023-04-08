const express = require("express");
const morgan = require("morgan");

const app = express();

// 1) MIDDLEWARES: stands between req and res
// if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
// }

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// ROUTING
app.get("/", (req, res) => {
  greeting = "<h1>Hello From Node on Fly!</h1>";
  res.sendFile("./public/index.html")
});

module.exports = app;
