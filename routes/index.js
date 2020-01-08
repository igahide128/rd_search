var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'rd_search', user: req.user });
});

module.exports = router;
