var mongoose = require('mongoose');
var User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.login = function(req, res, next) {
  if (!req.body.email || !req.body.password) {
    res.status(400).send("Error. Please enter the correct username and password");
    return;
  } else {
    User.findOne({email: req.body.email, password: req.body.password}, (err, user) => {
      const token = jwt.sign({
        id: user._id,
        email: user.email,
      }, 'mykey', {expiresIn: '3 hours'});
      res.status(200).send({access_token: token})
    });
  }
}

exports.logout = function(req, res, next) {
  const user = User.find((u) => {
    return u.username === req.body.username && u.password === req.body.password;
  });
  console.log(12234)
  const token = jwt.sign({
    sub: user.id,
    username: user.email
  }, 'mykey', {expiresIn: '3 hours'});
  res.status(200).send({access_token: token})
}

exports.check = function(req, res, next) {
  User.find({_id: req.user.id}).populate('agency').exec((err, user) => {
    console.log(user)
  });
}
