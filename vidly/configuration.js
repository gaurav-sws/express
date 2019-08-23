require("dotenv").config();

const envVar = process.env;

const configuration = Object.freeze({
  port: envVar.PORT,
  secret_key: envVar.SECRET_KEY
});
module.exports = configuration;
