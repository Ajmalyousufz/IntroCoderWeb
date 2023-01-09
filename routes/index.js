var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/introjson', function(req, res, next) {
  res.render('/jsons/intro_coder_json');
});

module.exports = router;
