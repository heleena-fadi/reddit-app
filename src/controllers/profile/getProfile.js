const { join } = require("path");

const getProfile = (req, res, next) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "public", "html", "profile.html")
  );
};

module.exports = getProfile;