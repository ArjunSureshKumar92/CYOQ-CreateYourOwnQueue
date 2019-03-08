var express = require('express');
var router = express.Router();
var createQueueController = require('../controller/createqueue');



/**
 * All the routes that are starting with api. 
 */

router.post('/api/createQueue', function (req, res) {
  createQueueController.createQueue(req,res);
});






/**
 * All non-api routes. 
 */

router.get('/', function(req, res, next) {
  res.send('respond with a api success');
});

module.exports = router;