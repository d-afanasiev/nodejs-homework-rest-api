const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const uploadMiddleware = (req, res, next) => {
  const FILE_DIR = path.resolve("./tmp");

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, FILE_DIR);
    },
    filename: (req, file, cb) => {
      const [, extension] = file.originalname.split(".");
      cb(null, `${uuidv4()}.${extension}`);
    },
  });

  const upload = multer({ storage });
  req.upload = upload;

  next();
};

module.exports = uploadMiddleware;
