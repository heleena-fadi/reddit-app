const { addPostQuery } = require("../../database/quries");

const createPost = (req, res, next) => {
  const data = req.body;
  addPostQuery({
    title: data.title,
    content: data.content,
    image: data.image,
    user_id: data.userId,
  })
    .catch((err) => {
      console.log({ err });
    });
  res.json("success");
};

module.exports = createPost;