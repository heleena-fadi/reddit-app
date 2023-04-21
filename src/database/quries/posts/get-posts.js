const connection = require("../../config/connection");

const getPosts = () =>
  connection.query({
    text: "select * from posts",
  });

module.exports = getPosts;