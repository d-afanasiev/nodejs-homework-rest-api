const multer = require("multer");
const path = require("path");

const FILE_DIR = path.resolve("./tmp");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, FILE_DIR);
  },
  filename: (req, file, cb) => {
    const extension = file.originalname;
    cb(null, extension);
  },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
