const { getPostsQuery, getPostsByUserId } = require("../../database/quries");

const getPosts = (req, res, next) => {
  const { userId } = req.params;

  if (userId) {
    getPostsByUserId({ userId })
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        res.status(500).json("server error", { err });
      });
  } else {
    getPostsQuery()
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        res.status(500).json("server error", { err });
      });
  }
};

module.exports = getPosts;