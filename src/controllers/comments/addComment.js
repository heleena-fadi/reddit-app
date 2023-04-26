const { addCommentQuery } = require("../../database/quries");

const addComment = (req, res, next) => {
  const data = req.body;
  console.log({ data });
  addCommentQuery({
    content: data.content,
    user_id: data.userId,
    post_id: data.postId,
  })
    .then((res) => {
      console.log("aaaa");
    })
    .catch((err) => {
      console.log({ err });
    });
  res.json("success");
};

module.exports = addComment;