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
module.exports = router