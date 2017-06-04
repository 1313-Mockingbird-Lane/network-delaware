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

router.get('/campaign-list/', function(req, res, next) {
  res.render(
    'campaign_list',
    {
        foo: "bar",
        member_campaigns: [
            {"name": "Campaign 1", "purpose": "Purpose of campaign 1"},
            {"name": "Campaign 2", "purpose": "Purpose of campaign 2"},
        ],
        local_campaigns: [
            {"name": "Campaign 3", "purpose": "Purpose of campaign 3"},
            {"name": "Campaign 4", "purpose": "Purpose of campaign 4"},
        ]
    }
  );
});
module.exports = router;
