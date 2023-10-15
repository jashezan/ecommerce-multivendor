const ErrorHandler = require("../utils/ErrorHandler");

const handleError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resource not found with this ID. Invalid: ${err.path}`;
    err = new ErrorHandler(400, message);
  }

  // duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(400, message);
  }

  // wrong jwt error
  if (err.name === "JsonWebTokenError") {
    const message = "JSON Web Token is invalid. Try Again!!!";
    err = new ErrorHandler(400, message);
  }

  // jwt expired
  if (err.name === "TokenExpiredError") {
    const message = "JSON Web Token is expired. Try Again!!!";
    err = new ErrorHandler(400, message);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

module.exports = handleError;
