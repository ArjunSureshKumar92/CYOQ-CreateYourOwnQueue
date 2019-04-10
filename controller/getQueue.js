var random = require('../common/random')
var response = require('../common/response')
var mongoQueue = require('../model/queue')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.getQueue = function (req, res) {
    // get a queue
    if (apiControl.getQueueMust(Object.keys(req.params),Object.values(req.params))) {
        var callbackGetQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting queue', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        mongoQueue.mongoDBQueueGet(callbackGetQueue, req.params.companyId, mongoConstants.collectionNameQueue, req.params.queueId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}

exports.getModeratorRelatedQueue = function (req, res) {
    // get a queue
    if (apiControl.getModeratorRelatedQueueMust(Object.keys(req.params),Object.values(req.params))) {
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
    if (apiControl.getAllQueueMust(Object.keys(req.params),Object.values(req.params))) {
        var callbackGetAllQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting queue', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        if(req.query.searchName) {
            mongoQueue.mongoDBQueueGetAllWithSearch(callbackGetAllQueue, req.params.companyId, mongoConstants.collectionNameQueue,req.query.searchName);
        } else {
            mongoQueue.mongoDBQueueGetAll(callbackGetAllQueue, req.params.companyId, mongoConstants.collectionNameQueue);
        }
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}


