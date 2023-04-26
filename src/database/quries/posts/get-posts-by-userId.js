const connection = require("../../config/connection");

const getPostsByUserId = ({ userId }) =>
  connection.query({
    text: "SELECT posts.content AS post_content, posts.id AS post_id, posts.image AS post_image, posts.title AS post_title, posts.id AS post_id, posts.timestamp AS post_created_at, post_users.username AS post_username, post_users.user_image AS post_user_image, post_users.id AS post_user_id, comments.content AS comment_content, comments.id AS comment_id, comments.timestamp AS comment_created_at, comment_users.username AS comment_username, comment_users.user_image AS comment_user_image, comment_users.id AS comment_user_id FROM posts JOIN users AS post_users ON posts.user_id = post_users.id LEFT JOIN comments ON comments.post_id = posts.id LEFT JOIN users AS comment_users ON comments.user_id = comment_users.id WHERE posts.user_id = $1",
    values: [userId],
  });

module.exports = getPostsByUserId;