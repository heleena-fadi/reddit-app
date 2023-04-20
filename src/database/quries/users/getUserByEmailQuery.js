const connection = require("../../config/connection");

const getUserByEmailQuery = (email) => {
  return connection.query({
    text: `SELECT * FROM USERS where email = $1`,
    values: [email],
  });
};

// module.exports = { getUserByEmailQuery };

module.exports = getUserByEmailQuery;