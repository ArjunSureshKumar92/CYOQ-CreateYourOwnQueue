var random = require('../common/random')
var response = require('../common/response')
var mongoTicket = require('../model/ticket')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mongoShared = require('../model/shared')
var mail = require('../common/mail')


exports.closeTicket = function (req, res) {
    // update a ticket
    if (apiControl.closeTicketMust(Object.keys(req.body), Object.values(req.body))) {

        var closeTicketObj = {};
        closeTicketObj['lastUpdated'] = new Date(new Date().toUTCString())
        for (var key in req.body) {
            if (apiControl.closeTicketCan(key))
                closeTicketObj[key] = req.body[key];
        }

        var callbackCloseTicket = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error updaing ticket', status)
            else {
                response.sendResponse(res, 'Success, updated Ticket ID => ' + req.body.ticketId, 200)
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such ticket exist', status)
            else {
                closeTicketObj['status'] = mongoConstants.ticketStatusDone;
                mongoTicket.mongoDBTicketClose(callbackCloseTicket, req.body.companyId, mongoConstants.collectionNameTicket, req.body.ticketId, closeTicketObj);
            }
        }
        mongoShared.checkTicketExist(callbackExistCase, req.body.companyId, mongoConstants.collectionNameTicket, req.body.ticketId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}

exports.nextTicket = function (req, res) {
    // update a ticket
    if (apiControl.nextTicketMust(Object.keys(req.body), Object.values(req.body))) {
        var nextTicketObj = {};
        nextTicketObj['lastUpdated'] = new Date(new Date().toUTCString())
        for (var key in req.body) {
            if (apiControl.nextTicketCan(key))
                nextTicketObj[key] = req.body[key];
        }
        var callbackNextTicket = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting next ticket', status)
            else {
                response.sendResponse(res, 'Success, Active Ticket ID => ' + data, 200)
            }
        }
        var callbackGetWaitingTicket = function (status, data) {
            if (status == 500) {
                response.sendResponse(res, 'Error getting waiting tickets', status)
            } else if (status == 422) {
                response.sendResponse(res, 'No waiting tickets', status)
            } else {
                nextTicketObj['status'] = mongoConstants.ticketStatusActive
                mongoTicket.mongoDBTicketNext(callbackNextTicket, req.body.companyId, mongoConstants.collectionNameTicket, data.ticketId, nextTicketObj);
            }
        }
        var callbackQueueExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such queue exist', status)
            else {
                // check if status is active or time is invalid
                var date = new Date();
                if (data.status && data.status == mongoConstants.queueStatusInactive) {
                    response.sendResponse(res, 'Sorry, queue in closed at the moment...', status)
                } else {
                    mongoTicket.mongoDBWaitGetNext(callbackGetWaitingTicket, req.body.companyId, mongoConstants.collectionNameTicket, req.body.queueId, mongoConstants.ticketStatusWait);
                }

            }
        }
        var callbackGetActiveTicket = function (status, data) {
            if (status != 200) {
                mongoShared.checkQueueExist(callbackQueueExistCase, req.body.companyId, mongoConstants.collectionNameQueue, req.body.queueId);
            }
            else {
                response.sendResponse(res, 'Error, A ticket is already active. Please close it and try again...', 442)
            }
        }
        mongoTicket.mongoDBTicketGet(callbackGetActiveTicket, req.body.companyId, mongoConstants.collectionNameTicket, req.body.servedBy, req.body.queueId, mongoConstants.ticketStatusActive);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}



