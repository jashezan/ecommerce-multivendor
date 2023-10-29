const express = require("express");
const cookieParser = require("cookie-parser");

const userController = require("./controllers/user");

const ErrorHandler = require("./utils/ErrorHandler");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"))

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "server/config/.env" });
}

app.use("/api/v1/user", userController);

// its for error handling

app.use(ErrorHandler);

module.exports = app;
