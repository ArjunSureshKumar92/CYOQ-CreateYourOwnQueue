var random = require('../common/random')
var response = require('../common/response')
var mongoTicket = require('../model/ticket')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mongoShared = require('../model/shared')
var mail = require('../common/mail')


exports.deleteTicket = function (req, res) {
    // delete a queue
    if (apiControl.deleteTicketMust(Object.keys(req.body),Object.values(req.body))) {
        var callbackDeleteTicket = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error deleting ticket', status)
            else {
                response.sendResponse(res, 'Success, deleted Ticket ID => ' + req.body.ticketId, 200)
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such ticket exist', status)
            else {
                mongoTicket.mongoDBTicketDelete(callbackDeleteTicket, req.body.companyId, mongoConstants.collectionNameTicket, req.body.ticketId,mongoConstants.ticketStatusCancel);
            }
        }
        mongoShared.checkTicketExist(callbackExistCase, req.body.companyId, mongoConstants.collectionNameTicket, req.body.ticketId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}


