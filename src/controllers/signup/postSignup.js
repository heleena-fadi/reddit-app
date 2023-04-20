const CustomError = require("../../utils/customError");

const { addUserQuery, getUserByEmailQuery } = require("../../database/quries");

const {
  validateSignup,
  validateSignin,
  generateAccessToken,
  hashPassword,
  comparePasswords,
} = require("../../helpers");

const postSignup = (req, res, next) => {
  const data = req.body;

  validateSignup(req.body)
    .then(() => {
      return getUserByEmailQuery(req.body.email);
    })
    .then((result) => {
      if (result.rows.length !== 0) {
        throw new CustomError(400, "Bad request: user already exists");
      }
    })
    .then(() => {
      return hashPassword(req.body.password);
    })
    .then((hashedPassword) => {
      return addUserQuery({ ...req.body, password: hashedPassword });
    })
    .then(() => {
      res.status(201).json({ username: req.body.username, msg: "inserted!" });
    })
    .catch((err) => console.log({ err }));
};

module.exports = postSignup;