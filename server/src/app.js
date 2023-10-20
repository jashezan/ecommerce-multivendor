const express = require("express");
const cookieParser = require("cookie-parser");

const ErrorHandler = require("./utils/ErrorHandler");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "server/config/.env" });
}

// its for error handling

app.use(ErrorHandler);

module.exports = app;
