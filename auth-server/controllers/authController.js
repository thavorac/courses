const { response } = require('express');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Verify username/password with database

  // Username/password is correct, so generate a new token
  const token = jwt.sign({
    data: { username: username, location: 'cambodia', nationality: 'cambodian', role: 'admin' }
  }, 'HereIsMySecretKey', { expiresIn: 60 * 60 });

  res.json({message: 'login success', token: token})
}

exports.register = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log('username', username)
  // consider we store these username/password in database

  res.json({ message: 'Register success!' })
}

exports.getUserInfo = (req, res) => {
  const token = req.headers['authorization']
  console.log('token', token)
  
  try {
    const decoded = jwt.verify(token, 'HereIsMySecretKey');
    if (decoded) {
      // If token is valid
      res.json({message: "you success call get user info", data: decoded})
    } else {
      // If not
      res.json({message: 'invalid token'})
    }
  } catch (err) {
    res.json({message: 'invalid token'})
  }
}