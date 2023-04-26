const addUserQuery = require("./users/addUserQuery");
const getUserByEmailQuery = require("./users/getUserByEmailQuery");
const addPostQuery = require("./posts/create-post");
const addCommentQuery = require("./comments/create-comment");
const getPostsQuery = require("./posts/get-posts");
const getPostsByUserId = require("./posts/get-posts-by-userId");

module.exports = {
  addUserQuery,
  getUserByEmailQuery,
  addPostQuery,
  getPostsQuery,
  getPostsByUserId,
  addCommentQuery,
};