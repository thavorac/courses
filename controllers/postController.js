const Post = require('../models/post');

exports.createPost = (req, res) => {
  console.log('createPost is called');

  const text = req.body.text;
  const postedAt = new Date().toISOString();
  const postedBy = "Thavorac";
  const status = req.body.status;

  console.log('status', status);
  console.log('text', text);
  const post = new Post({
    text: text,
    postedAt: postedAt,
    postedBy: postedBy,
    status: status
  });
  post.save().then(result => {
    console.log('post is created');
    res.json({"message" : "success!", "data": result});
    //res.redirect('/'); // localhost:3000
  }).catch(err => {
    console.log(err);
  })
}

exports.getPosts = (req, res) => {
  Post.find()
      .then(posts => {
        console.log(posts);
        res.json(posts);
      })
      .catch(err => {
        console.log(err);
      });
}

exports.deletePost = (req, res) => {
  const postId = req.params.postId;
  Post.findByIdAndRemove(postId)
      .then(() => {
        console.log('Post is deleted');
        res.json({"message": "success!"});
      })
      .catch(err => {
        console.log(err);
      })
}