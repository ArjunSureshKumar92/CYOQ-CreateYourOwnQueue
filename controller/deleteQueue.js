var random = require('../common/random')
var response = require('../common/response')
var mongoQueue = require('../model/queue')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.deleteQueue = function (req, res) {
    // create a simple queue
    if (apiControl.deleteQueueMust(Object.keys(req.body))) {
        var createQueueObj = {};
        var callbackDeleteQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error deleting queue', status)
            else {
                response.sendResponse(res, 'Success, deleted Queue ID => ' + req.body.queueId, 200)
            }
        }

        mongoQueue.mongoDBQueueDelete(callbackDeleteQueue, req.body.companyId, mongoConstants.collectionNameQueue, req.body.queueId);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}


