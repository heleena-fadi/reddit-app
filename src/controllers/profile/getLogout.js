const getLogout = (req, res, next) => {
    try {
      res.clearCookie("token");
      res.status(301).json("logout successfully");
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = getLogout;