const router = require("express").Router();

const verifyAccessToken = require("../middlewears/verifyAccessToken");

const {
  getSignIn,
  getSignUp,
  getProfile,
  getLogout,
  postSignup,
  postSignIn,
  createPost,
} = require("../controllers");

router.get("/signin", getSignIn);
router.get("/signup", getSignUp);
router.get("/profile", getProfile);
router.post("/signup", postSignup);
router.post("/signin", postSignIn);
router.post("/create-post", verifyAccessToken, createPost);
router.get("/logout", getLogout);

module.exports = router;