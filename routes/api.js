var express = require('express');
var router = express.Router();
var createQueueController = require('../controller/createQueue');
var deleteQueueController = require('../controller/deleteQueue');
var updateQueueController = require('../controller/updateQueue');
var createCompanyController = require('../controller/createCompany');
var deleteCompanyController = require('../controller/deleteCompany');
var updateCompanyController = require('../controller/updateCompany');
var updateTicketController = require('../controller/updateTicket');
var createTicketController = require('../controller/createTicket');
var createModeratorController = require('../controller/createModerator');
var deleteModeratorController = require('../controller/deleteModerator');
var updateModeratorController = require('../controller/updateModerator');
var getModeratorController = require('../controller/getModerator');
var getCompanyController = require('../controller/getCompany');
var getTicketController = require('../controller/getTicket');
var getQueueController = require('../controller/getQueue');
var deleteTicketController = require('../controller/deleteTicket');

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

router.post('/ticket/create', function (req, res) {
  createTicketController.createTicket(req,res);
});

router.get('/queue/register/:queueId', function(req, res) {
  registerQueueController.registerQueueUI(req,res);
});


//Delete cases
router.delete('/queue/delete', function (req, res) {
  deleteQueueController.deleteQueue(req,res);
});

router.delete('/moderator/delete', function (req, res) {
    deleteModeratorController.deleteModerator(req,res);
  });

router.delete('/company/delete', function (req, res) {
  deleteCompanyController.deleteCompany(req,res);
});

router.delete('/moderator/delete', function (req, res) {
  deleteModeratorController.deleteModerator(req,res);
});

router.delete('/ticket/delete', function (req, res) {
  deleteTicketController.deleteTicket(req,res);
});

//Get cases
router.get('/queue/get/:companyId/:queueId', function (req, res) {
  getQueueController.getQueue(req,res);
});

router.get('/moderator/queue/get/:companyId/:moderatorId', function (req, res) {
  getQueueController.getModeratorRelatedQueue(req,res);
});

router.get('/moderator/get/:companyId/:moderatorId', function (req, res) {
  getModeratorController.getModerator(req,res);
});

router.get('/company/get/:companyId', function (req, res) {
  getCompanyController.getCompany(req,res);
});

router.get('/queue/all/:companyId', function (req, res) {
  getQueueController.getAllQueue(req,res);
});

router.get('/moderator/all/:companyId', function (req, res) {
  getModeratorController.getAllModerators(req,res);
});

router.get('/moderator/get/:companyId/:moderatorId', function (req, res) {
  getModeratorController.getModerator(req,res);
});

router.get('/company/all', function (req, res) {
  getCompanyController.getAllCompany(req,res);
});

router.get('/ticket/active/:companyId/:moderatorId/:queueId', function (req, res) {
  getTicketController.getActiveTicket(req,res);
});

router.get('/ticket/wait/:companyId/:queueId', function (req, res) {
  getTicketController.getWaitTicket(req,res);
});

router.get('/ticket/get/:companyId/:queueId/:ticketId', function (req, res) {
  getTicketController.getTicket(req,res);
});

router.get('/ticket/getposition/:companyId/:queueId/:ticketId', function (req, res) {
  getTicketController.getTicketPosition(req,res);
});

//Update cases
router.put('/queue/update', function (req, res) {
  updateQueueController.updateQueue(req,res);
});

router.put('/company/update', function (req, res) {
  updateCompanyController.updateCompany(req,res);
});

router.put('/moderator/update', function (req, res) {
  updateModeratorController.updateModerator(req,res);
});

router.put('/ticket/close', function (req, res) {
  updateTicketController.closeTicket(req,res);
});

router.put('/ticket/next', function (req, res) {
  updateTicketController.nextTicket(req,res);
});

module.exports = router;