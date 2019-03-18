var express = require('express');
var router = express.Router();
var createQueueController = require('../controller/createQueue');
var deleteQueueController = require('../controller/deleteQueue');
var updateQueueController = require('../controller/updateQueue');

var createCompanyController = require('../controller/createCompany');
var deleteCompanyController = require('../controller/deleteCompany');
var updateCompanyController = require('../controller/updateCompany');

var createModeratorController = require('../controller/createModerator');
var deleteModeratorController = require('../controller/deleteModerator');
var updateModeratorController = require('../controller/updateModerator');

var getQueueController = require('../controller/getQueue');



/**
 * All the routes that are starting with api. 
 */
//Create cases
router.post('/createQueue', function (req, res) {
  createQueueController.createQueue(req,res);
});

router.post('/createCompany', function (req, res) {
  createCompanyController.createCompany(req,res);
});

router.post('/createModerator', function (req, res) {
  createModeratorController.createModerator(req,res);
});

//Delete cases
router.delete('/deleteQueue', function (req, res) {
  deleteQueueController.deleteQueue(req,res);
});

router.delete('/deleteCompany', function (req, res) {
  deleteCompanyController.deleteCompany(req,res);
});

// router.delete('/api/deleteModerator', function (req, res) {
//   deleteModeratorController.deleteModerator(req,res);
// });

//Get cases
router.get('/getQueue', function (req, res) {
  getQueueController.getQueue(req,res);
});

router.get('/getAllQueue', function (req, res) {
  getQueueController.getAllQueue(req,res);
});

//Update cases
router.put('/updateQueue', function (req, res) {
  updateQueueController.updateQueue(req,res);
});

router.put('/updateCompany', function (req, res) {
  updateCompanyController.updateCompany(req,res);
});

router.put('/updateModerator', function (req, res) {
  updateModeratorController.updateModerator(req,res);
});

router.get('/test', function(req, res, next) {
  res.send('respond with a api success');
});

module.exports = router;