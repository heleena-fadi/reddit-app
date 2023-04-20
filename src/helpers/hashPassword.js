const bcrypt = require("bcrypt");

const hashPassword = (password) => bcrypt.hash(password, 10);

const comparePasswords = (password, hashedPassword) =>
  bcrypt.compare(password, hashedPassword);

module.exports = {
  hashPassword,
  comparePasswords,
};