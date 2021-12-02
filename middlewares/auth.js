const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");
const { User } = require("../db/authModel");

const authMiddlewares = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [tokenType, token] = authorization.split(" ");
  try {
    if (tokenType !== "Bearer" || !token) {
      throw new Unauthorized("Not authorized");
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);

    const validUser = await User.findById({ _id: user._id });

    if (!validUser || !validUser.token) {
      throw new Unauthorized("Not authorized");
    }

    req.user = validUser;
    next();
  } catch (err) {
    if (err.message === "invalid signature") {
      err.status = 401;
    }
    next(err);
  }
};

module.exports = authMiddlewares;
