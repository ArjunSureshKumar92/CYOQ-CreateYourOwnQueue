var express = require('express');
var router = express.Router();
var createQueueController = require('../controller/createQueue')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/test', function (req, res) {
  createQueueController.start()
  res.send('mongo complete')
  
})

module.exports = router;

