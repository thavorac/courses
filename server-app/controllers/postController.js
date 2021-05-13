const post = require('../models/post');
const Post = require('../models/post');

exports.getPosts = (req, res) => {
  Post.find()
      .then(posts => {
        const response = []
        for (var post of posts) {
          response.push({
            content: post.content,
            user: post.user,
            postedAt: post.postedAt,
            id: post._id,
            nbLike: 0,
            nbShare: 0,
            nbComment: 0
          })
        }
        res.json({ data: response });
      })
      .catch(err => {
        console.log(err);
      })
}

exports.createPost = (req, res) => {
  // console.log(req.body)
  const post = new Post({
    content: req.body.content,
    user: req.body.user,
    postedAt: new Date().toISOString()
  })
  post.save().then(result => {
    console.log('post created')
    res.json({ "message": "New post was created.", "data": result });
  }).catch(err => {
    console.log(err);
  })
}