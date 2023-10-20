const express = require("express");
const path = require("path")
const router = express.Router();
const {upload} = require("../multer");

router.post('/create-user', upload.single("file"), async(req, res)=>{
  const {name, email, password} = req.body;
  
})
