var mongoose = require('mongoose');
var Article = require('../models/article');

exports.show = function(req, res, next) {
  Article.findOne({_id: req.params.id}, (err, article) => {
    if (err) res.status(404).send(err);
    console.log(articles)
    res.status(200).json(article);
  })
}

exports.create = function(req, res, next) {
  let article = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    agency_id: res.locals.header.team_id,
    user_id: req.user.id
  });

  article.save((error,article) => {
    if (error) res.status(500).send(error);
    res.status(201).json(article);
  });
}

exports.index = function(req, res, next) {
  Article.find({}, (err, articles) => {
    if (err) res.status(500).send(error);
    res.status(200).json(articles);
  });
}

exports.update = function(req, res, next) {
  Article.findByIdAndUpdate({_id: req.params.id, agency_id: res.locals.header.team_id}, {}, (err, article) => {
    if (error) res.status(404).send(error);
    res.status(200).json(article);
  })
}

exports.delete = function(req, res, next) {
  Article.findOneAndRemove({_id: req.params.id, agency_id: res.locals.header.team_id}, (err, article) => {
    if (err) res.status(404).send(err);
    res.status(200).json(article);
  })
}