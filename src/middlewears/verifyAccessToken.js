const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyAccessToken = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ error: "unauthenticated" });

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({ error: "unauthenticated" });
    } else {
      req.user = decoded;
      next();
    }
  });
};

module.exports = verifyAccessToken;