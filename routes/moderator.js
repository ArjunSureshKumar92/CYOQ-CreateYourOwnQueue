var express = require('express');
var router = express.Router();
var ticketController = require('../controller/ticket');
var moderatorController = require('../controller/moderator');
var queueController = require('../controller/queue');


/**
 * All the routes that are starting with api. 
 */
//Get cases
router.get('/:authKey/queue/get/:companyId/:queueId', function (req, res) {
  queueController.getQueue(req,res);
});

router.get('/:authKey/queue/get/:companyId', function (req, res) {
  queueController.getModeratorRelatedQueue(req,res);
});

router.get('/:authKey/ticket/active/:companyId/:queueId', function (req, res) {
  ticketController.getActiveTicket(req,res);
});

router.get('/:authKey/ticket/wait/:companyId/:queueId', function (req, res) {
  ticketController.getWaitTicket(req,res);
});

router.get('/:authKey/ticket/get/:companyId/:queueId/:ticketId', function (req, res) {
  ticketController.getTicket(req,res);
});

//Update cases
router.put('/:authKey/ticket/close', function (req, res) {
  ticketController.closeTicket(req,res);
});

router.put('/:authKey/ticket/next', function (req, res) {
  ticketController.nextTicket(req,res);
});

module.exports = router;