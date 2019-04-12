var random = require('../common/random')
var response = require('../common/response')
var mongoQueue = require('../model/queue')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.getQueue = function (req, res) {
    // get a queue
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

exports.getModeratorRelatedQueue = function (req, res) {
    // get a queue
    if (apiControl.getModeratorRelatedQueueMust(Object.keys(req.params), Object.values(req.params))) {
        var callbackGetQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting queue', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        mongoQueue.mongoDBModeratorRelatedQueueGet(callbackGetQueue, req.params.companyId, mongoConstants.collectionNameQueue, req.params.moderatorId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
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


