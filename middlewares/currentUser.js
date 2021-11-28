const jwt = require("jsonwebtoken");
const { User } = require("../db/authModel");

const currentUserMiddlewares = async (req, res, next) => {
  try {
    const [tokenType, token] = req.headers["authorization"].split(" ");

    if (tokenType !== "Bearer") {
      next(
        new Error("Please, provide a token in request authorization header")
      );
    }

    if (!token) {
      const error = new Error("Please, provide a token");
      error.status = 401;
      next(error);
    }

    const user = jwt.decode(token, process.env.JWT_SECRET);

    const validUser = await User.find({ _id: user._id });
    if (validUser.length === 0) {
      const error = new Error("Not authorized");
      error.status = 401;
      next(error);
    }

    req.user = validUser;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = currentUserMiddlewares;
