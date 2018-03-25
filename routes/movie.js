var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = require('../models/movie.js');

router.get('/', function(req, res, next) {
  Movie.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.get('/:id', function(req, res, next) {
  Movie.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.post('/', function(req, res, next) {
  Movie.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Movie.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Movie.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
