const Post = require('../models/post');

exports.getPosts = (req, res) => {
  return res.json([{
    id: 1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis sem, dictum id bibendum eget, malesuada ut massa. Ut scel erisque nulla sed luctus dapibus. Nulla sit amet mi vitae purus sol licitudin venenatis. Praesent et sem urna. Integer vitae lectus nis l. Fusce sapien ante, tristique efficitur lorem et, laoreet ornare lib ero. Nam fringilla leo orci. Vivamus semper quam nunc, sed ornare magna dignissim sed. Etiam interdum justo quis risus efficitur dictum. Nunc ut pulvinar quam. N unc mollis, est a dapibus dignissim, eros elit tempor diam, eu tempus quam felis eu velit.",
    postedBy: "Thavorac",
    postedAt: "Yesterday",
    nbLike: 12,
    nbComment: 34,
    nbShare: 17
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis sem, dictum id bibendum eget, malesuada ut massa. Ut scel erisque nulla sed luctus dapibus. Nulla sit amet mi vitae purus sol licitudin venenatis. Praesent et sem urna. Integer vitae lectus nis l. Fusce sapien ante, tristique efficitur lorem et, laoreet ornare lib ero. Nam fringilla leo orci. Vivamus semper quam nunc, sed ornare magna dignissim sed. Etiam interdum justo quis risus efficitur dictum. Nunc ut pulvinar quam. N unc mollis, est a dapibus dignissim, eros elit tempor diam, eu tempus quam felis eu velit.",
    postedBy: "Thavorac",
    postedAt: "Today, 7am",
    nbLike: 81,
    nbComment: 3,
    nbShare: 7
  },
  {
    id: 3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis sem, dictum id bibendum eget, malesuada ut massa. Ut scel erisque nulla sed luctus dapibus. Nulla sit amet mi vitae purus sol licitudin venenatis. Praesent et sem urna. Integer vitae lectus nis l. Fusce sapien ante, tristique efficitur lorem et, laoreet ornare lib ero. Nam fringilla leo orci. Vivamus semper quam nunc, sed ornare magna dignissim sed. Etiam interdum justo quis risus efficitur dictum. Nunc ut pulvinar quam. N unc mollis, est a dapibus dignissim, eros elit tempor diam, eu tempus quam felis eu velit.",
    postedBy: "Thavorac",
    postedAt: "5 minutes ago",
    nbLike: 24,
    nbComment: 31,
    nbShare: 11
  }])
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