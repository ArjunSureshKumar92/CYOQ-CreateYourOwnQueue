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
                mail.sendMail('comp231team4@gmail.com',data.email,'Ticket Deleted','Hey User, \n Your Ticket '+req.body.ticketId+' has been deleted','comp231password');
                response.sendResponse(res, 'Success, deleted Ticket ID => ' + req.body.ticketId, 200)
            }
        }
        var callbackGetTicketPosition = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such ticket exist', status)
            else {
                if (data == 0) {
                    response.sendResponse(res, 'You are the active ticket holder. Cannot delete your ticket now...', status)
                    return;
                }
                if (data == 1) {
                    response.sendResponse(res, 'You are the next in queue. Cannot delete your ticket now...', status)
                    return;
                } 
                if (data == -1) {
                    response.sendResponse(res, 'You ticket is already closed. Cannot delete your ticket now...', status)
                    return;
                }  
                mongoTicket.mongoDBTicketDelete(callbackDeleteTicket, req.body.companyId, mongoConstants.collectionNameTicket, req.body.ticketId,mongoConstants.ticketStatusCancel);
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such ticket exist', status)
            else {
                mongoTicket.mongoDBTicketGetPosition(callbackGetTicketPosition, req.body.companyId, mongoConstants.collectionNameTicket, data.queueId,req.body.ticketId);
                
            }
        }
        mongoShared.checkTicketExist(callbackExistCase, req.body.companyId, mongoConstants.collectionNameTicket, req.body.ticketId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}


