const CustomError = require("../../utils/customError");
const { getUserByEmailQuery } = require("../../database/quries");

const {
  validateSignup,
  validateSignin,
  generateAccessToken,
  hashPassword,
  comparePasswords,
} = require("../../helpers");
// 123456asdA$
const postSignIn = (req, res, next) => {
  let user = null;
  validateSignin(req.body)
    .then(() => {
      return getUserByEmailQuery(req.body.email);
    })
    .then((data) => {
      console.log({ data });
      user = data.rows[0];
      return comparePasswords(req.body.password, user.password);
    })
    .then((result) => {
      console.log("1111");
      if (result === true) {
        console.log("2222");

        const token = generateAccessToken({
          username: user.username,
          id: user.id,
        });
        res.status(200).cookie("token", token).json(user);
      } else {
        console.log("3333");

        throw next(new CustomizedError(401, "Wrong password or email"));
      }
      // res.json("succeeeeads");
    })
    .catch((err) => {
      console.log({ err });

      if (err.details) {
        res.json(new CustomError(400, "password not strong enough!"));
      }
    });
  // res.sendFile(
  //   join(__dirname, "..", "..", "..", "public", "html", "signin.html")
  // );
};

module.exports = postSignIn;