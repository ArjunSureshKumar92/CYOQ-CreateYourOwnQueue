var express = require('express');
var router = express.Router();
var createQueueController = require('../controller/createQueue');
var deleteQueueController = require('../controller/deleteQueue');
var deleteCompanyController = require('../controller/deleteCompany');
var deleteModeratorController = require('../controller/deleteModerator');
var createCompanyController = require('../controller/createCompany');
var createModeratorController = require('../controller/createModerator');
var getQueueController = require('../controller/getQueue');



/**
 * All the routes that are starting with api. 
 */

router.get('/api/getQueue', function (req, res) {
  getQueueController.getQueue(req,res);
});

router.get('/api/getAllQueue', function (req, res) {
  getQueueController.getAllQueue(req,res);
});

router.post('/api/createQueue', function (req, res) {
  createQueueController.createQueue(req,res);
});

router.post('/api/createCompany', function (req, res) {
  createCompanyController.createCompany(req,res);
});

router.post('/api/createModerator', function (req, res) {
  createModeratorController.createModerator(req,res);
});

router.delete('/api/deleteQueue', function (req, res) {
  deleteQueueController.deleteQueue(req,res);
});

router.delete('/api/deleteCompany', function (req, res) {
  deleteCompanyController.deleteCompany(req,res);
});

// router.delete('/api/deleteModerator', function (req, res) {
//   deleteModeratorController.deleteModerator(req,res);
// });








/**
 * All non-api routes. 
 */

router.get('/', function(req, res, next) {
  res.send('respond with a api success');
});

module.exports = router;