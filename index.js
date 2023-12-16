const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const invoices = require("./routes/invoices");
const config = require("./config")

mongoose
  .connect(config.mongo.url)
  .then(() => console.debug("DBConnection success!"))
  .catch((err) => {
    console.log(err);
  });

app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(express.json());

app.use(cors());

app.use("/api/invoices/", invoices);

app.listen(config.server.port, () => {
  console.debug("App listening on https://localhost:5000");
});
