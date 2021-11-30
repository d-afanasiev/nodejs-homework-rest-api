const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");
const { User } = require("../db/authModel");

const authMiddlewares = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      next(
        new Unauthorized(
          "Please, provide a token in request authorization header"
        )
      );
    } else {
      const [tokenType, token] = req.headers["authorization"].split(" ");

      if (!token) {
        next(new Unauthorized("Please, provide a token"));
      }

      const user = jwt.decode(token, process.env.JWT_SECRET);

      const validUser = await User.find({ _id: user._id, token });
      if (validUser.length === 0) {
        next(new Unauthorized("Not authorized"));
      }

      req.user = user;
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = authMiddlewares;
