const { addPostQuery } = require("../../database/quries");

const createPost = (req, res, next) => {
  const data = req.body;
  console.log({ data });
  addPostQuery({
    title: data.title,
    content: data.content,
    image: data.image,
    user_id: data.userId,
  })
    .then((res) => {
      console.log("aaaa");
    })
    .catch((err) => {
      console.log({ err }, "bbbbb");
    });
  res.json("success");
};

module.exports = createPost;