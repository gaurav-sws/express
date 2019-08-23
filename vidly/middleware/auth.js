const jwt = require("jsonwebtoken");
const { secret_key } = require("../configuration");
module.exports = function (req, res, next) {
  const token = req.header("authorization");
  if (!token) return res.status(401).send("Access denied. No token provided");
  try {
    const payload = jwt.verify(token, secret_key);
    req.user = payload;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token");
  }
};
