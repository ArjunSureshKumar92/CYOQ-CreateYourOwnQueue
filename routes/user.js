var express = require('express');
var router = express.Router();
var ticketController = require('../controller/ticket');

/**
 * All the routes that are starting with api. 
 */
//Create cases
router.post('/ticket/create', function (req, res) {
  ticketController.createTicket(req,res);
});

//Delete cases
router.delete('/:authKey/ticket/delete', function (req, res) {
  ticketController.deleteTicket(req,res);
});

//Get cases

router.get('/:authKey/ticket/get/:companyId/:queueId/:ticketId', function (req, res) {
  ticketController.getTicket(req,res);
});

router.get('/:authKey/ticket/getposition/:companyId/:queueId/:ticketId', function (req, res) {
  ticketController.getTicketPosition(req,res);
});

module.exports = router;