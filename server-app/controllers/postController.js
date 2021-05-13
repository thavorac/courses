const post = require('../models/post');
const Post = require('../models/post');

exports.getPosts = (req, res) => {
  Post.find()
  .then(posts => {
    res.json({ data: posts });
  })
  .catch(err => {
    console.log(err);
  })
}
exports.likePost = (req, res) => {
  console.log(req.body)
  Post.findById(req.body.postId)
    .then(post => {
      post.nbLike = post.nbLike + 1;
      post.save().then(resobj => {
        return res.json({message: "post was updated"})
      })
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
    nbLike: 0,
    nbShare: 0,
    nbComment: 0,
    postedAt: new Date().toISOString()
  })
  post.save().then(result => {
    console.log('post created')
    res.json({ "message": "New post was created.", "data": result });
  }).catch(err => {
    console.log(err);
  })
}