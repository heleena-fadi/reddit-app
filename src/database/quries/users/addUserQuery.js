
const connection = require("../../config/connection");

const addUserQuery = ({ username, password, email }) =>
  connection.query({
    text: "INSERT INTO users(username, password, email) values($1, $2, $3)",
    values: [username, password, email],
  });

module.exports = addUserQuery;