const bcrypt = require("bcryptjs");
const User = require('../models/users');
exports.signIn = (req, res) => {
  if(req.session.userId) {
    res.redirect('/');
  } else {
    res.render('signin', {error: false});
  }
}
exports.signUp = (req, res) => {
  if(req.session.userId) {
    res.redirect('/');
  } else {
    res.render('signup');
  }
}
exports.dashboard = (req, res) => {
  if(req.session.userId) {
    User.findOne({_id: req.session.userId}).then(user => {
      console.log(user);
      if(user) {
        res.render('dashboard', {user: user});
      } else {
        res.render('dashboard', {user: null});
      }
    }).catch(err => {
      console.log(err);
    })
  } else {
    res.redirect('/signin');
  }
}
exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // Check if username is exist
  User.find({username: username}).then(result => {
    if(result) {
      // if user exist, check given password with the encrypted password
      bcrypt.compare(password, result[0].password, function(err, passwordIsMatch) {
        if(passwordIsMatch) {
          // if password is correct, return success, with cookie save
          res.cookie('username', username, {expire: 3600 * 1000});
          res.cookie('logged-time', new Date().toISOString(), {expire: 3600 * 1000});
          // store user information to session
          req.session.userId = result[0]._id;
          res.redirect("/");
        } else {
          // else return fail
          res.render("signin", {error: true, message: "Password incorrect"});
        }
      })
    } else {
      // if user is not exist, return fail
    }
  }).catch(err => {
    console.log(err);
  })
}
exports.register = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const confirm_password = req.body.confirm_password;
  const date = new Date();
  const salt = bcrypt.genSaltSync(10);
  const user = new User({
    username: username,
    password: bcrypt.hashSync(password, salt),
    registerAt: date.toISOString()
  }).save().then(result => {
    res.redirect("/signin");
  }).catch(err => {
    res.render('signup', {message: "Signup fail, try again"});
  })
}

exports.logout = (req, res) => {
  // clear session
  req.session.destroy();
  // redirect to sigin
  res.redirect('/signin');
}