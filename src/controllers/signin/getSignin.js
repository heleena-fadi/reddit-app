const { join } = require("path");

const getSignIn = (req, res, next) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "public", "html", "signin.html")
  );
};

module.exports = getSignIn;