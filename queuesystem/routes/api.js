var express = require('express');
var router = express.Router();
var createQueueController = require('../controller/createQueue')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a api success');
});

router.get('/test', function (req, res) {
  createQueueController.start()
  res.send('mongo complete')
  
})

module.exports = router;
