const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if(!req.cookies["username"]) {
    return res.redirect('/welcome');
  } else {
    res.render('home', {username: req.cookies["username"]});
  }
});

router.get('/welcome', (req, res) => {
  if(req.cookies["username"]) {
    return res.redirect("/");
  } else {
    res.render('welcome');
  }
})

router.post('/save-username', (req, res) => {
  res.cookie('username', req.body.username, {
    maxAge: 86400 * 1000, // 24h
    httpOnly: true
  })
  return res.redirect("/");
})

module.exports = router;