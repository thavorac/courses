const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', (req, res) => {
  res.render('home');
});
router.post('/post', postController.createPost); // user [POST] http://localhost:3000/post => createPost of postController.js
module.exports = router;