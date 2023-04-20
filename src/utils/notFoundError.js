const Error_404 = (req, res, next) => {
    res.status(404).json("Not Found Error");
  };
  
  module.exports = Error_404;