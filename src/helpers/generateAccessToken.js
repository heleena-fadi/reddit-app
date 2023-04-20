require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateAccessToken = (body) =>
  jwt.sign(
    {
      id: body.id,
      username: body.username,
    },
    process.env.SECRET_KEY
  );

module.exports = generateAccessToken;