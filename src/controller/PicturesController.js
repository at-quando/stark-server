var mongoose = require('mongoose');
var Article = require('../models/article');

exports.create = function(req, res, next) {
  const link = req.files.map(x => `${x.fieldname}/${x.filename}`)
  res.send({
    link
  });
}

exports.destroy = function(req, res, next) {
  const link = req.files.map(x => `${x.fieldname}/${x.filename}`)
  res.send({
    link
  });
}
