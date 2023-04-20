const connection = require("../../config/connection");

const getPostsByUserId = ({ userId }) =>
  connection.query({
    text: "select * from posts where user_id = $1",
    values: [userId],
  });

module.exports = getPostsByUserId;