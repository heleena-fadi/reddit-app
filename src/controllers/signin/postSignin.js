const CustomError = require("../../utils/customError");
const { getUserByEmailQuery } = require("../../database/quries");

const {
  validateSignin,
  generateAccessToken,
  comparePasswords,
} = require("../../helpers");
const postSignIn = (req, res, next) => {
  let user = null;
  validateSignin(req.body)
    .then(() => {
      return getUserByEmailQuery(req.body.email);
    })
    .then((data) => {
      user = data.rows[0];
      return comparePasswords(req.body.password, user.password);
    })
    .then((result) => {
      if (result === true) {
        const token = generateAccessToken({
          username: user.username,
          id: user.id,
        });

        res.status(200).cookie("token", token).json(user);
      } else {
        throw next(new CustomError(401, "Wrong password or email"));
      }
    })
    .catch((err) => {
      console.log({ err });

      if (err?.details) {
        res.json(new CustomError(400, "password not strong enough!"));
      }else {

      }
    });
};

module.exports = postSignIn;
