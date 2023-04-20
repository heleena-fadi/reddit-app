const connection = require("../../config/connection");

const addPostQuery = ({ title, content, image, user_id }) =>
  connection.query({
    text: "INSERT INTO posts (title, content, image, user_id) values($1, $2, $3, $4)",
    values: [title, content, image, user_id],
  });

module.exports = addPostQuery;