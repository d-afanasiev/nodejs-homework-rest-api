const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");
const { User } = require("../db/authModel");

const logoutMiddlewares = async (req, res, next) => {
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

      const validUser = await User.find({ _id: user._id });
      if (validUser.length === 0) {
        next(new Unauthorized("Not authorized"));
      }

      await User.findOneAndUpdate({ _id: user._id }, { token: null });
      req.headers = "";
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = logoutMiddlewares;
