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
  getPosts,
} = require("../controllers");

router.get("/signin", getSignIn);
router.get("/signup", getSignUp);
router.get("/profile", getProfile);
router.post("/signup", postSignup);
router.post("/signin", postSignIn);
router.get("/posts/:userId", verifyAccessToken, getPosts);
router.get("/posts", getPosts);
router.post("/create-post", verifyAccessToken, createPost);
router.get("/logout", getLogout);

module.exports = router;
