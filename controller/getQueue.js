var random = require('../common/random')
var response = require('../common/response')
var mongoQueue = require('../model/queue')
var mongoShared = require('../model/shared')
var mongoConstants = require('../constants')
var apiControl = require('./api')
var mail = require('../common/mail')


exports.getQueue = function (req, res) {
    // create a simple queue
    if (apiControl.getQueueMust(Object.keys(req.params))) {
        var callbackGetQueue = function (status, data) {
            if (status != 200)
                //response.sendResponse(res, 'Error getting queue', status)
                res.render('viewQueue', {
                    success: '',
                    error:'Error getting queue!!',
                    name:'',
                    description: '',
                    startTime: '',
                    closeTime:'',
                });
            else {
                //response.sendResponse(res, data, 200)
                res.render('viewQueue', {
                    success: '',
                    error:'',
                    name: data.name,
                    description: data.description,
                    startTime: data.startTime,
                    closeTime:data.closeTime,
                    queueId:data.queueId,
                });
            }
        }
        mongoQueue.mongoDBQueueGet(callbackGetQueue, req.params.companyId, mongoConstants.collectionNameQueue, req.params.queueId);
    } else {
        //response.sendResponse(res, 'Bad Request', 403);
        res.render('viewQueue', {
            success: '',
            error:'Bad Request!!',
            name:'',
            description: '',
            startTime: '',
            closeTime:'',
        });
    }
}

exports.getAllQueue = function (req, res) {
    // create a simple queue
    if (apiControl.getAllQueueMust(Object.keys(req.params))) {
        var callbackGetAllQueue = function (status, data) {
            if (status != 200)
                response.sendResponse(res, 'Error getting queue', status)
            else {
                response.sendResponse(res, data, 200)
            }
        }
        mongoQueue.mongoDBQueueGetAll(callbackGetAllQueue, req.params.companyId, mongoConstants.collectionNameQueue);
    } else {
        response.sendResponse(res, 'Bad Request', 403);
    }
}


