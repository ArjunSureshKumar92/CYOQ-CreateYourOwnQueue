var random = require('../common/random')
var response = require('../common/response')
var mongoQueue = require('../model/queue')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.deleteQueue = function (req, res) {
    // delete a queue
    if (apiControl.deleteQueueMust(Object.keys(req.body),Object.values(req.body))) {
        var createQueueObj = {};
        var callbackDeleteQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error deleting queue', status)
            else {
                response.sendResponse(res, 'Success, deleted Queue ID => ' + req.body.queueId, 200)
            }
        }
        var callbackQueueExist = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such queue exist', status)
            else {
               mongoQueue.mongoDBQueueDelete(callbackDeleteQueue, req.body.companyId, mongoConstants.collectionNameQueue, req.body.queueId);
            }
        }
        var callbackExistCase = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'No such company exist', status)
            else {
                if(data.email == req.params.authKey) {
                    mongoShared.checkQueueExist(callbackQueueExist, req.body.companyId, mongoConstants.collectionNameQueue, req.body.queueId);
                } else {
                    response.sendResponse(res, 'Unauthorised User', 401)
                }
            }
        }
        mongoShared.checkCustomerExist(callbackExistCase, mongoConstants.globalDbName, mongoConstants.collectionNameCustomers, req.body.companyId);
        
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}


