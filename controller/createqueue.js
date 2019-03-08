var random = require('../common/random')
var response = require('../common/response')
var mongo = require('../model/mongo')
var mongoConstants = require('../constants')
var apiControl = require('./api')


exports.createQueue = function (req, res) {
    // create a simple queue
    var createQueueObj = {};
    createQueueObj['queueId'] = random.getRandom(8);
    createQueueObj['createdDate'] = new Date(new Date().toUTCString())
    createQueueObj['lastUpdated'] = new Date(new Date().toUTCString())
    for (var key in req.body) {
        console.log(key);
        console.log(req.body[key]);
        if (apiControl.createQueue(key))
            createQueueObj[key] = req.body[key];
    }
    console.log(createQueueObj);
    var callback = function (status, data) {
        if (status != 200)
            response.sendResponse(res, 'Error inserting queue', status)
        else
            response.sendResponse(res, 'Success, ID => ' + data.queueId, 200)
    }

    mongo.mongoDB(callback, mongoConstants.dbName, mongoConstants.collectionNameCentennial, mongoConstants.dbActionTestInsertCommand, createQueueObj);


}


function getValue(val) {
    if (val == undefined || val == null) {
        return false;
    }
    return true;
}


