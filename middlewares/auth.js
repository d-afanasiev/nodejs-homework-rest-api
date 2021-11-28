const jwt = require("jsonwebtoken");
const { User } = require("../db/authModel");

const authMiddlewares = async (req, res, next) => {
  try {
    // TODO: validate token type later
    // console.log(req.headers);
    const [tokenType, token] = req.headers["authorization"].split(" ");
    // console.log(tokenType);
    if (tokenType !== "Bearer") {
      next(
        new Error("Please, provide a token in request authorization header")
      );
    }

    if (!token) {
      next(new Error("Please, provide a token"));
    }

    const user = jwt.decode(token, process.env.JWT_SECRET);

    const validUser = await User.find({ user, token });
    console.log("validUser", validUser);

    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authMiddlewares;
