var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

router.get('/campaign/', function(req, res, next) {
  res.render('campaign', { title: 'Foo' });
});

router.get('/volunteer/', function(req, res, next) {
  res.render('volunteer', { title: 'Foo' });
});

router.get('/organize/', function(req, res, next) {
  res.render('organize', { title: 'Foo' });
});

router.get('/donate/', function(req, res, next) {
  res.render('donate', { title: 'Foo' });
});

module.exports = router;
