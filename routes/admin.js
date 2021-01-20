const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// For render ejs files
router.get('/', authController.dashboard);
router.get('/signin', authController.signIn);
router.get('/signup', authController.signUp);

// For register new user call
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;