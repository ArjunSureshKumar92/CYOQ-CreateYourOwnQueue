var random = require('../common/random')
var response = require('../common/response')
var mongoTicket = require('../model/ticket')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')



exports.getTicketPosition = function (req, res) {
    // get a ticket position
    var callbackGetTicketPosition = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'Error getting ticket position', status)
        else {
            response.sendResponse(res, data, 200)
        }
    }
    var callbackTicketExistCase = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'No such ticket exist', 401)
        else {
            if (data.email == req.params.authKey)
            mongoTicket.mongoDBTicketGetPosition(callbackGetTicketPosition, req.params.companyId, mongoConstants.collectionNameTicket, req.params.queueId, req.params.ticketId);
            else
                response.sendResponse(res, 'Unauthorised User', 401)
        }
    }
    var callbackQueueExist = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'No such queue exist', status)
        else {
            mongoShared.checkTicketExist(callbackTicketExistCase, req.params.companyId, mongoConstants.collectionNameTicket, req.params.ticketId);
        }
    }
    var callbackExistCase = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'No such company exist', status)
        else {
            mongoShared.checkQueueExist(callbackQueueExist, req.params.companyId, mongoConstants.collectionNameQueue, req.params.queueId);
        }
    }
    mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.params.companyId);
    
}
exports.getTicket = function (req, res) {
    console.log(req.originalUrl)
    if (req.originalUrl.startsWith('/user')) {
        var callbackGetTicket = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting ticket', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        var callbackTicketExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such ticket exist', 401)
            else {
                if (data.email == req.params.authKey)
                    mongoTicket.mongoDBTicketGet(callbackGetTicket, req.params.companyId, mongoConstants.collectionNameTicket, req.params.queueId, req.params.ticketId);
                else
                    response.sendResponse(res, 'Unauthorised User', 401)
            }
        }
        var callbackQueueExist = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such queue exist', status)
            else {
                mongoShared.checkTicketExist(callbackTicketExistCase, req.params.companyId, mongoConstants.collectionNameTicket, req.params.ticketId);
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                mongoShared.checkQueueExist(callbackQueueExist, req.params.companyId, mongoConstants.collectionNameQueue, req.params.queueId);
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.params.companyId);
    }
    else {
        var callbackGetTicket = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting ticket', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        var callbackTicketExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such ticket exist', status)
            else {
                mongoTicket.mongoDBTicketGet(callbackGetTicket, req.params.companyId, mongoConstants.collectionNameTicket, req.params.queueId, req.params.ticketId);
            }
        }
        var callbackQueueExist = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such queue exist', status)
            else {
                mongoShared.checkTicketExist(callbackTicketExistCase, req.params.companyId, mongoConstants.collectionNameTicket, req.params.ticketId);
            }
        }
        var callbackModeratorCase = function (status, data) {
            if (status != 200) {
                response.sendResponse(res, 'Unauthorised User or Invalid moderator', 401)
            } else {
                mongoShared.checkQueueExist(callbackQueueExist, req.params.companyId, mongoConstants.collectionNameQueue, req.params.queueId);
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                mongoShared.checkModeratorExists(callbackModeratorCase, req.params.companyId, mongoConstants.collectionNameModerator, req.params.authKey);
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.params.companyId);
    }

}

exports.getActiveTicket = function (req, res) {
    // get a ticket
    var callbackGetTicket = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'Error getting active ticket', status)
        else {
            response.sendResponse(res, data, 200)
        }
    }
    var callbackQueueExist = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'No such queue exist', status)
        else {
            mongoTicket.mongoDBTicketActiveGet(callbackGetTicket, req.params.companyId, mongoConstants.collectionNameTicket, req.params.authKey, req.params.queueId, mongoConstants.ticketStatusActive);
        }
    }
    var callbackModeratorCase = function (status, data) {
        if (status != 200) {
            response.sendResponse(res, 'Unauthorised User or Invalid moderator', 401)
        } else {
            mongoShared.checkQueueExist(callbackQueueExist, req.params.companyId, mongoConstants.collectionNameQueue, req.params.queueId);
        }
    }
    var callbackExistCase = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'No such company exist', status)
        else {
            mongoShared.checkModeratorExists(callbackModeratorCase, req.params.companyId, mongoConstants.collectionNameModerator, req.params.authKey);
        }
    }
    mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.params.companyId);

}

exports.getWaitTicket = function (req, res) {
    var callbackGetTicket = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'Error getting waiting tickets', status)
        else {
            response.sendResponse(res, data, 200)
        }
    }
    var callbackQueueExist = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'No such queue exist', status)
        else {
            mongoTicket.mongoDBWaitGet(callbackGetTicket, req.params.companyId, mongoConstants.collectionNameTicket, req.params.queueId, mongoConstants.ticketStatusWait);
        }
    }
    var callbackModeratorCase = function (status, data) {
        if (status != 200) {
            response.sendResponse(res, 'Unauthorised User or Invalid moderator', 401)
        } else {
            mongoShared.checkQueueExist(callbackQueueExist, req.params.companyId, mongoConstants.collectionNameQueue, req.params.queueId);
        }
    }
    var callbackExistCase = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'No such company exist', status)
        else {
            mongoShared.checkModeratorExists(callbackModeratorCase, req.params.companyId, mongoConstants.collectionNameModerator, req.params.authKey);
        }
    }
    mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.params.companyId);

}






