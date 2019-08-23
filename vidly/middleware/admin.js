const jwt = require("jsonwebtoken");
const { secret_key } = require("../configuration");
module.exports = function(req, res, next) {
  if (!req.user.isAdmin) return res.status(403).send("Access Denied");
  next();
};
