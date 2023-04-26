const { getPostsQuery, getPostsByUserId } = require("../../database/quries");

const getPosts = (req, res, next) => {
  const { userId } = req.params;

  if (userId) {
    getPostsByUserId({ userId })
      .then((data) => {
        const result = [];
        data.rows.forEach(post => {
          const result_post_id = result.findIndex(item => item.id === post.post_id)
          if(result_post_id !== -1){
            result[result_post_id] = {
              ...result[result_post_id],
              comments: [
                ...result[result_post_id].comments,
                {
                  id: post.comment_id,
                  content: post.comment_content,
                  created_at: post.comment_created_at,
                  user: {
                    id: post.comment_user_id,
                    image: post.comment_user_image,
                    username: post.comment_username 
                  }
                }
              ]
            }
          } else {
            result.push({
              id: post.post_id,
              title: post.post_title,
              content: post.post_content,
              created_at: post.post_created_at,
              image: post.post_image,
              user: {
                id: post.post_user_id,
                image: post.post_user_image,
                username: post.post_username,
              },
              comments: post.comment_id ? [
                {
                  id: post.comment_id,
                  content: post.comment_content,
                  created_at: post.comment_created_at,
                  user: {
                    id: post.comment_user_id,
                    image: post.comment_user_image,
                    username: post.comment_username 
                  }
                }
              ] : []
            })
          }
        })
        res.json(result.reverse());
      })
      .catch((err) => {
        res.status(500).json("server error", { err });
      });
  } else {
    getPostsQuery()
      .then((data) => {
        const result = [];
        data.rows.forEach(post => {
          const result_post_id = result.findIndex(item => item.id === post.post_id)
          if(result_post_id !== -1){
            result[result_post_id] = {
              ...result[result_post_id],
              comments: [
                ...result[result_post_id].comments,
                {
                  id: post.comment_id,
                  content: post.comment_content,
                  created_at: post.comment_created_at,
                  user: {
                    id: post.comment_user_id,
                    image: post.comment_user_image,
                    username: post.comment_username 
                  }
                }
              ]
            }
          } else {
            result.push({
              id: post.post_id,
              title: post.post_title,
              content: post.post_content,
              created_at: post.post_created_at,
              image: post.post_image,
              user: {
                id: post.post_user_id,
                image: post.post_user_image,
                username: post.post_username,
              },
              comments: post.comment_id ? [
                {
                  id: post.comment_id,
                  content: post.comment_content,
                  created_at: post.comment_created_at,
                  user: {
                    id: post.comment_user_id,
                    image: post.comment_user_image,
                    username: post.comment_username 
                  }
                }
              ] : []
            })
          }
        })

        res.json(result.reverse());
      })
      .catch((err) => {
        console.log({err})
        res.status(500).json( {err});
      });
  }
};

module.exports = getPosts;