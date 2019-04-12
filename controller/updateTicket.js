var response = require('../common/response')
var mongoTicket = require('../model/ticket')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mongoShared = require('../model/shared')
var mail = require('../common/mail')

global.queueName = '';

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
                response.sendResponse(res, 'Error closing ticket', status)
            else {
                if (data) {
                    response.sendResponse(res, 'Success, closed Ticket ID => ' + req.body.ticketId, 200)
                } else {
                    response.sendResponse(res, 'Error closing ticket, the ticket is not active at the moment', 422)
                }

            }
        }
        var callbackTicketExistCase = function (status) {
            if (status != 200)
                response.sendResponse(res, 'No such ticket exist', status)
            else {
                closeTicketObj['status'] = mongoConstants.ticketStatusDone;
                mongoTicket.mongoDBTicketClose(callbackCloseTicket, req.body.companyId, mongoConstants.collectionNameTicket, req.body.ticketId, closeTicketObj);
            }
        }
        var callbackModeratorCase = function (status) {
            if (status != 200) {
                response.sendResponse(res, 'Unauthorised User or Invalid moderator', 401)
            } else {
                mongoShared.checkTicketExist(callbackTicketExistCase, req.body.companyId, mongoConstants.collectionNameTicket, req.body.ticketId);
            }
        }
        var callbackExistCase = function (status) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                mongoShared.checkModeratorExists(callbackModeratorCase, req.body.companyId, mongoConstants.collectionNameModerator, req.params.authKey);
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}

exports.nextTicket = function (req, res) {
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
                mail.sendMail('comp231team4@gmail.com', data.email, 'Active User', 'Hey User, \n Your ticket is now active for the queue: ' + queueName, 'comp231password');
                sendNotificationToNextInLine();
                response.sendResponse(res, 'Success, Active Ticket ID => ' + data.ticketId, 200)
            }
        }
        var callbackGetWaitingTicket = function (status, data) {
            if (status == 500) {
                response.sendResponse(res, 'Error getting waiting tickets', status)
            } else if (status == 422) {
                response.sendResponse(res, 'No waiting tickets', status)
            } else {
                nextTicketObj['status'] = mongoConstants.ticketStatusActive
                nextTicketObj['servedBy'] = req.params.authKey
                mongoTicket.mongoDBTicketNext(callbackNextTicket, req.body.companyId, mongoConstants.collectionNameTicket, data.ticketId, nextTicketObj);
            }
        }
        var callbackQueueExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such queue exist', status)
            else {
                queueName = data.name
                if (data.status && data.status == mongoConstants.queueStatusInactive) {
                    response.sendResponse(res, 'Sorry, queue in closed at the moment...', status)
                } else {
                    mongoTicket.mongoDBWaitGetNext(callbackGetWaitingTicket, req.body.companyId, mongoConstants.collectionNameTicket, req.body.queueId, mongoConstants.ticketStatusWait);
                }

            }
        }
        var callbackGetActiveTicket = function (status) {
            if (status != 200) {
                mongoShared.checkQueueExist(callbackQueueExistCase, req.body.companyId, mongoConstants.collectionNameQueue, req.body.queueId);
            }
            else {
                response.sendResponse(res, 'Error, A ticket is already active. Please close it and try again...', 442)
            }
        }
        var callbackModeratorCase = function (status) {
            if (status != 200) {
                response.sendResponse(res, 'Unauthorised User or Invalid moderator', 401)
            } else {
                mongoTicket.mongoDBTicketActiveGet(callbackGetActiveTicket, req.body.companyId, mongoConstants.collectionNameTicket, req.params.authKey, req.body.queueId, mongoConstants.ticketStatusActive);
            }
        }
        var callbackExistCase = function (status) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                mongoShared.checkModeratorExists(callbackModeratorCase, req.body.companyId, mongoConstants.collectionNameModerator, req.params.authKey);
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
        
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }


    var sendNotificationToNextInLineCallback = function (status, data) {
        if (status == 200) {
            mail.sendMail('comp231team4@gmail.com', data.email, 'Next In Queue', 'Hey User, \n Your ticket for the queue: ' + queueName + ' is now next in line... Please get ready!!', 'comp231password');
        }
    }

    function sendNotificationToNextInLine() {
        mongoTicket.mongoDBWaitGetNext(sendNotificationToNextInLineCallback, req.body.companyId, mongoConstants.collectionNameTicket, req.body.queueId, mongoConstants.ticketStatusWait);
    }

}






