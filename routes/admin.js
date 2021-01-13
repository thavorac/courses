const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Return blank home page
router.get('/', (req, res) => {
  res.render('home');
});

// API: create new post, and return the created post
router.post('/post', postController.createPost); // user [POST] http://localhost:3000/post => createPost of postController.js
// API: list all posts
router.get('/posts', postController.getPosts);
// API: delete post
router.delete('/post/:postId', postController.deletePost); // http://localhost:3000/post/3
module.exports = router;