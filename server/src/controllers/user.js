const express = require("express");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer");
const User = require("../models/user");
const ErrorHandler = require("../utils/ErrorHandler");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return next(new ErrorHandler(400, "User already exists"));
  }

  const filename = req.file.filename;
  const fileUrl = path.join(__dirname, `../../public/uploads/${filename}`);

  const user = User.create({
    name,
    email,
    password,
    avatar: fileUrl,
  });

  if (!user) {
    return next(new ErrorHandler(400, "User not created"));
  }

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user,
  });
});

module.exports = router;