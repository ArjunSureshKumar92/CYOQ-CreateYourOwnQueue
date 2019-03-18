var express = require('express');
var router = express.Router();
var createQueueController = require('../controller/createQueue');
var createCompanyController = require('../controller/createCompany');
var createModeratorController = require('../controller/createModerator');



/**
 * All the routes that are starting with api. 
 */

router.post('/api/createQueue', function (req, res) {
  createQueueController.createQueue(req,res);
});

router.post('/api/createCompany', function (req, res) {
  createCompanyController.createCompany(req,res);
});

router.post('/api/createModerator', function (req, res) {
  createModeratorController.createModerator(req,res);
});







/**
 * All non-api routes. 
 */

router.get('/', function(req, res, next) {
  res.send('respond with a api success');
});

module.exports = router;