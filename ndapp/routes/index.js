var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

router.get('/campaign/', function(req, res, next) {
  res.render('campaign', { title: '' });
});

router.get('/volunteer/', function(req, res, next) {
  res.render('volunteer', { title: '' });
});

router.get('/organize/', function(req, res, next) {
  res.render('organize', { title: '' });
});

router.get('/donate/', function(req, res, next) {
  res.render('donate', { title: '' });
});

module.exports = router;
