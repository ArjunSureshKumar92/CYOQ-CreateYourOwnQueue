var random = require('../common/random')
var response = require('../common/response')
var mongoQueue = require('../model/queue')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.getQueue = function (req, res) {
    // create a simple queue
    if (apiControl.getQueueMust(Object.keys(req.body))) {
        var callbackGetQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting queue', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        mongoQueue.mongoDBQueueGet(callbackGetQueue, req.body.companyId, mongoConstants.collectionNameQueue, req.body.queueId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}

exports.getAllQueue = function (req, res) {
    // create a simple queue
    if (apiControl.getAllQueueMust(Object.keys(req.body))) {
        var callbackGetAllQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting queue', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        mongoQueue.mongoDBQueueGetAll(callbackGetAllQueue, req.body.companyId, mongoConstants.collectionNameQueue);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}


