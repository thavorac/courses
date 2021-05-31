const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get('/', function(req, res) {
  res.render('hello')
})

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/getUserInfo', authController.getUserInfo);

module.exports = router