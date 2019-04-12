var express = require('express');
var router = express.Router();
var createTicketController = require('../controller/createTicket');
var getTicketController = require('../controller/getTicket');
var deleteTicketController = require('../controller/deleteTicket');



/**
 * All the routes that are starting with api. 
 */

//Create cases
router.post('/ticket/create', function (req, res) {
  createTicketController.createTicket(req,res);
});

//Delete cases
router.delete('/ticket/delete', function (req, res) {
  deleteTicketController.deleteTicket(req,res);
});

//Get cases

router.get('/ticket/get/:companyId/:queueId/:ticketId', function (req, res) {
  getTicketController.getTicket(req,res);
});

router.get('/ticket/getposition/:companyId/:queueId/:ticketId', function (req, res) {
  getTicketController.getTicketPosition(req,res);
});

module.exports = router;