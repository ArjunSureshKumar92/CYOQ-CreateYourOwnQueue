var express = require('express');
var router = express.Router();
var createQueueController = require('../controller/createqueue')



/**
 * All the routes that are starting with api. 
 */

router.get('/api/test', function (req, res) {
  createQueueController.start()
  res.send('mongo complete')
});



/**
 * All non-api routes. 
 */

router.get('/', function(req, res, next) {
  res.send('respond with a api success');
});

module.exports = router;