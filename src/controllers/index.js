const getSignIn = require("./signin/getSignin");
const postSignIn = require("./signin/postSignin");
const getSignUp = require("./signup/getSignup");
const postSignup = require("./signup/postSignup");
const getProfile = require("./profile/getProfile");
const getLogout = require("./profile/getLogout");
const createPost = require("./posts/createPosts");

module.exports = {
  getSignIn,
  getSignUp,
  getProfile,
  postSignup,
  postSignIn,
  getLogout,
  createPost,
};