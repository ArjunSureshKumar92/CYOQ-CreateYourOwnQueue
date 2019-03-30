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
var getModeratorController = require('../controller/getModerator');
var getCompanyController = require('../controller/getCompany');

var getQueueController = require('../controller/getQueue');

var registerQueueController = require('../controller/registerQueue');



/**
 * All the routes that are starting with api. 
 */
//Create cases
router.post('/queue/create', function (req, res) {
  createQueueController.createQueue(req,res);
});

router.get('/queue/create', function (req, res) {
  createQueueController.createQueueUI(req,res);
});

router.post('/company/create', function (req, res) {
  createCompanyController.createCompany(req,res);
});

router.get('/company/create', function (req, res) {
  createCompanyController.createCompanyUI(req,res);
});

router.post('/moderator/create', function (req, res) {
  createModeratorController.createModerator(req,res);
});

router.get('/moderator/create', function (req, res) {
  createModeratorController.createModeratorUI(req,res);
});

router.get('/queue/register/:queueId', function(req, res) {
  registerQueueController.registerQueueUI(req,res);
});

//Delete cases
router.delete('/queue/delete', function (req, res) {
  deleteQueueController.deleteQueue(req,res);
});

router.delete('/company/delete', function (req, res) {
  deleteCompanyController.deleteCompany(req,res);
});

// router.delete('/moderator/delete', function (req, res) {
//   deleteModeratorController.deleteModerator(req,res);
// });

//Get cases
router.get('/queue/get/:companyId/:queueId', function (req, res) {
  getQueueController.getQueue(req,res);
});

router.get('/queue/all/:companyId', function (req, res) {
  getQueueController.getAllQueue(req,res);
});

router.get('/moderator/all/:companyId', function (req, res) {
  getModeratorController.getAllModerators(req,res);
});

router.get('/company/all', function (req, res) {
  getCompanyController.getAllCompany(req,res);
});

//Update cases
router.post('/queue/update', function (req, res) {
  updateQueueController.updateQueue(req,res);
});

router.put('/company/update', function (req, res) {
  updateCompanyController.updateCompany(req,res);
});

router.put('/moderator/update', function (req, res) {
  updateModeratorController.updateModerator(req,res);
});

router.get('/test', function(req, res, next) {
  res.send('respond with a api success');
});

module.exports = router;