var random = require('../common/random')
var response = require('../common/response')
var mongoTicket = require('../model/ticket')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')



exports.getTicketPosition = function (req, res) {
    // get a ticket position
    if (apiControl.getTicketMust(Object.keys(req.params),Object.values(req.params))) {
        var callbackGetTicketPosition = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting ticket position', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        mongoTicket.mongoDBTicketGetPosition(callbackGetTicketPosition, req.params.companyId, mongoConstants.collectionNameTicket, req.params.queueId,req.params.ticketId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}
exports.getTicket = function (req, res) {
    // get a ticket
    if (apiControl.getTicketMust(Object.keys(req.params),Object.values(req.params))) {
        var callbackGetTicket = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting ticket', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        mongoTicket.mongoDBTicketGet(callbackGetTicket, req.params.companyId, mongoConstants.collectionNameTicket, req.params.queueId,req.params.ticketId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}

exports.getActiveTicket = function (req, res) {
    // get a ticket
    if (apiControl.getActiveTicketMust(Object.keys(req.params),Object.values(req.params))) {
        var callbackGetTicket = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting active ticket', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        mongoTicket.mongoDBTicketActiveGet(callbackGetTicket, req.params.companyId, mongoConstants.collectionNameTicket, req.params.moderatorId,req.params.queueId,mongoConstants.ticketStatusActive);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}

exports.getWaitTicket = function (req, res) {
    // get a ticket
    if (apiControl.getWaitTicketMust(Object.keys(req.params),Object.values(req.params))) {
        var callbackGetTicket = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting waiting tickets', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        mongoTicket.mongoDBWaitGet(callbackGetTicket, req.params.companyId, mongoConstants.collectionNameTicket, req.params.queueId,mongoConstants.ticketStatusWait);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}






