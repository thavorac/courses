const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

router.get('/', (req, res) => {
  res.json({
    "message" : "welcome",
    "appName" : "Social Media",
    "version" : "0.0.1"
  })
})

router.get('/posts', postController.getPosts);
router.post('/posts', postController.createPost);
router.post('/like-post', postController.likePost);
module.exports = router