var random = require('../common/random')
var response = require('../common/response')
var mongoQueue = require('../model/queue')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.getQueue = function (req, res) {
    // get a queue
    if (req.originalUrl.startsWith('/moderator')) {
        var callbackGetQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting queue', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        var callbackQueueExist = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such queue exist', status)
            else {
                mongoQueue.mongoDBQueueGet(callbackGetQueue, req.params.companyId, mongoConstants.collectionNameQueue, req.params.queueId);
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
    else {
        var callbackGetQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting queue', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        var callbackQueueExist = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such queue exist', status)
            else {
                mongoQueue.mongoDBQueueGet(callbackGetQueue, req.params.companyId, mongoConstants.collectionNameQueue, req.params.queueId);
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                if (data.email == req.params.authKey)
                    mongoShared.checkQueueExist(callbackQueueExist, req.params.companyId, mongoConstants.collectionNameQueue, req.params.queueId);
                else
                    response.sendResponse(res, 'Unauthorised User', 401)
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.params.companyId);
    }
}

exports.getModeratorRelatedQueue = function (req, res) {
    var callbackGetQueue = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'Error getting queue', status)
        else {
            response.sendResponse(res, data, 200)
        }
    }
    var callbackModeratorCase = function (status, data) {
        if (status != 200) {
            response.sendResponse(res, 'Unauthorised User or Invalid moderator', 401)
        } else {
            mongoQueue.mongoDBModeratorRelatedQueueGet(callbackGetQueue, req.params.companyId, mongoConstants.collectionNameQueue, req.params.authKey);
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



exports.getAllQueue = function (req, res) {
    // get all queue
    var callbackGetAllQueue = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'Error getting queue', status)
        else {
            response.sendResponse(res, data, 200)
        }
    }
    var callbackExistCase = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'No such company exist', status)
        else {
            if (data.email == req.params.authKey) {
                if (req.query.searchName) {
                    mongoQueue.mongoDBQueueGetAllWithSearch(callbackGetAllQueue, req.params.companyId, mongoConstants.collectionNameQueue, req.query.searchName);
                } else {
                    mongoQueue.mongoDBQueueGetAll(callbackGetAllQueue, req.params.companyId, mongoConstants.collectionNameQueue);
                }
            }
            else
                response.sendResponse(res, 'Unauthorised User', 401)
        }
    }
    mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.params.companyId);


}


