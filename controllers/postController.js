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
    res.json({"message" : "success!"});
    //res.redirect('/'); // localhost:3000
  }).catch(err => {
    console.log(err);
  })
}