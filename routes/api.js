var express = require('express');
var router = express.Router();
var companyController = require('../controller/company');
var moderatorController = require('../controller/moderator');
var queueController = require('../controller/queue');
var ticketController = require('../controller/ticket');

/**
 * All the routes that are starting with api. 
 */
//Create cases
router.post('/queue/create', function (req, res) {
  queueController.createQueue(req,res);
});

router.post('/company/create', function (req, res) {
  companyController.createCompany(req,res);
});

router.post('/moderator/create', function (req, res) {
  moderatorController.createModerator(req,res);
});

router.post('/ticket/create', function (req, res) {
  ticketController.createTicket(req,res);
});

//Delete cases
router.delete('/queue/delete', function (req, res) {
  queueController.deleteQueue(req,res);
});

router.delete('/moderator/delete', function (req, res) {
  moderatorController.deleteModerator(req,res);
});

router.delete('/company/delete', function (req, res) {
  companyController.deleteCompany(req,res);
});

router.delete('/moderator/delete', function (req, res) {
  moderatorController.deleteModerator(req,res);
});

router.delete('/ticket/delete', function (req, res) {
  ticketController.deleteTicket(req,res);
});

//Get cases
router.get('/queue/get/:companyId/:queueId', function (req, res) {
  queueController.getQueue(req,res);
});

router.get('/moderator/queue/get/:companyId/:moderatorId', function (req, res) {
  queueController.getModeratorRelatedQueue(req,res);
});

router.get('/moderator/get/:companyId/:moderatorId', function (req, res) {
  moderatorController.getModerator(req,res);
});

router.get('/company/get/:companyId', function (req, res) {
  companyController.getCompany(req,res);
});

router.get('/queue/all/:companyId', function (req, res) {
  queueController.getAllQueue(req,res);
});

router.get('/moderator/all/:companyId', function (req, res) {
  moderatorController.getAllModerators(req,res);
});

router.get('/moderator/get/:companyId/:moderatorId', function (req, res) {
  moderatorController.getModerator(req,res);
});

router.get('/company/all', function (req, res) {
  companyController.getAllCompany(req,res);
});

router.get('/ticket/active/:companyId/:moderatorId/:queueId', function (req, res) {
  ticketController.getActiveTicket(req,res);
});

router.get('/ticket/wait/:companyId/:queueId', function (req, res) {
  ticketController.getWaitTicket(req,res);
});

router.get('/ticket/get/:companyId/:queueId/:ticketId', function (req, res) {
  ticketController.getTicket(req,res);
});

router.get('/ticket/getposition/:companyId/:queueId/:ticketId', function (req, res) {
  ticketController.getTicketPosition(req,res);
});

//Update cases
router.put('/queue/update', function (req, res) {
  queueController.updateQueue(req,res);
});

router.put('/company/update', function (req, res) {
  companyController.updateCompany(req,res);
});

router.put('/moderator/update', function (req, res) {
  moderatorController.updateModerator(req,res);
});

router.put('/ticket/close', function (req, res) {
  ticketController.closeTicket(req,res);
});

router.put('/ticket/next', function (req, res) {
  ticketController.nextTicket(req,res);
});

module.exports = router;