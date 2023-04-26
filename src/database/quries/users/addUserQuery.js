
const connection = require("../../config/connection");

const addUserQuery = ({ username, password, email, gender, user_image }) =>
  connection.query({
    text: "INSERT INTO users(username, password, email, gender, user_image) values($1, $2, $3, $4, $5)",
    values: [username, password, email, gender, user_image],
  });

module.exports = addUserQuery;