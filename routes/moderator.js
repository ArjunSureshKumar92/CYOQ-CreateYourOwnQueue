var express = require('express');
var router = express.Router();
var updateTicketController = require('../controller/updateTicket');
var getModeratorController = require('../controller/getModerator');
var getTicketController = require('../controller/getTicket');
var getQueueController = require('../controller/getQueue');


/**
 * All the routes that are starting with api. 
 */

//Get cases
router.get('/moderator/queue/get/:companyId/:moderatorId', function (req, res) {
  getQueueController.getModeratorRelatedQueue(req,res);
});

router.get('/moderator/get/:companyId/:moderatorId', function (req, res) {
  getModeratorController.getModerator(req,res);
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

//Update cases
router.put('/ticket/close', function (req, res) {
  updateTicketController.closeTicket(req,res);
});

router.put('/ticket/next', function (req, res) {
  updateTicketController.nextTicket(req,res);
});

module.exports = router;