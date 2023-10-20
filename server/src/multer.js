const multer = require("multer")

const storage = multer.diskStorage({
  destination: (req, res, cb)=>{
    cb(null, 'uploads/');
  },
  fileName: (req, file, cb)=>{
    const uniqueSuffix = Date.now() + "-" + Math.round.apply(Math.random * 1e9);
    const fileName = file.originalname.split(".")[0];
    cb(null, fileName + "-" + uniqueSuffix + ".png")
  }
})

exports.upload = multer({storage: storage});