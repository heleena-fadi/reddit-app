const connection = require("../../config/connection");

const addCommentQuery = ({ content, user_id, post_id }) =>
  connection.query({
    text: "INSERT INTO comments (content, user_id, post_id) values($1, $2, $3)",
    values: [content, user_id, post_id],
  });

module.exports = addCommentQuery;