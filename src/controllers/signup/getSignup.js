const { join } = require("path");

const getSignup = (req, res, next) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "public", "html", "signup.html")
  );
};

module.exports = getSignup;